# Mémo commandes – Bandit 0–15

Référence rapide des commandes utilisées pour résoudre les niveaux 0 à 15 de Bandit (OverTheWire).

---

## Navigation et fichiers

| Commande | Description |
|---|---|
| `pwd` | Affiche le répertoire courant |
| `ls`, `ls -la` | Liste les fichiers (y compris cachés) |
| `cd <dir>` | Change de répertoire |
| `cat <fichier>` | Affiche le contenu d'un fichier |
| `file <fichier>` | Détecte le type (texte, gzip, bzip2, tar, binaire…) |

---

## Recherche

| Commande | Description |
|---|---|
| `grep "mot" fichier` | Affiche les lignes contenant `mot` |
| `sort fichier` | Trie les lignes alphabétiquement |
| `uniq` | Supprime les doublons consécutifs |
| `uniq -c` | Compte les occurrences |
| `uniq -u` | Ne conserve que les lignes uniques |
| `find / -type f -user X -group Y -size 33c 2>/dev/null` | Recherche avec filtres multiples |

Options `find` utiles : `-type`, `-user`, `-group`, `-size`, `! -executable`

---

## Encodage et traitement de texte

| Commande | Description |
|---|---|
| `strings fichier` | Extrait les chaînes lisibles d'un binaire |
| `base64 -d fichier` | Décode du base64 |
| `tr 'A-Za-z' 'N-ZA-Mn-za-m'` | Applique le chiffrement ROT13 |

---

## Hexdump

| Commande | Description |
|---|---|
| `xxd fichier` | Affiche un hexdump |
| `xxd -r hexdump > binaire` | Reconstruit le binaire depuis un hexdump |

---

## Compression et archives

| Format | Décompresser |
|---|---|
| Gzip | `gunzip fichier.gz` ou `gunzip -c fichier.gz > sortie` |
| Bzip2 | `bunzip2 fichier.bz2` ou `bzip2 -dc fichier.bz2 > sortie` |
| Tar | `tar tf archive.tar` (lister) / `tar xf archive.tar` (extraire) |

---

## Réseau

| Commande | Description |
|---|---|
| `ssh user@host -p 2220` | Connexion SSH classique |
| `ssh -i clé user@host -p 2220` | Connexion SSH avec clé privée |
| `scp -P 2220 user@host:fichier .` | Copie sécurisée via SSH |
| `nc host port` | Connexion TCP avec Netcat |
