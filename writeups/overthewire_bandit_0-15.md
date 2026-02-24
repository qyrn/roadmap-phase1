# OverTheWire – Bandit, niveaux 0 à 15

Write-up de progression sur Bandit.
Objectif : conserver la trace des approches et commandes utiles — **sans stocker les mots de passe**.

---

## Contexte

- **Plateforme :** OverTheWire – Bandit
- **Objectifs personnels :**
  - Prendre en main le shell Linux
  - Comprendre SSH, fichiers, permissions et encodages
  - Commencer à manipuler le réseau (`nc`, ports)

---

## Résumé par niveau

### Niveau 0 → 1

- **Objectif :** se connecter à la box et lire un fichier dans le home (`readme`)
- **Approche :** utiliser `ssh` puis `ls`, `cat`
- **Commandes clés :** `ssh`, `ls`, `cat`

---

### Niveau 1 → 2

- **Objectif :** lire un fichier dont le nom est un tiret (`-`)
- **Approche :** utiliser un chemin explicite pour éviter que le shell l'interprète comme une option
- **Commandes clés :** `cat ./-`

---

### Niveau 2 → 3

- **Objectif :** lire un fichier dont le nom contient des espaces
- **Approche :** encadrer le nom entre guillemets ou échapper les espaces
- **Commandes clés :** `cat "./spaces in this filename"`

---

### Niveau 3 → 4

- **Objectif :** trouver un fichier caché dans un répertoire
- **Approche :** repérer les fichiers cachés avec `ls -a`
- **Commandes clés :** `ls -la`, `cat`

---

### Niveau 4 → 5

- **Objectif :** trouver le seul fichier lisible par un humain dans un dossier
- **Approche :** utiliser `file` sur tous les fichiers pour identifier le texte
- **Commandes clés :** `file ./*`, `cat`

---

### Niveau 5 → 6

- **Objectif :** trouver un fichier avec des propriétés précises (lisible, 1033 octets, non exécutable) dans une arborescence
- **Approche :** combiner `find` avec des filtres sur la taille, le type et les permissions
- **Commandes clés :** `find`, `-size`, `-type f`, `! -executable`

---

### Niveau 6 → 7

- **Objectif :** trouver un fichier n'importe où sur le serveur avec des contraintes d'utilisateur, de groupe et de taille
- **Approche :** chercher depuis `/` avec `find` et filtrer sur `-user`, `-group`, `-size`, en supprimant les erreurs
- **Commandes clés :** `find / -type f -user … -group … -size … 2>/dev/null`

---

### Niveau 7 → 8

- **Objectif :** trouver la ligne contenant le mot `millionth` dans un fichier
- **Approche :** filtrer les lignes contenant le mot-clé
- **Commandes clés :** `grep "millionth" data.txt`

---

### Niveau 8 → 9

- **Objectif :** trouver la seule ligne qui apparaît exactement une fois dans un fichier
- **Approche :** trier les lignes, compter les occurrences, ne garder que celles uniques
- **Commandes clés :** `sort`, `uniq -c`, `uniq -u`

---

### Niveau 9 → 10

- **Objectif :** repérer une chaîne lisible précédée de `=====` dans un fichier binaire
- **Approche :** extraire les chaînes lisibles du binaire et filtrer avec `grep`
- **Commandes clés :** `strings data.txt | grep "="`

---

### Niveau 10 → 11

- **Objectif :** décoder une chaîne encodée en base64
- **Approche :** reconnaître le format et le décoder
- **Commandes clés :** `base64 -d data.txt`

---

### Niveau 11 → 12

- **Objectif :** décoder du texte chiffré en ROT13
- **Approche :** utiliser `tr` pour appliquer la rotation sur les lettres
- **Commandes clés :** `tr 'A-Za-z' 'N-ZA-Mn-za-m'`

---

### Niveau 12 → 13

- **Objectif :** partir d'un hexdump d'un fichier compressé plusieurs fois, retrouver le texte original
- **Approche :**
  1. Reconvertir le hexdump en binaire
  2. Enchaîner `file` + décompressions successives (gzip, bzip2, tar…) jusqu'au fichier texte
- **Commandes clés :** `xxd -r`, `file`, `gunzip`, `bunzip2`, `tar xf`

---

### Niveau 13 → 14

- **Objectif :** utiliser une clé SSH privée pour se connecter au niveau suivant
- **Approche :**
  1. Récupérer la clé via `scp`
  2. Fixer les permissions (`chmod 400`)
  3. Se connecter avec `ssh -i`
- **Commandes clés :**
  - `scp -P 2220 bandit13@…:sshkey.private .`
  - `chmod 400 sshkey.private`
  - `ssh -i sshkey.private bandit14@… -p 2220`

---

### Niveau 14 → 15

- **Objectif :** envoyer le mot de passe actuel sur un port TCP pour obtenir le suivant
- **Approche :** utiliser `nc` vers `localhost:30000`, envoyer le mot de passe et lire la réponse
- **Commandes clés :** `nc localhost 30000`

---

## Bilan intermédiaire

### Compétences acquises

| Domaine | Commandes |
|---|---|
| Navigation | `cd`, `ls`, `pwd` |
| Fichiers | `cat`, `file`, `find` |
| Traitement de texte | `grep`, `sort`, `uniq`, `strings`, `tr` |
| Encodage | `base64`, ROT13, hexdump (`xxd`) |
| Compression | `gzip` / `gunzip`, `bzip2` / `bunzip2`, `tar xf` |
| Réseau | SSH (mot de passe + clé privée), `nc` |

---

> Aucun mot de passe stocké dans ce dépôt — uniquement les méthodes et commandes.
