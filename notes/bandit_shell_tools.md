# Mémo commandes utiles – Bandit 0–15

## Navigation & fichiers

- `pwd` : affiche le répertoire courant.
- `ls`, `ls -la` : liste les fichiers (y compris cachés).
- `cd <dir>` : changer de répertoire.
- `cat <fichier>` : afficher le contenu d’un fichier.
- `file <fichier>` : détecter le type (texte, gzip, bzip2, tar, binaire…).

## Recherche

- `grep "mot" fichier` : afficher les lignes contenant `mot`.
- `sort fichier` : trier les lignes.
- `uniq` :
  - `uniq` : supprime les doublons consécutifs.
  - `uniq -c` : compte les occurrences.
  - `uniq -u` : ne garde que les lignes uniques.
- `find` :
  - `find / -type f -user X -group Y -size 33c 2>/dev/null`
  - Options utiles : `-type`, `-user`, `-group`, `-size`.

## Encodage / texte

- `strings fichier` : extrait les chaînes lisibles d’un binaire.
- `base64 -d fichier` : décoder du base64.
- `tr 'A-Za-z' 'N-ZA-Mn-za-m'` : appliquer ROT13.

## Hexdump

- `xxd fichier` : hexdump.
- `xxd -r hexdump > binaire` : reconstruire le binaire.

## Compression / archives

- Gzip :
  - `gunzip fichier.gz`
  - `gunzip -c fichier.gz > sortie`
- Bzip2 :
  - `bunzip2 fichier.bz2`
  - `bzip2 -dc fichier.bz2 > sortie`
- Tar :
  - `tar tf archive.tar` : lister.
  - `tar xf archive.tar` : extraire.

## Réseau

- SSH :
  - `ssh user@host -p 2220`
  - `ssh -i clé user@host -p 2220`
- SCP :
  - `scp -P 2220 user@host:fichier .`
- Netcat :
  - `nc host port`
  - Envoyer une chaîne, appuyer sur Entrée, lire la réponse.
