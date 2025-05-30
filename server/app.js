const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./utilise/conn'); // 👈 Import connection function

require('dotenv').config(); // ⬅ Make sure you have dotenv to read .env file
conn(); // 👈 Connect to DB at startup

app.use(cors());
app.use(express.json());

const auth = require('./routes/auth');

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.use("/api/v1", auth);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
