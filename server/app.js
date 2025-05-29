// const http = require('http');
const express = require('express');
const app = express();

app.use(express.json());
require('./utilise/conn');
const auth = require('./routes/auth');

app.get('/', (req,res) => {
  res.send('')
})

app.use("/api/v1", auth);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
