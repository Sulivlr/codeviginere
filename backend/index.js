const express = require('express');
const { Vigenere } = require('caesar-salad');
const cors = require('cors');

const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.post('/encode', async (req, res) => {
   const {password, message} = req.body;
   const encoded = Vigenere.Cipher(password).crypt(message);
   res.json(encoded);
});

app.post('/decode', async (req, res) => {
   const {password, message} = req.body;
   const decode = Vigenere.Decipher(password).crypt(message);
   res.json(decode);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});