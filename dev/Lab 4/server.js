const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = 7575;

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(
    'User-agent: *\nDisallow: /staff-uploads\nDisallow: /internal\n'
  );
});

app.get('/staff-uploads', (req, res) => {
  res.json({ flag: 'FLAG{fc_recon_robots_first}' });
});

app.get('/api/photos', (req, res) => {
  res.set('X-Build-Hash', 'FLAG{fc_build_hash_header_exposed}');
  res.json([
    { id: 1, title: 'Rue de Belleville', author: 'mxk', likes: 142 },
    { id: 2, title: 'Pont de Brooklyn', author: 'vstr', likes: 98 },
    { id: 3, title: 'Métro ligne 2', author: 'anon', likes: 211 }
  ]);
});

app.get('/api/gallery/featured', (req, res) => {
  const tier = req.cookies.tier || 'free';
  if (tier !== 'vip') {
    res.cookie('tier', 'free', { httpOnly: false });
    return res.status(403).json({ error: 'Contenu réservé aux membres VIP.', tier });
  }
  return res.json({ flag: 'FLAG{fc_cookie_tier_vip_bypass}' });
});

app.post('/api/submit', (req, res) => {
  const score = parseInt(req.body.score, 10);
  if (score >= 10) {
    return res.json({
      accepted: true,
      flag: 'FLAG{fc_hidden_score_field_bypass}'
    });
  }
  return res.json({ accepted: true, message: 'Photo soumise avec un score de ' + score + '/10.' });
});

app.get('/admin', (req, res) => {
  res.status(404).json({ error: 'Page introuvable.', hint: 'Essaie /debug-console' });
});

app.get('/debug-console', (req, res) => {
  res.json({ flag: 'FLAG{fc_debug_console_exposed}', env: 'staging', node: process.version });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Lab 4 — FrameCity sur http://localhost:${PORT}`);
});
