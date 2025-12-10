# OverTheWire – Bandit Levels 0 à 15

Petit writeup récapitulatif de mon avancée sur Bandit.  
Objectif : garder une trace des idées / commandes utiles **sans** stocker les mots de passe.

---

## Contexte

- Plateforme : OverTheWire – Bandit
- Objectif perso :
  - Prendre en main le shell Linux
  - Comprendre SSH, fichiers, permissions, encodages
  - Commencer à manipuler le réseau (nc, ports…)

---

## Résumé rapide des levels

### Level 0 → 1

- **Objectif** : se connecter sur la box et lire un fichier dans le home (`readme`).
- **Idée** : utiliser `ssh` puis `ls`, `cat`.
- **Commandes clés** : `ssh`, `ls`, `cat`.

### Level 1 → 2

- **Objectif** : lire un fichier avec un nom spécial (`-`).
- **Idée** : utiliser un chemin explicite au lieu de laisser le shell l’interpréter comme une option.
- **Commandes clés** : `cat ./-`.

### Level 2 → 3

- **Objectif** : fichier caché dans un répertoire.
- **Idée** : repérer les fichiers avec `ls -a`.
- **Commandes clés** : `ls -la`, `cat`.

### Level 3 → 4

- **Objectif** : trouver un fichier dans un répertoire avec beaucoup de dossiers.
- **Idée** : lire les consignes et naviguer au bon endroit.
- **Commandes clés** : `cd`, `ls`, `cat`.

### Level 4 → 5

- **Objectif** : trouver le seul fichier lisible à l’œil humain dans un dossier.
- **Idée** : utiliser `file` sur tous les fichiers pour repérer le texte.
- **Commandes clés** : `file ./*`, `cat`.

### Level 5 → 6

- **Objectif** : trouver un fichier avec certaines propriétés (lisible, 1033 bytes, non exécutable) dans une arborescence.
- **Idée** : combiner `find` avec des filtres sur la taille, le type et les permissions.
- **Commandes clés** : `find`, `-size`, `-type f`.

### Level 6 → 7

- **Objectif** : trouver un fichier n’importe où sur le serveur avec des contraintes d’utilisateur, de groupe et de taille.
- **Idée** : chercher depuis `/` avec `find` et filtrer sur `-user`, `-group`, `-size`, tout en cachant les erreurs.
- **Commandes clés** : `find / -type f -user … -group … -size … 2>/dev/null`.

### Level 7 → 8

- **Objectif** : trouver la ligne avec le mot `millionth` dans un fichier.
- **Idée** : filtrer les lignes contenant un mot-clé.
- **Commandes clés** : `grep "millionth" data.txt`.

### Level 8 → 9

- **Objectif** : trouver la seule ligne qui apparaît exactement une fois dans un fichier.
- **Idée** : trier les lignes, les compter, ne garder que celles avec 1 occurrence.
- **Commandes clés** : `sort`, `uniq -c`, `uniq -u`.

### Level 9 → 10

- **Objectif** : repérer une chaîne lisible précédée de `=====` dans un fichier binaire.
- **Idée** : extraire les chaînes lisibles d’un binaire et filtrer avec `grep`.
- **Commandes clés** : `strings data.txt | grep "="`.

### Level 10 → 11

- **Objectif** : décoder une chaîne en base64.
- **Idée** : reconnaître le format base64 et le décoder proprement.
- **Commandes clés** : `base64 -d data.txt`.

### Level 11 → 12

- **Objectif** : décoder du texte chiffré en ROT13.
- **Idée** : utiliser `tr` pour appliquer la rotation sur les lettres.
- **Commandes clés** : `tr 'A-Za-z' 'N-ZA-Mn-za-m'`.

### Level 12 → 13

- **Objectif** : partir d’un hexdump d’un fichier compressé plusieurs fois, revenir au texte.
- **Idée** :
  - Reconvertir le hexdump en binaire.
  - Enchaîner `file` + décompressions successives (gzip, bzip2, tar…) jusqu’à obtenir un fichier texte.
- **Commandes clés** :
  - `xxd -r`
  - `file`
  - `gunzip` / `bunzip2`
  - `tar xf`.

### Level 13 → 14

- **Objectif** : utiliser une clé SSH privée pour se connecter au level suivant.
- **Idée** :
  - Récupérer la clé.
  - Fixer les permissions (`chmod 600`).
  - Utiliser `ssh -i` depuis ma machine locale.
- **Commandes clés** :
  - `scp -P 2220 bandit13@…:sshkey.private .`
  - `ssh -i sshkey.private bandit14@… -p 2220`.

### Level 14 → 15

- **Objectif** : envoyer le mot de passe actuel sur un port TCP pour récupérer le suivant.
- **Idée** : utiliser `nc` (netcat) vers `localhost:30000`, envoyer le mot de passe et lire la réponse.
- **Commandes clés** :
  - `nc localhost 30000`.

---

## Bilan intermédiaire

- Prise en main :
  - Navigation : `cd`, `ls`, `pwd`
  - Manipulation de fichiers : `cat`, `file`, `find`
- Traitement de texte :
  - `grep`, `sort`, `uniq`, `strings`, `tr`
- Encodage/format :
  - `base64`, ROT13, hexdump (`xxd`)
- Compression / archives :
  - `gzip` / `gunzip`
  - `bzip2` / `bunzip2`
  - `tar xf …`
- Réseau :
  - Connexions SSH avec mot de passe et avec clé privée
  - Utilisation de `nc` pour parler à un service sur un port spécifique.

_Note : pas de mots de passe stockés dans ce repo, uniquement la méthode._
