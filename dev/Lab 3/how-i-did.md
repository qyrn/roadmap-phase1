# Lab 3 — Web Recon & Client-Side

Serveur : `http://localhost:7474`
Outils : navigateur + DevTools uniquement (F12)
Objectif : trouver les 7 flags cachés dans le site NordTech Solutions.

---

## Challenge 1 — robots.txt Disclosure

**Catégorie :** Reconnaissance
**Indice :** Tout bon crawler (et tout bon pentesteur) commence par là.

**Comment j'ai trouvé :**

> Je suis allé sur le /robots.txt, j'ai testé les url disallow.

**Flag :**

> `FLAG{robots_txt_exposes_hidden_path}`

---

## Challenge 2 — HTML Source Comment

**Catégorie :** Source code review
**Indice :** Les développeurs laissent parfois des notes dans le code HTML. View Source est ton ami.

**Comment j'ai trouvé :**

> J'ai inspecté le code sources de la page about.html

**Flag :**

> `FLAG{html_comment_dev_leak}`

---

## Challenge 3 — Cookie Role Tamper

**Catégorie :** Cookie manipulation
**Indice :** Le tableau de bord te refuse l'accès ? Regarde ce qu'il sait de toi dans DevTools → Application → Cookies. Modifie, rafraîchis.

**Comment j'ai trouvé :**

> J'ai juste modifié les cookies visitor -> admin pour accéder au dashboard

**Flag :**

> `FLAG{cookie_role_tamper_admin}`

---

## Challenge 4 — Weak Credentials

**Catégorie :** Authentification
**Indice :** Les identifiants par défaut sont la première chose à essayer. Pense simple.

**Comment j'ai trouvé :**

> J'ai testé admin / admin  

**Flag :**

> `FLAG{weak_creds_admin_admin}`

---

## Challenge 5 — Hidden Form Field Bypass

**Catégorie :** Client-side trust
**Indice :** La boutique affiche un prix. Ce prix est quelque part dans la page. DevTools → Elements. Qu'est-ce qui se passe si tu changes cette valeur avant de soumettre ?

**Comment j'ai trouvé :**

> J'ai modifié la value price en 0

**Flag :**

> `FLAG{hidden_field_client_trust_bypass}`

---

## Challenge 6 — Response Header Leak

**Catégorie :** Information disclosure
**Indice :** La page "À propos" pointe vers un endpoint d'état. Visite-le, mais ne regarde pas seulement le corps de la réponse — ouvre DevTools → Network et inspecte les headers HTTP de la réponse.

**Comment j'ai trouvé :**

> J'ai checké le devtools network en étant sur la page /api/status

**Flag :**

> `FLAG{response_header_debug_token_leak}`

---

## Challenge 7 — Unlinked Backup Page

**Catégorie :** Reconnaissance / Path discovery
**Indice :** Challenge 1 t'a donné une liste. Tu n'as peut-être pas tout visité.

**Comment j'ai trouvé :**

> J'ai visité le backup.html

**Flag :**

> `FLAG{backup_page_still_accessible}`

---

## Bilan

| # | Challenge | Trouvé ? | Outil utilisé |
|---|-----------|----------|---------------|
| 1 | robots.txt Disclosure | [x] | URL directe dans le navigateur |
| 2 | HTML Source Comment | [x] | View Source (Ctrl+U) |
| 3 | Cookie Role Tamper | [x] | DevTools → Application → Cookies |
| 4 | Weak Credentials | [x] | Formulaire de login |
| 5 | Hidden Form Field | [x] | DevTools → Elements |
| 6 | Response Header Leak | [x] | DevTools → Network → Headers |
| 7 | Backup Page | [x] | URL directe (issue de robots.txt) |

**Score final : 7/7**
