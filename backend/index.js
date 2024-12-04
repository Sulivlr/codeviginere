const express = require('express')
const  { Vigenere } = require('caesar-salad');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.post('/encode', (req, res) => {
  const  { password, message } = req.body;
  const encoded = Vigenere.Cipher(password).crypt(message);
  res.json({encoded});
});

app.post('/decode', (req, res) => {
  const {password, message} = req.body;
  const decoded = Vigenere.Decipher(password).crypt(message);
  res.json({decoded});
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})