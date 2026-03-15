const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = 7474;

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(
    'User-agent: *\nDisallow: /backup.html\nDisallow: /secret-archive\nDisallow: /admin-panel\n'
  );
});

app.get('/secret-archive', (req, res) => {
  res.json({
    flag: 'FLAG{robots_txt_exposes_hidden_path}',
    message: 'Bonne réflexe de reconnaissance — robots.txt révèle souvent des chemins sensibles.'
  });
});

app.get('/api/status', (req, res) => {
  res.set('X-Debug-Token', 'FLAG{response_header_debug_token_leak}');
  res.json({ status: 'ok', uptime: '99.98%', version: '3.2.1', services: ['web', 'db', 'cache'] });
});

app.get('/api/dashboard', (req, res) => {
  const role = req.cookies.role || 'visitor';
  if (role !== 'admin') {
    res.cookie('role', 'visitor', { httpOnly: false });
    return res.status(403).json({ error: 'Accès refusé.', role });
  }
  return res.json({
    flag: 'FLAG{cookie_role_tamper_admin}',
    message: 'Bienvenue dans le tableau de bord administrateur.'
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    return res.json({ success: true, flag: 'FLAG{weak_creds_admin_admin}' });
  }
  return res.status(401).json({ error: 'Identifiants incorrects.' });
});

app.post('/api/purchase', (req, res) => {
  const price = parseInt(req.body.price, 10);
  if (isNaN(price) || price <= 0) {
    return res.json({
      message: `Achat validé pour ${price}€ — le serveur a fait confiance au champ client.`,
      flag: 'FLAG{hidden_field_client_trust_bypass}'
    });
  }
  return res.json({ message: `Commande enregistrée pour ${price}€. Merci !` });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Lab 3 — NordTech Solutions sur http://localhost:${PORT}`);
});
