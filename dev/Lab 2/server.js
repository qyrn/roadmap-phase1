const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const PORT = 7373;

app.get('/flag/1', (req, res) => {
  res.json({
    flag: 'FLAG{ss_tulpn_service_found}',
    message: 'Bonne méthode — tu as localisé le service actif.'
  });
});

app.get('/flag/2', (req, res) => {
  res.set('X-Challenge-Flag', 'FLAG{http_headers_curl_-I}');
  res.json({ message: 'Regarde les headers de cette réponse, pas le body.' });
});

app.get('/flag/3', (req, res) => {
  res.status(405).json({ hint: 'GET refusé. Change de méthode HTTP.' });
});

app.post('/flag/3', (req, res) => {
  if (req.body && req.body.method === 'POST') {
    res.json({ flag: 'FLAG{http_POST_not_GET}' });
  } else {
    res.status(400).json({ hint: 'Body attendu : {"method": "POST"}' });
  }
});

app.get('/flag/4', (req, res) => {
  const host = req.headers['host'] || '';
  if (host.startsWith('lab2.local')) {
    res.json({ flag: 'FLAG{virtual_host_dns_concept}' });
  } else {
    res.status(403).json({ hint: 'Ce flag répond uniquement au bon hostname. Pense à DNS.' });
  }
});

const SECRET_PIN = '7431';
let attempts = 0;

app.post('/flag/5', (req, res) => {
  const { pin } = req.body;
  attempts++;

  if (pin === SECRET_PIN) {
    res.json({ flag: 'FLAG{bruteforce_pin_7431}', attempts });
  } else {
    res.status(401).json({ error: 'PIN incorrect.', attempts });
  }
});

app.listen(PORT, () => {
  console.log(`Lab 2 — Network Challenges sur http://localhost:${PORT}`);
});
