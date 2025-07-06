// index.js
const express = require('express');
const app = express();
const PORT = 3000;

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
 app.get("/product",(req,res)=>{

  res.status(200).json(
    {
      "data":[
        {
          "id":1,
          "name":"A",
          "price":100
        },
        {
          "id":2,
          "name":"B",
          "price":200
        },
        {
          "id":3,
          "name":"C",
          "price":40
        }
      ],
      "message":"product fecth succesfully",
      "code":200,
      "statas":true
    }
  )
 })


app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
