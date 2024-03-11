const API = "https://mow-api.vercel.app/customer";
const searchParams = new URLSearchParams(window.location.search);
const type = searchParams.get("f");
const customer = searchParams.get("c");
const MAP_DATA = {
  a: {
    frame:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3909.5713516953256!2d106.5060551!3d11.510813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b55e4382e7a8b%3A0x877b1866dcb2478b!2zTW934oCZcyBIb21l!5e0!3m2!1sen!2s!4v1709737635492!5m2!1sen!2s",
    link: "https://maps.app.goo.gl/ZuzG2u1f6Tca8tkg9",
  },
  e: {
    frame:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.99467555142417!2d106.61601868276591!3d11.547837719068992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174aa3013db398b%3A0xc889eb9d40275e0!2zVHLhuqFtIHjEg25nIGThuqd1IFThuqVuIEtp4buHdA!5e0!3m2!1svi!2s!4v1710038286387!5m2!1svi!2s",
    link: "https://maps.app.goo.gl/gyuf8ZymXpuJLkEH6",
  },
};
let quantity = 1;

let guest = null;

let customerName = "Quý Khách";

function setThemeColor(color) {
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", color);
}

async function getCustomer(customer) {
  try {
    const response = await fetch(`${API}?id=${customer}`);
    const data = await response.json();
    return data.isSuccess ? data.result : false;
  } catch (error) {
    return false;
  }
}

async function getCardData() {
  try {
    const response = await fetch("/data/data.json");
    return await response.json();
  } catch (error) {
    return false;
  }
}

function setupData(data) {
  const info = data[type] || data.null;
  const elements = {
    "card-cover-date": `${info.time.weddingDate} . 03 . 2024`,
    "short-name-1": info.shortName1,
    "short-name-2": info.shortName2,
    "family-type-2": info.family2.title,
    "family-type-1": info.family1.title,
    "family-dad-2": info.family2.dad,
    "family-dad-1": info.family1.dad,
    "family-mom-2": info.family2.mom,
    "family-mom-1": info.family1.mom,
    "family-add-2": info.family2.address,
    "family-add-1": info.family1.address,
    "wedding-type": info.weddingType,
    "detail-full-name-1": info.fullName1,
    "detail-full-name-2": info.fullName2,
    "detail-name-type-1": info.name1Type,
    "detail-name-type-2": info.name2Type,
    "location-1": info.weddingLocation.name1,
    "location-2": info.weddingLocation.name2,
    "event-date-2": `${info.time.weddingDate} . 03 . 2024`,
    "lunar-month": info.time.weddingLunarMonth,
    "lunar-date": info.time.weddingLunarDate,
    // "wedding-location-address": info.weddingLocation.address,
    "event-full-date": `Vào lúc ${info.time.ancestralTime} | Chủ nhật`,
  };

  for (const id in elements) {
    const element = document.getElementById(id);
    if (element) element.innerText = elements[id];
  }
  const weddingLocationAddress = document.getElementById(
    "wedding-location-address"
  );
  weddingLocationAddress.innerHTML = info.weddingLocation.address;
}

function onSwipe() {
  document.getElementById("down-btn").classList.add("invisible");
}

window.addEventListener("DOMContentLoaded", async (event) => {
  const openCardBtn = document.getElementById("open-card-btn");
  const cardCover = document.getElementById("card-cover");
  const cardDetail = document.getElementById("card-detail");
  const actionSection = document.getElementById("action-section");

  if (openCardBtn && cardCover) {
    openCardBtn.addEventListener("click", async () => {
      cardCover.classList.add("hidden");
      initTabAction();
      toggleLoadingLayer();

      const cardData = await getCardData();
      if (cardData) {
        const timeout = setTimeout(() => {
          setupData(cardData);
          cardDetail.classList.remove("hidden");
          actionSection.classList.remove("hidden");
          playAudio();

          setupLocationView(type);
          const confirmBtn = document.getElementById("confirm-btn");
          const deniedBtn = document.getElementById("denied-btn");
          if (confirmBtn) {
            confirmBtn.addEventListener("click", async () => {
              await confirmJoin(quantity);
            });
          }
          if (deniedBtn) {
            deniedBtn.addEventListener("click", async () => {
              await confirmJoin(0);
            });
          }

          if (AOS) {
            AOS.init();
          }

          cardDetail.addEventListener("scroll", onSwipe);
          document.body.classList.remove("overflow-hidden");

          toggleLoadingLayer();
          setThemeColor("white");
        }, 1000);
      }

      guest = await getCustomer(customer);
      if (guest) {
        setupCustomerName(guest);
      }
    });
  }
});

