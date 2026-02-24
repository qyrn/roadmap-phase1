# OverTheWire – Bandit (0 → 15)

## Level 0 → 1
`cat readme`

---

## Level 1 → 2
Handle dashed filename:
`cat ./-`

---

## Level 2 → 3
Handle spaced filename:
`cat ./--spaces\ in\ this\ filename--`

---

## Level 3 → 4
Hidden file:
`ls -a`
`cat .hidden`

---

## Level 4 → 5
Identify human-readable file:
`file ./*`
`cat ./fileX`

---

## Level 5 → 6
Search with constraints:
`find / -type f -size 1033c ! -executable 2>/dev/null`

---

## Level 6 → 7
Search by owner, group and size:
`find / -user bandit7 -group bandit6 -size 33c 2>/dev/null`

---

## Level 7 → 8
Search keyword:
`grep "millionth" data.txt`

---

## Level 8 → 9
Unique line:
`sort data.txt | uniq -u`

---

## Level 9 → 10
Extract readable strings:
`strings data.txt | grep "="`

---

## Level 10 → 11
Decode base64:
`base64 -d data.txt`

---

## Level 11 → 12
ROT13:
`cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'`

---

## Level 12 → 13
Hex + compression chain:
- `xxd -r`
- `file`
- `gzip -d`
- `bzip2 -d`
- `tar -xf`

---

## Level 13 → 14
SSH private key:
- `scp -P 2220`
- `chmod 400 keyfile`
- `ssh -i keyfile`

---

## Level 14 → 15
Netcat:
`nc localhost 30000`
