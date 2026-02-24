# Command Memo – Bandit 0–15

Quick reference for commands used to solve levels 0 to 15 of Bandit (OverTheWire).

---

## 📁 Navigation & Files

| Command | Description |
|---|---|
| `pwd` | Print current directory |
| `ls`, `ls -la` | List files (including hidden) |
| `cd <dir>` | Change directory |
| `cat <file>` | Display file content |
| `file <file>` | Detect file type (text, gzip, bzip2, tar, binary…) |

---

## 🔍 Search

| Command | Description |
|---|---|
| `grep "word" file` | Show lines containing `word` |
| `sort file` | Sort lines alphabetically |
| `uniq` | Remove consecutive duplicates |
| `uniq -c` | Count occurrences |
| `uniq -u` | Keep only unique lines |
| `find / -type f -user X -group Y -size 33c 2>/dev/null` | Search with multiple filters |

Useful `find` options: `-type`, `-user`, `-group`, `-size`, `! -executable`

---

## 🔤 Encoding & Text Processing

| Command | Description |
|---|---|
| `strings file` | Extract readable strings from a binary |
| `base64 -d file` | Decode base64 |
| `tr 'A-Za-z' 'N-ZA-Mn-za-m'` | Apply ROT13 cipher |

---

## 🧮 Hex Dump

| Command | Description |
|---|---|
| `xxd file` | Display a hex dump |
| `xxd -r hexdump > binary` | Rebuild binary from hex dump |

---

## 🗜️ Compression & Archives

| Format | Decompress |
|---|---|
| Gzip | `gunzip file.gz` or `gunzip -c file.gz > output` |
| Bzip2 | `bunzip2 file.bz2` or `bzip2 -dc file.bz2 > output` |
| Tar | `tar tf archive.tar` (list) / `tar xf archive.tar` (extract) |

---

## 🌐 Network

| Command | Description |
|---|---|
| `chmod 400 keyfile` | Set read-only for owner (required for SSH private keys) |
| `ssh user@host -p 2220` | Standard SSH connection |
| `ssh -i key user@host -p 2220` | SSH with private key |
| `scp -P 2220 user@host:file .` | Secure copy via SSH |
| `nc host port` | TCP connection with Netcat |
