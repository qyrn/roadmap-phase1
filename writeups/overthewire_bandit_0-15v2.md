# OverTheWire – Bandit (0 → 15) — Quick Reference

Key commands per level. No passwords stored.

---

## Level 0 → 1

```bash
cat readme
```

---

## Level 1 → 2

File with a dash as name:

```bash
cat ./-
```

---

## Level 2 → 3

File with spaces in the name:

```bash
cat "./spaces in this filename"
```

---

## Level 3 → 4

Hidden file:

```bash
ls -a
cat .hidden
```

---

## Level 4 → 5

Identify the only human-readable file:

```bash
file ./*
cat ./fileX
```

---

## Level 5 → 6

Search with constraints (size, not executable):

```bash
find / -type f -size 1033c ! -executable 2>/dev/null
```

---

## Level 6 → 7

Search by owner, group and size:

```bash
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

---

## Level 7 → 8

Search for keyword in file:

```bash
grep "millionth" data.txt
```

---

## Level 8 → 9

Find the unique line:

```bash
sort data.txt | uniq -u
```

---

## Level 9 → 10

Extract readable strings from binary:

```bash
strings data.txt | grep "="
```

---

## Level 10 → 11

Decode base64:

```bash
base64 -d data.txt
```

---

## Level 11 → 12

ROT13 decoding:

```bash
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

---

## Level 12 → 13

Hex dump + compression chain:

```bash
xxd -r hexdump > binary
file binary
gzip -d / bzip2 -d / tar -xf   # repeat until text file
```

---

## Level 13 → 14

SSH private key:

```bash
scp -P 2220 bandit13@bandit.labs.overthewire.org:sshkey.private .
chmod 400 sshkey.private
ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220
```

---

## Level 14 → 15

Send password via Netcat:

```bash
nc localhost 30000
```
