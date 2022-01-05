const express = require('express')

const app = express()
app.use(express.json())

app.use(express.static("build"))

const foods = ["Christmas Pudding", "Mince pie", "stuffing", "eggnog", "gingersnaps"]

app.get("/api/foods", (req, res) => {
  // const food = foods[Math.floor(Math.random()*foods.length)];
  // res.send(food)
  res.send(foods)
})

app.post("/api/foods", (req, res) => {
  const foodName = req.body.name
  foods.push(foodName)
  res.send(req.body)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log("listening on port 8080"))