function toggleLoadingLayer() {
  document.querySelector("#loading-overlay").classList.toggle("flex");
  document.querySelector("#loading-overlay").classList.toggle("hidden");
  setThemeColor("white");
}

async function setupCustomerName(customer) {
  const { name } = customer;
  const customerNameElement = document.getElementById("customer-name");
  if (customerNameElement) {
    customerNameElement.innerText = name;
  }
}

function setupLocationView(type) {
  const mapFrame = document.getElementById("location-map");
  const mapLink = document.getElementById("location-link");
  const data = MAP_DATA[type] || {
    frame:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3909.5713516953256!2d106.5060551!3d11.510813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b55e4382e7a8b%3A0x877b1866dcb2478b!2zTW934oCZcyBIb21l!5e0!3m2!1sen!2s!4v1709737635492!5m2!1sen!2s",
    link: "https://maps.app.goo.gl/ZuzG2u1f6Tca8tkg9",
  };
  mapFrame?.setAttribute("src", data.frame);
  mapLink?.setAttribute("href", data.link);
}

function playAudio() {
  const cardAudio = document.getElementById("card-audio");
  const audioControlBtn = document.getElementById("audio-control");

  let isPlaying = false;
  cardAudio.onplaying = function () {
    isPlaying = true;
  };
  cardAudio.onpause = function () {
    isPlaying = false;
  };
  audioControlBtn.addEventListener("click", () => {
    if (isPlaying) {
      cardAudio.pause();
    } else {
      cardAudio.play();
    }
    audioControlBtn.classList.toggle("sound-mute");
  });

  let volume = 0;
  const targetVolume = 0.4;
  if (cardAudio) {
    cardAudio.play();

    const interval = setInterval(() => {
      if (volume < targetVolume) {
        volume += 0.02;
        cardAudio.volume = volume;
      } else {
        clearInterval(interval);
      }
    }, 200);
  }
}

function initTabAction() {
  const actionSection = document.getElementById("action-section");
  const tabContainer = actionSection.querySelector(".tabs");
  const tabs = tabContainer.querySelectorAll(".tab");
  const btnContainer = document.getElementById("action-btn");
  btnContainer.addEventListener("click", function (event) {
    const targetElement = document.getElementById("action-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    if (event.target.tagName === "BUTTON") {
      tabs.forEach((elm) => elm.classList.add("hidden"));
      tabs[event.target.dataset.id - 1].classList.remove("hidden");
    }
  });
}

async function confirmJoin(value) {
  try {
    guest = { ...guest, quantity: value, isAttended: value ? true : false };
    const response = await fetch(`${API}`, {
      redirect: "follow",
      method: "POST",
      body: JSON.stringify(guest),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    if (data.isSuccess) {
      guest = data.result;
      alert("Gửi thông tin thành công!");
      return guest;
    }
    return data.isSuccess ? data.result : false;
  } catch (error) {
    alert("Có lỗi xảy ra, vui lòng liên hệ trực tiếp với cô dâu hoặc chú rễ!");
    return false;
  }
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // var raw = JSON.stringify({
  //   id: "6-e6099751",
  //   name: "vợ chồng bạn Phương Trang",
  //   inviteBy: "a",
  //   inviteLink: "https://invite.mow-mini.one?f=a&c=685eb0a7",
  //   isAttended: false,
  //   quantity: 0,
  //   wish: "Alo Alo",
  //   status: false,
  // });
  // var requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: "follow",
  // };
  // fetch(
  //   "https://script.google.com/macros/s/AKfycbxJm8PPLStU24ZtenelKlJIDdWWjZ8rxo5JAHHCOueNJkKICZpP0qJpAOattHwlfnNBlQ/exec",
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
}

function onSelectQuantity(element) {
  quantity = element.value || 1;
}
