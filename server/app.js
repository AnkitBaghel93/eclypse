const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
require('./utilise/conn');
const auth = require('./routes/auth');

app.get('/', (req,res) => {
  res.send('')
})



app.use("/api/v1", auth);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
