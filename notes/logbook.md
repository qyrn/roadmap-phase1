# Progress Logbook – Pentest Journey

---

## 2026-02-03 — Day 1

**Duration:** 40 min
**Mood:** 5/5
**Focus:** Penetration Testing Fundamentals

### What I did
- Watched educational videos on penetration testing fundamentals

### What I learned
- Basic concepts of penetration testing
- Fundamental security principles

### Blockers
- None

### Tomorrow
- Set up the work environment

---

## 2026-02-04 — Day 2

**Duration:** 120 min
**Mood:** 4/5
**Focus:** Environment Setup

### What I did
- Installed a fresh Linux distribution
- Optimized the work environment

### What I learned
- How to set up a solid foundation for penetration testing exercises
- Linux system best practices

### Blockers
- None

### Tomorrow
- Move on to web security tutorials

---

## 2026-02-05 — Day 3

**Duration:** 60 min
**Mood:** 4/5
**Focus:** Web Application Security

### What I did
- Clean Ubuntu installation
- Tutorial on React exploitation techniques

### What I learned
- System configuration for penetration testing
- Basics of web application exploitation (React)

### Blockers
- None

---

## 2026-02-18 — Day 1 (Restart)

**Duration:** 60 min
**Mood:** 5/5
**Focus:** Linux Fundamentals

### What I did
- Learned basic Linux commands
- Completed Linux Fundamentals 1 on TryHackMe

### What I learned
- Can navigate the filesystem, search files recursively, and use output redirection

### Blockers
- None

### Tomorrow
- Deepen web exploitation techniques

---

## 2026-02-19 — Day 2

**Duration:** 30 min
**Mood:** 5/5
**Focus:** Linux Fundamentals Part 2 (TryHackMe)

### What I did
- Completed Tasks 1 to 5 of Linux Fundamentals Part 2
- Practiced file management commands on the THM machine
- Learned about SSH, file operations, and Linux permissions basics

### What I learned
- How to connect to a remote machine using SSH (network-based remote access)
- File and directory management: `touch`, `mkdir`, `cp`, `mv`, `rm`
- Difference between normal files and directories in `ls -l`
- Hidden files listing with `ls -a`
- File type identification using `file`
- Terminal management using `clear`
- Understanding Linux permission structure (r, w, x)
- Permission logic on directories (read = list, execute = traverse)
- Numeric permissions system (e.g., 777, 750)
- Basic usage of `su` to switch users

### Blockers
- Minor confusion about permission semantics on directories (r vs x)

---

## 2026-02-22/23 — Days 3 and 4

**Duration:** ~1h
**Mood:** 5/5
**Focus:** Linux Fundamentals Part 2 & Part 3 (completed)

### What I did
- Completed Linux Fundamentals Part 2 and Part 3 on TryHackMe
- Practiced file transfer, process management, services, and logging
- Reviewed Linux filesystem structure and system directories

### What I learned

#### Filesystem Structure
- `/etc` → system configuration files
- `/var` → variable data (logs, cache, spool)
- `/home` → user home directories
- `/root` → root user's home directory
- `/tmp` → temporary files storage

#### File Editing & Transfers
- Used `nano` to create and edit files
- Downloaded files using `wget`
- Transferred files between machines using `scp`

#### Process Management
- Viewed processes with `ps` and `ps aux`
- Monitored live processes using `top`
- Managed processes with `kill` (SIGTERM, SIGKILL, SIGSTOP)
- Suspended tasks with `CTRL+Z`, resumed with `fg` / `bg`

#### Services & System Control
- Managed services using `systemctl` (start, stop, enable, disable, status)

#### Task Automation
- Understood cron job structure and scheduling format (`* * * * *`)

#### Package Management
- Learned how `apt` installs and updates packages from repositories

#### Logging Basics
- Read Apache access logs in `/var/log/apache2/access.log`
- Identified:
  - Client IP
  - HTTP method (GET / POST)
  - Requested resource
  - HTTP status code

### Blockers
- Need deeper understanding of log analysis
- Minor confusion around HTTP request semantics

---

## 2026-02-24 — Day 5 — END OF FIRST WEEK

**Duration:** ~2–3h
**Mood:** 4/5
**Focus:** OverTheWire – Bandit (Level 0 → 15)

### What I did
- Completed Bandit levels 0 to 15
- Practiced SSH authentication and private key usage
- Applied Linux file manipulation, search and filtering techniques
- Used networking tools (`nc`)
- Worked with encodings and compression formats

### Key Skills Reinforced
- Handling tricky filenames (dashes, spaces, hidden files)
- Efficient file searching using `find`
- Filtering data with `grep`, `sort`, `uniq`
- Understanding stdout vs stderr (`2>/dev/null`)
- Base64 decoding
- ROT13 decoding using `tr`
- Working with hex dumps (`xxd -r`)
- Identifying file types with `file`
- Extracting compressed archives (`gzip`, `bzip2`, `tar`)
- Using SSH private keys (`chmod 400`, `ssh -i`)
- Basic TCP interaction using `nc`

### Weaknesses Identified
- Tendency to use Google too early
- Need stronger reflex with `man` pages
- Slight hesitation with text processing tools

### Action Plan
- Redo levels 5 → 12 without any external help
- Use `man` before Google
- Focus on mastering text-processing commands
