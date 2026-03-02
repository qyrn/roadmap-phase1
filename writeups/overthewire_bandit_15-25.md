# OverTheWire – Bandit, Levels 15 to 25

*Completed: March 1, 2026*

Write-up of my progress on Bandit.
Goal: keep a record of approaches and useful commands — **no passwords stored**.

---

## 🌐 Context

- **Platform:** OverTheWire – Bandit
- **Personal goals:**
  - Learn SSL/TLS communication
  - Understand cron jobs and script automation
  - Practice networking with `nc` and `openssl`
  - Get comfortable with brute force scripting

---

## 📖 Level-by-level summary

### Level 15 → 16

- **Objective:** send the current password to port 30001 over SSL/TLS
- **Approach:** use `openssl s_client` instead of `nc` since the port requires encryption
- **Key commands:** `echo "PASSWORD" | openssl s_client -connect localhost:30001 -ign_eof`
- **Notes:** `-ign_eof` prevents the connection from closing before the response arrives

---

### Level 16 → 17

- **Objective:** find which port in the 31000–32000 range speaks SSL and returns credentials
- **Approach:**
  1. Scan the port range with `nmap`
  2. Test SSL-speaking ports with `openssl s_client`
  3. The correct port returns an RSA private key
  4. Save the key, fix permissions, connect with `ssh -i`
- **Key commands:**
  - `nmap -p 31000-32000 localhost`
  - `openssl s_client -connect localhost:PORT`
  - `chmod 600 key_file`
  - `ssh -i key_file -p 2220 bandit17@localhost`

---

### Level 17 → 18

- **Objective:** find the password by comparing two files
- **Approach:** use `diff` — the changed line in `passwords.new` is the new password
- **Key commands:** `diff passwords.new passwords.old`
- **Notes:** `<` = line in first file, `>` = line in second file

---

### Level 18 → 19

- **Objective:** read a file despite a `.bashrc` that immediately logs out
- **Approach:** pass the command directly to SSH — the shell (and `.bashrc`) never loads
- **Key commands:** `ssh -p 2220 bandit18@bandit.labs.overthewire.org cat readme`

---

### Level 19 → 20

- **Objective:** use a SUID binary to read a file owned by another user
- **Approach:** the binary `bandit20-do` runs with bandit20's privileges — use it to read the password file
- **Key commands:** `./bandit20-do cat /etc/bandit_pass/bandit20`
- **Notes:** SUID bit means the binary executes as the file's owner, not the caller

---

### Level 20 → 21

- **Objective:** a binary connects to a port, reads the current password, and gives the next one
- **Approach:**
  1. Start a `nc` listener in the background, serving the current password
  2. Run the binary — it connects to the listener, validates the password, and returns the next one
- **Key commands:**
  - `echo "PASSWORD" | nc -l -p 1234 &`
  - `./suconnect 1234`
- **Notes:** `&` runs the listener in the background; `nc -l -p PORT` creates a TCP server

---

### Level 21 → 22

- **Objective:** find a password written by a cron job
- **Approach:**
  1. List cron jobs in `/etc/cron.d/`
  2. Read the script being executed
  3. The script copies the password to `/tmp` every minute
- **Key commands:**
  - `ls /etc/cron.d/`
  - `cat /etc/cron.d/cronjob_bandit22`
  - `cat /usr/bin/cronjob_bandit22.sh`

---

### Level 22 → 23

- **Objective:** a cron job generates a filename via MD5 — find the file
- **Approach:**
  1. Read the cron script to understand how the filename is built
  2. Reproduce the exact `echo` string used for `bandit23`
  3. Hash it with `md5sum` and read the resulting file in `/tmp`
- **Key commands:**
  - `echo I am user bandit23 | md5sum | cut -d ' ' -f 1`
  - `cat /tmp/[hash]`
- **Notes:** `cut -d ' ' -f 1` isolates the hash by splitting on space

---

### Level 23 → 24

- **Objective:** drop a script into a cron-watched directory to run it as bandit24
- **Approach:**
  1. Create a temp directory with `chmod 777` so bandit24 can write to it
  2. Write a script that copies bandit24's password into that directory
  3. Copy the script to `/var/spool/bandit24/foo/`
  4. Wait ~1 minute for cron to execute it
- **Key commands:**
  - `mkdir /tmp/mydir && chmod 777 /tmp/mydir`
  - `echo -e '#!/bin/bash\ncat /etc/bandit_pass/bandit24 > /tmp/mydir/password' > script.sh`
  - `chmod +x script.sh`
  - `cp script.sh /var/spool/bandit24/foo/`
  - `cat /tmp/mydir/password`

---

### Level 24 → 25

- **Objective:** brute-force a 4-digit PIN combined with the current password
- **Approach:** generate all 10,000 combinations with `seq` and `printf`, pipe them all in a single `nc` connection
- **Script:**
  ```bash
  for i in $(seq 0 9999); do
      echo "PASSWORD $(printf '%04d' $i)"
  done | nc localhost 30002
  ```
- **Notes:**
  - `printf '%04d'` pads the number to 4 digits with leading zeros
  - Piping in one connection avoids 10,000 separate TCP handshakes

---

## 📊 Intermediate recap

### Skills acquired

| Domain | Commands / Concepts |
|---|---|
| SSL/TLS | `openssl s_client -connect host:port -ign_eof` |
| Port scanning | `nmap -p PORT_RANGE localhost` |
| File comparison | `diff file1 file2` |
| SSH tricks | Direct command execution without loading shell |
| SUID exploitation | `./suid_binary command` |
| TCP listener | `nc -l -p PORT`, job control with `&` |
| Cron enumeration | `/etc/cron.d/`, reading cron scripts |
| Hashing | `md5sum`, `cut -d ' ' -f 1` |
| Script injection | Writing to cron-monitored directories |
| Brute force | `seq`, `printf '%04d'`, pipe to `nc` |

---

> No passwords stored in this repository — methods and commands only.
