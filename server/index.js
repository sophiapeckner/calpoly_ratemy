const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose.connect(
 "mongodb://127.0.0.1:27017/reviewer"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email}).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("success");
      } else {
        console.log(user.password)
        console.log(psw)
        res.json("wrong password");
      }
    }
  });
});
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server running");
});

app.get("/calpoly/organizations", async (req, res) => {
  let data = await fetch(
    "https://now.calpoly.edu/api/discovery/search/organizations?orderBy%5B0%5D=UpperName%20asc&top=455&filter=&query=&skip=0"
  );

  data = await data.json();

  res.json(data);
});
