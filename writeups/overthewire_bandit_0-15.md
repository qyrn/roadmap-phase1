# OverTheWire – Bandit, Levels 0 to 15

Write-up of my progress on Bandit.
Goal: keep a record of approaches and useful commands — **no passwords stored**.

---

## 🌐 Context

- **Platform:** OverTheWire – Bandit
- **Personal goals:**
  - Get comfortable with the Linux shell
  - Understand SSH, files, permissions, and encodings
  - Start working with networking tools (`nc`, ports)

---

## 📖 Level-by-level summary

### Level 0 → 1

- **Objective:** connect to the box and read a file in the home directory (`readme`)
- **Approach:** use `ssh` then `ls`, `cat`
- **Key commands:** `ssh`, `ls`, `cat`

---

### Level 1 → 2

- **Objective:** read a file whose name is a dash (`-`)
- **Approach:** use an explicit path to prevent the shell from interpreting it as a flag
- **Key commands:** `cat ./-`

---

### Level 2 → 3

- **Objective:** read a file with spaces in the name
- **Approach:** wrap the name in quotes or escape the spaces
- **Key commands:** `cat "./spaces in this filename"`

---

### Level 3 → 4

- **Objective:** find a hidden file inside a directory
- **Approach:** spot hidden files with `ls -a`
- **Key commands:** `ls -la`, `cat`

---

### Level 4 → 5

- **Objective:** find the only human-readable file in a folder
- **Approach:** use `file` on all files to identify the text one
- **Key commands:** `file ./*`, `cat`

---

### Level 5 → 6

- **Objective:** find a file with specific properties (readable, 1033 bytes, not executable) within a tree
- **Approach:** combine `find` with filters on size, type, and permissions
- **Key commands:** `find`, `-size`, `-type f`, `! -executable`

---

### Level 6 → 7

- **Objective:** find a file anywhere on the server matching user, group, and size constraints
- **Approach:** search from `/` with `find`, filter on `-user`, `-group`, `-size`, and suppress errors
- **Key commands:** `find / -type f -user … -group … -size … 2>/dev/null`

---

### Level 7 → 8

- **Objective:** find the line containing the word `millionth` in a file
- **Approach:** filter lines containing the keyword
- **Key commands:** `grep "millionth" data.txt`

---

### Level 8 → 9

- **Objective:** find the only line that appears exactly once in a file
- **Approach:** sort lines, count occurrences, keep only unique ones
- **Key commands:** `sort`, `uniq -c`, `uniq -u`

---

### Level 9 → 10

- **Objective:** find a readable string preceded by `=====` in a binary file
- **Approach:** extract readable strings from the binary and filter with `grep`
- **Key commands:** `strings data.txt | grep "="`

---

### Level 10 → 11

- **Objective:** decode a base64-encoded string
- **Approach:** recognise the format and decode it
- **Key commands:** `base64 -d data.txt`

---

### Level 11 → 12

- **Objective:** decode ROT13-encoded text
- **Approach:** use `tr` to apply the letter rotation
- **Key commands:** `tr 'A-Za-z' 'N-ZA-Mn-za-m'`

---

### Level 12 → 13

- **Objective:** starting from a hex dump of a multiply-compressed file, recover the original text
- **Approach:**
  1. Reconstruct the binary from the hex dump
  2. Chain `file` + successive decompressions (gzip, bzip2, tar…) until a text file is reached
- **Key commands:** `xxd -r`, `file`, `gunzip`, `bunzip2`, `tar xf`

---

### Level 13 → 14

- **Objective:** use an SSH private key to connect to the next level
- **Approach:**
  1. Retrieve the key via `scp`
  2. Fix permissions (`chmod 400`)
  3. Connect with `ssh -i`
- **Key commands:**
  - `scp -P 2220 bandit13@…:sshkey.private .`
  - `chmod 400 sshkey.private`
  - `ssh -i sshkey.private bandit14@… -p 2220`

---

### Level 14 → 15

- **Objective:** send the current password to a TCP port to receive the next one
- **Approach:** use `nc` to connect to `localhost:30000`, send the password and read the response
- **Key commands:** `nc localhost 30000`

---

## 📊 Intermediate recap

### Skills acquired

| Domain | Commands |
|---|---|
| Navigation | `cd`, `ls`, `pwd` |
| Files | `cat`, `file`, `find` |
| Text processing | `grep`, `sort`, `uniq`, `strings`, `tr` |
| Encoding | `base64`, ROT13, hex dump (`xxd`) |
| Compression | `gzip` / `gunzip`, `bzip2` / `bunzip2`, `tar xf` |
| Networking | SSH (password + private key), `nc` |

---

> No passwords stored in this repository — methods and commands only.
