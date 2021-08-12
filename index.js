require("dotenv").config();
const path = require("path")
const express = require("express")
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log("Escuchando en puerto:", port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("*", (req, res) => {
//   res.redirect('/');
  res.sendFile(__dirname + "/public/index.html");
});
