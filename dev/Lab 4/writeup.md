# Lab 4 — FrameCity

Serveur : `http://localhost:7575`
Outils : navigateur + DevTools (F12)

---

| # | Flag trouvé | Méthode / chemin parcouru |
|---|-------------|--------------------------|
| 1 | FLAG{fc_recon_robots_first} | Robots.txt -> /staff-uploads |
| 2 | FLAG{fc_localstorage_debug_token} | Inspecter la page account.html |
| 3 | FLAG{fc_hidden_score_field_bypass} | Sur la page submit.html, j'ai checké le bouton et j'ai vu que juste au dessus y'avait une value hidden et donc je l'ai changé en show |
| 4 | FLAG{fc_cookie_tier_vip_bypass}
 | J'ai juste changé le cookie de la page compte en "vip" |
| 5 | FLAG{fc_js_source_comment_leak} | J'ai checké les request de app.js et je suis allé dans header |
| 6 | FLAG{fc_debug_console_exposed} | J'ai trouvé en tapant /admin.html et après /admin |
| 7 | FLAG{fc_build_hash_header_exposed} | J'ai check le header de la requête api pour les photos |
---

## Notes libres

> ...
