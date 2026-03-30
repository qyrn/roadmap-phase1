# 🔧 Burp Suite — Cheatsheet

---

## 🧭 C'est quoi ?

Burp Suite est un **proxy d'interception HTTP** qui se place entre le navigateur et le serveur.
Il permet de capturer, lire, modifier et rejouer des requêtes HTTP.

---

## ⚙️ Setup rapide

1. Lancer Burp Suite
2. Aller dans **Proxy > Options** → vérifier que le listener est sur `127.0.0.1:8080`
3. Configurer le navigateur pour utiliser le proxy `127.0.0.1:8080`
4. Installer le certificat CA Burp pour intercepter le HTTPS :
   - Naviguer vers `http://burpsuite` ou `http://127.0.0.1:8080`
   - Télécharger et installer le cert dans le navigateur

---

## 🗂️ Onglets principaux

| Onglet | Rôle |
|---|---|
| **Proxy** | Intercepte les requêtes en temps réel |
| **Repeater** | Rejoue et modifie des requêtes manuellement |
| **Target** | Site map, scope, issue definitions |
| **Intruder** | Fuzzing automatisé (limité en Community) |
| **Decoder** | Encode/décode (Base64, URL, HTML...) |
| **Comparer** | Compare deux requêtes ou réponses |

---

## 🔴 Proxy

| Action | Comment |
|---|---|
| Activer l'interception | **Proxy > Intercept > Intercept is on** |
| Désactiver l'interception | Cliquer sur le bouton → **Intercept is off** |
| Voir l'historique | **Proxy > HTTP History** |
| Forward une requête | Bouton **Forward** |
| Drop une requête | Bouton **Drop** |
| Envoyer au Repeater | Clic droit → **Send to Repeater** |
| Envoyer à l'Intruder | Clic droit → **Send to Intruder** |

---

## 🔁 Repeater

**Workflow :**
1. Repérer une requête dans **Proxy > HTTP History**
2. Clic droit → **Send to Repeater**
3. Modifier la requête (paramètres, headers, body, IDs...)
4. Cliquer **Send**
5. Analyser la réponse à droite

**Cas d'usage :**
- Tester des valeurs d'ID différentes → détection IDOR
- Passer une valeur invalide → déclencher une erreur verbeux
- Modifier des headers (ex: `Cookie`, `Authorization`)
- Tester des injections manuellement

---

## 🗺️ Target

### Site map
- Liste toutes les pages visitées pendant la session proxy
- Utile pour la **reconnaissance** et la découverte d'endpoints API
- Se construit automatiquement en naviguant sur l'app

### Scope settings
- Définit sur quels domaines/URLs Burp doit travailler
- Évite de polluer l'historique avec du trafic inutile (ex: pub, CDN)
- Ajouter une cible : clic droit sur le domaine dans le Site map → **Add to scope**

### Issue definitions
- Liste des vulnérabilités cherchées par le scanner Pro
- Accessible en lecture en **Community** — utile pour les rapports

---

## 🔍 Réflexes de recon

- `/robots.txt` → pages cachées, panels admin, répertoires sensibles
- `/sitemap.xml` → structure de l'app
- `/.well-known/` → infos de configuration exposées

---

## 🚨 Vulnérabilités courantes détectables manuellement

### IDOR (Insecure Direct Object Reference)
- Repérer un ID dans une URL ou requête (`/file?id=2`, `/user/42`)
- Modifier l'ID → accès aux données d'un autre utilisateur ?
- **Faille côté serveur** : le serveur ne vérifie pas les droits d'accès

### Information Disclosure
- Provoquer une erreur volontaire (ID invalide, paramètre manquant)
- Lire le message d'erreur → version du serveur, stack technique, chemins internes
- Ces infos permettent de cibler des CVE connues

### Security through obscurity
- Cacher une page dans `robots.txt` ne la protège pas — le fichier est public
- Une ressource non linkée reste accessible si l'URL est connue

---

## 📋 HTTP — Rappels

| Méthode | Paramètres |
|---|---|
| **GET** | Dans l'URL (`?param=value`) |
| **POST** | Dans le **body** de la requête |

| Code | Signification |
|---|---|
| `200` | OK |
| `301` | Redirect permanent |
| `302` | Redirect temporaire |
| `403` | Forbidden |
| `404` | Not Found |
| `500` | Internal Server Error |

---

## ⚡ Raccourcis utiles

| Raccourci | Action |
|---|---|
| `Ctrl+R` | Send to Repeater |
| `Ctrl+I` | Send to Intruder |
| `Ctrl+Z` | Undo dans l'éditeur de requête |
| `Ctrl+Space` | Complétion dans l'éditeur |