const express = require('express');
const path = require('path');
const app = express();
const PORT = 4545;

// Public klasörünü statik dosyalar için kullan
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
