// api/index.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Raju Express!');
});

app.get('/about', (req, res) => {
  console.log("GET /about hit");
  res.send('About: I am flutter developer ad bdcalling in Softvence');
});

app.get('/contract', (req, res) => {
  console.log("GET /contract hit");
  res.json({
    name: "Md Araful Islam",
    email: "rajuslam39@gmail.com",
    phone: "01928217679",
    location: "Bangladesh",
    profession: "Flutter Developer",
    currentPosition: "Flutter Developer at bdCalling",
    portfolio: "https://codecanyon.net/user/your_username",
    totalProjects: 5,
    platform: "CodeCanyon"
  });
});

app.get("/product", (req, res) => {
  res.status(200).json({
    data: [
      { id: 1, name: "A", price: 100 },
      { id: 2, name: "B", price: 200 },
      { id: 3, name: "C", price: 40 }
    ],
    message: "product fetch successfully",
    code: 200,
    statas: true
  });
});

app.post("/register", (req, res) => {
  const { name, phone, email, age } = req.body;
  const missingFields = {};

  if (!name) missingFields.name = "name is required";
  if (!phone) missingFields.phone = "phone is required";
  if (!email) missingFields.email = "email is required";
  if (!age) missingFields.age = "age is required";

  if (Object.keys(missingFields).length > 0) {
    return res.status(400).json({
      status: false,
      code: 400,
      message: "Profile create failed",
      data: missingFields
    });
  }

  res.status(201).json({
    data: { name, phone, email, age },
    status: true,
    code: 201,
    message: "Profile created successfully"
  });
});

// export handler for vercel
module.exports = app;
module.exports.handler = serverless(app);
