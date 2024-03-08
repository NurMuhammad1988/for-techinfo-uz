const express = require('express')
const app = express()
const cors = require('cors')
const blogs = require('./api/blogsData.json')
const port = process.env.PORT || 5001;

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Blog server is runningggsss!")
});

app.get('/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
  const blog = blogs.filter(b => b.id === id);
  // console.log(blog)
  res.send(blog)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//nodemon ishlatganda browserga to'g'ridan to'g'ri o'tmas ekan nodemon yuklanganda pastida link berarkan localhostda o'sha linkni browserga kirgizgandan keyin react app loyiha ochdi serverda

//server qismi bor filini ichiga vite + tailwind ramkasi (faili) skachat qilindi

//server qismi nodemon va npm start bilan ishga tushadi

//server qismini ichidagi vite+tailwind file yani react-blog-website npm run dev bilan ishga tushadi