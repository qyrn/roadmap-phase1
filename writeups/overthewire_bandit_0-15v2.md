# OverTheWire – Bandit (0 → 15) — Référence rapide

Commandes clés par niveau. Aucun mot de passe stocké.

---

## Niveau 0 → 1

```bash
cat readme
```

---

## Niveau 1 → 2

Fichier dont le nom est un tiret (`-`) :

```bash
cat ./-
```

---

## Niveau 2 → 3

Fichier avec des espaces dans le nom :

```bash
cat "./spaces in this filename"
```

---

## Niveau 3 → 4

Fichier caché :

```bash
ls -a
cat .hidden
```

---

## Niveau 4 → 5

Identifier le seul fichier lisible par un humain :

```bash
file ./*
cat ./fileX
```

---

## Niveau 5 → 6

Recherche avec contraintes (taille, non exécutable) :

```bash
find / -type f -size 1033c ! -executable 2>/dev/null
```

---

## Niveau 6 → 7

Recherche par propriétaire, groupe et taille :

```bash
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

---

## Niveau 7 → 8

Recherche par mot-clé dans un fichier :

```bash
grep "millionth" data.txt
```

---

## Niveau 8 → 9

Trouver la ligne unique :

```bash
sort data.txt | uniq -u
```

---

## Niveau 9 → 10

Extraire les chaînes lisibles d'un binaire :

```bash
strings data.txt | grep "="
```

---

## Niveau 10 → 11

Décoder du base64 :

```bash
base64 -d data.txt
```

---

## Niveau 11 → 12

Décodage ROT13 :

```bash
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

---

## Niveau 12 → 13

Reconstruction depuis hexdump + décompressions successives :

```bash
xxd -r hexdump > binaire
file binaire
gzip -d / bzip2 -d / tar -xf   # répéter jusqu'au fichier texte
```

---

## Niveau 13 → 14

Clé SSH privée :

```bash
scp -P 2220 bandit13@bandit.labs.overthewire.org:sshkey.private .
chmod 400 sshkey.private
ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220
```

---

## Niveau 14 → 15

Envoi du mot de passe via Netcat :

```bash
nc localhost 30000
```
