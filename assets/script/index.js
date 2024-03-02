const LOAD_TIME = 1500;
const searchParams = new URLSearchParams(window.location.search);
const type = searchParams.get("f");
const customer = searchParams.get("c");
let customerName = "Quý Khách";
if (customer) {
  // call to get customer data
}
const data = {
  a: {
    fullName1: "Võ Yên Hoàng",
    name1: "Hoàng",
    shortName1: "Yên Hoàng",
    name1Type: "Thứ nam",
    fullName2: "Đỗ Ngọc Trang",
    shortName2: "Ngọc Trang",
    name2: "Trang",
    name2Type: "Thứ nữ",
    weddingType: "Lễ Tân Hôn",
    time: {
      weddingDate: "31",
      weddingLunarDate: "22",
      weddingLunarMonth: "02",
      ancestralTime: "10H00",
    },
    weddingLocation: {
      address:
        "<span>Tổ 5, Ấp Sóc 5, Xã Tân Hiệp <br> Huyện Hớn Quản, Tỉnh Bình Phước</span>",
      name1: "",
      name2: '"Tư gia"',
    },
    family1: {
      title: "Nhà trai",
      dad: "Ông Võ Đình Thuận",
      mom: "Bà Nguyễn Thị Hoà",
      address: "Tân Hiệp, Hớn Quản, Bình Phước",
    },
    family2: {
      title: "Nhà gái",
      dad: "Ông Đỗ Ngọc Sáng",
      mom: "Bà Nguyễn Thị Sa",
      address: "Tân Khai, Hớn Quản, Bình Phước",
    },
  },
  e: {
    fullName1: "Đỗ Ngọc Trang",
    name1: "Trang",
    shortName1: "Ngọc Trang",
    name1Type: "Thứ nữ",
    fullName2: "Võ Yên Hoàng",
    shortName2: "Yên Hoàng",
    name2: "Hoàng",
    name2Type: "Thứ nam",
    weddingType: "Lễ Vu Quy",
    time: {
      weddingDate: "24",
      weddingLunarDate: "15",
      weddingLunarMonth: "02",
      ancestralTime: "09H00",
    },
    weddingLocation: {
      address: "Quốc lộ 13, huyện Hớn Quản, tỉnh Bình Phước",
      name1: "Trung tâm hội nghị tiệc cưới",
      name2: '"Tấn Kiệt"',
    },
    family1: {
      title: "Nhà gái",
      dad: "Ông Đỗ Ngọc Sáng",
      mom: "Bà Nguyễn Thị Sa",
      address: "Tân Khai, Hớn Quản, Bình Phước",
    },
    family2: {
      title: "Nhà trai",
      dad: "Ông Võ Đình Thuận",
      mom: "Bà Nguyễn Thị Hoà",
      address: "Tân Hiệp, Hớn Quản, Bình Phước",
    },
  },
  null: {
    fullName1: "Đỗ Ngọc Trang",
    name1: "Trang",
    shortName1: "Ngọc Trang",
    name1Type: "Thứ nữ",
    fullName2: "Võ Yên Hoàng",
    shortName2: "Yên Hoàng",
    name2: "Hoàng",
    name2Type: "Thứ nam",
    weddingType: "Lễ Vu Quy",
    time: {
      weddingDate: "24",
      weddingLunarDate: "15",
      weddingLunarMonth: "02",
      ancestralTime: "09H00",
    },
    weddingLocation: {
      address: "Quốc lộ 13, huyện Hớn Quản, tỉnh Bình Phước",
      name1: "Trung tâm hội nghị tiệc cưới",
      name2: "Tấn Kiệt",
    },
    family1: {
      title: "Nhà gái",
      dad: "Ông Đỗ Ngọc Sáng",
      mom: "Bà Nguyễn Thị Sa",
      address: "Tân Khai, Hớn Quản, Bình Phước",
    },
    family2: {
      title: "Nhà trai",
      dad: "Ông Võ Đình Thuận",
      mom: "Bà Nguyễn Thị Hoà",
      address: "Tân Hiệp, Hớn Quản, Bình Phước",
    },
  },
};

