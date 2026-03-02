# Template – Weekly Review (Sunday)

---

## Week 1 — Feb 18 → Feb 24

### 📊 Stats

| Metric           | Value         |
|------------------|---------------|
| Days completed   | 5 / 7         |
| Total time       | ~5h           |
| Average mood     | 4.8 / 5       |
| Quiz score       | N/A           |

---

### ✅ Accomplishments

- [x] Completed TryHackMe – Linux Fundamentals Part 1
- [x] Completed TryHackMe – Linux Fundamentals Part 2
- [x] Completed TryHackMe – Linux Fundamentals Part 3
- [x] Completed OverTheWire – Bandit levels 0 to 15

---

### 🧠 Skills acquired

- Linux filesystem navigation and file management (`cd`, `ls`, `cp`, `mv`, `rm`, `touch`, `mkdir`)
- SSH remote access and SCP file transfer
- Linux permissions: symbolic and numeric (`chmod`)
- Process management: `ps`, `top`, `kill`, `systemctl`, job control
- Cron job structure and scheduling
- Package management with `apt`
- Apache log reading and parsing
- Tricky filename handling (dashes, spaces, hidden files)
- File searching with `find` using multiple filters
- Text processing: `grep`, `sort`, `uniq`, `strings`, `tr`
- Encoding/decoding: Base64, ROT13, hex dump (`xxd`)
- Archive extraction: `gzip`, `bzip2`, `tar`
- SSH private key authentication (`chmod 400`, `ssh -i`)
- Basic TCP interaction with `nc` (Netcat)

---

### ⚠️ Weaknesses identified

- Reflex to Google before checking `man` pages
- Slight hesitation with text processing pipelines

---

### 📦 Deliverables published

- [x] Write-up published: `overthewire_bandit_0-15.md`
- [x] Quick reference published: `overthewire_bandit_0-15v2.md`
- [x] Cheatsheet updated: `bandit_shell_tools.md`
- [ ] Code pushed to GitHub

---

### 🎯 Goals for next week

1. Redo Bandit levels 5 → 12 without any external help
2. Use `man` before Google — build the reflex
3. Start web security content (TryHackMe or PortSwigger)

---

## Week 2 — Feb 26 → Mar 1

### 📊 Stats

| Metric           | Value         |
|------------------|---------------|
| Days completed   | 4 / 7         |
| Total time       | ~6h30         |
| Average mood     | 3.8 / 5       |
| Quiz score       | N/A           |

---

### ✅ Accomplishments

- [x] Completed TryHackMe – Bash Scripting module
- [x] Completed TryHackMe – Linux Shells module
- [x] Completed OverTheWire – Bandit levels 15 to 25
- [x] Solved 4 Root-Me App Script challenges (PATH Hijacking, Path Traversal, LaTeX Injection, Command Injection)
- [x] Built 2 Python scripts: service checker and SSH log parser

---

### 🧠 Skills acquired

- SSL/TLS connection with `openssl s_client`
- Port scanning with `nmap`
- File comparison with `diff`
- Running SSH commands without loading a shell
- SUID binary exploitation
- Setting up a TCP listener with `nc -l -p PORT`
- Cron job enumeration and analysis (`/etc/cron.d/`)
- MD5 hashing and filename reconstruction
- Script injection into cron-monitored directories
- Brute force automation with `seq`, `printf`, and `nc`
- PATH Hijacking — exploiting SUID binaries with unqualified command calls
- Sudo misconfiguration — wildcard path traversal
- LaTeX Injection — reading files via `\openin` / `\typeout`
- PowerShell Command Injection via unsanitized input
- Python: `sys.argv`, `subprocess.run()`, file reading, log parsing, dictionary usage

---

### ⚠️ Weaknesses identified

- Linux Shells THM notes lost before saving — must write immediately
- Still spending too long on levels requiring `md5sum` reconstruction
- Need to build faster reflex for SUID binary recognition

---

### 📦 Deliverables published

- [x] Write-up published: `overthewire_bandit_15-25.md`
- [x] Cheatsheet updated: `bandit_shell_tools.md`
- [x] Reference updated: `linux-cmd.md`
- [x] Scripts pushed: `backup-script.sh`, `service_checker.py`, `log_parser.py`

---

### 🎯 Goals for next week

1. Continue Root-Me App Script challenges
2. Start web security track (PortSwigger / TryHackMe Web)
3. Improve Python scripting — add argument parsing and error handling patterns

---

## Template – Future weeks

### 📊 Stats

| Metric           | Value       |
|------------------|-------------|
| Days completed   | [X] / 7     |
| Total time       | [X]h [X]min |
| Average mood     | [X] / 5     |
| Quiz score       | [X] / 10    |

---

### ✅ Accomplishments

- [ ] [Major task 1]
- [ ] [Major task 2]
- [ ] [Major task 3]

---

### 🧠 Skills acquired

- [Skill 1]
- [Skill 2]

---

### ⚠️ Weaknesses identified

- [Area to work on]

---

### 📦 Deliverables published

- [ ] Write-up published
- [ ] Code pushed to GitHub
- [ ] Cheatsheet updated

---

### 🎯 Goals for next week

1. [Goal 1]
2. [Goal 2]
3. [Goal 3]
