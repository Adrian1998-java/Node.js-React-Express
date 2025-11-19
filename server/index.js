const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/saludo"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3001, () => console.log("Servidor backend en http://localhost:3001"));