function setupData() {
  console.log(type, data[type]);
  const info = data[type] || data.null;
  const coverDate = document.getElementById("card-cover-date");
  const coverShortName1 = document.getElementById("short-name-1");
  const coverShortName2 = document.getElementById("short-name-2");
  const familyType2 = document.getElementById("family-type-2");
  const familyType1 = document.getElementById("family-type-1");
  const familyDad2 = document.getElementById("family-dad-2");
  const familyDad1 = document.getElementById("family-dad-1");
  const familyMom2 = document.getElementById("family-mom-2");
  const familyMom1 = document.getElementById("family-mom-1");
  const familyAdd2 = document.getElementById("family-add-2");
  const familyAdd1 = document.getElementById("family-add-1");
  const weddingType = document.getElementById("wedding-type");
  const detailName1 = document.getElementById("detail-full-name-1");
  const detailName2 = document.getElementById("detail-full-name-2");
  const detailNameType1 = document.getElementById("detail-name-type-1");
  const detailNameType2 = document.getElementById("detail-name-type-2");
  const location1 = document.getElementById("location-1");
  const location2 = document.getElementById("location-2");
  const detailEventFullDate = document.getElementById("event-full-date");
  const eventDate2 = document.getElementById("event-date-2");
  const lunarMonth = document.getElementById("lunar-month");
  const lunarDate = document.getElementById("lunar-date");
  const weddingLocationAddress = document.getElementById(
    "wedding-location-address"
  );
  if (coverDate) coverDate.innerText = `${info.time.weddingDate} . 03 . 2024`;
  if (coverShortName1) coverShortName1.innerText = info.shortName1;
  if (coverShortName2) coverShortName2.innerText = info.shortName2;
  if (familyType2) familyType2.innerText = info.family2.title;
  if (familyType1) familyType1.innerText = info.family1.title;
  if (familyDad2) familyDad2.innerText = info.family2.dad;
  if (familyDad1) familyDad1.innerText = info.family1.dad;
  if (familyMom2) familyMom2.innerText = info.family2.mom;
  if (familyMom1) familyMom1.innerText = info.family1.mom;
  if (familyAdd2) familyAdd2.innerText = info.family2.address;
  if (familyAdd1) familyAdd1.innerText = info.family1.address;
  if (weddingType) weddingType.innerText = info.weddingType;
  console.log(info.weddingType);
  if (detailName1) detailName1.innerText = info.fullName1;
  if (detailName2) detailName2.innerText = info.fullName2;
  if (detailNameType1) detailNameType1.innerText = info.name1Type;
  if (detailNameType2) detailNameType2.innerText = info.name2Type;
  if (location1) location1.innerText = info.weddingLocation.name1;
  if (location2) location2.innerText = info.weddingLocation.name2;
  if (eventDate2) eventDate2.innerText = `${info.time.weddingDate} . 03 . 2024`;
  if (lunarMonth) lunarMonth.innerText = info.time.weddingLunarMonth;
  if (lunarDate) lunarDate.innerText = info.time.weddingLunarDate;
  if (weddingLocationAddress)
    weddingLocationAddress.innerHTML = info.weddingLocation.address;
  if (detailEventFullDate)
    detailEventFullDate.innerText = `Vào lúc ${info.time.ancestralTime} | Chủ nhật`;
}

function onSwipe() {
  const swipeBtn = document.getElementById("down-btn");
  swipeBtn.classList.add("invisible");
}

window.addEventListener("DOMContentLoaded", (event) => {
  const openCardBtn = document.getElementById("open-card-btn");
  const cardCover = document.getElementById("card-cover");
  const cardDetail = document.getElementById("card-detail");
  const upBtn = document.getElementById("up-btn");
  const downBtn = document.getElementById("down-btn");
  setupData();
  setupCustomerName();
  if (openCardBtn && cardCover) {
    openCardBtn.addEventListener("click", () => {
      playAudio();
      setTimeout(() => {
        cardCover.classList.add("hidden");
        cardDetail.classList.remove("hidden");
        showLoadingLayer();
      }, 800);
      document.addEventListener("scroll", onSwipe);
    });
  }
  upBtn.addEventListener("click", () => {
    console.log(123);
  });
  downBtn.addEventListener("click", () => {
    console.log(876);
  });
});

function showLoadingLayer() {
  const loadingLayer = document.querySelector("#loading-overlay");
  loadingLayer.classList.toggle("flex");
  loadingLayer.classList.toggle("hidden");
  setTimeout(() => {
    loadingLayer.classList.toggle("flex");
    loadingLayer.classList.toggle("hidden");
  }, LOAD_TIME);
}

async function setupCustomerName() {
  const customerName = document.getElementById("customer-name");
  const name = "Quý Khách";
  customerName.innerText = name;
}

function playAudio() {
  const cardAudio = document.getElementById("card-audio");
  let volume = 0;
  let targetVolume = 0.4;
  if (cardAudio) {
    cardAudio.play();

    let interval = setInterval(function () {
      if (volume < targetVolume) {
        volume += 0.02;
        cardAudio.volume = volume;
      } else {
        clearInterval(interval);
      }
    }, 200);
  }
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      //   document.querySelector("#loading-overlay").style.display = "none";
    }, LOAD_TIME);
  }
};
