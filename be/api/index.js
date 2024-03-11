const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(bodyParser.json());

const API =
  "https://script.google.com/macros/s/AKfycbzkAIpXKe8qRXmw78YFwjPelHJ9dqidEeDjH3Gjn4D6xW9b2WtIrKty6elmFmwtMQZKPQ/exec";

app.get("/customer", async (req, res) => {
  try {
    let id = req.query.id;
    const response = await fetch(`${API}?id=${id}`)
      .then((d) => d.json())
      .then((result) => result);
    return res.json(response);
  } catch (error) {
    return res.status(503).send(error.message);
  }
});

app.post("/customer", async (req, res) => {
  try {
    const response = await fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = response.json();
    return res.json(data);
  } catch (error) {
    return res.status(503).send(error.message);
  }
});

app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;

  // Basic validation
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  // Create a new post object
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  // Add the new post to the in-memory database
  posts.push(newPost);

  // Respond with the newly created post
  res.status(201).json(newPost);
});

app.listen(3333, () => console.log("Server ready on port 3333."));

module.exports = app;
