require(`dotenv`).config()
const express = require(`express`)
const app = express()

const PORT = 3000
app.get(`/`, (req, res) => {
    res.send(`the server is running`)
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`your secret is ${process.env.SECRET_PASSWORD}`);
    
})