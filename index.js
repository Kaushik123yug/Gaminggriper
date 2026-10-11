require('dotenv').config()
const express = require('express');

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
  res.send('iron_grip_gaming')
})

app.get('/login', (req, res) => {
  res.send('<h2>Login at iron_grip_gaming</h2>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Iron Grip Gaming</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
}) 