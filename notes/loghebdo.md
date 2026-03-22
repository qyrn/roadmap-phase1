# 📆 Weekly Review – Pentest Journey

---

## 🗓️ Week 1 — 18 → 24 février 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 5 / 7         |
| ⏱️ Temps total       | ~5h           |
| 😊 Humeur moyenne    | 4.8 / 5       |
| 📝 Score quiz        | 4 / 5         |

---

### ✅ Accomplissements

- [x] 🐧 Complété TryHackMe – Linux Fundamentals Part 1
- [x] 🐧 Complété TryHackMe – Linux Fundamentals Part 2
- [x] 🐧 Complété TryHackMe – Linux Fundamentals Part 3
- [x] 🏴 Complété OverTheWire – Bandit niveaux 0 à 15

---

### 🧠 Compétences acquises

- 📂 Navigation filesystem et gestion de fichiers (`cd`, `ls`, `cp`, `mv`, `rm`, `touch`, `mkdir`)
- 🔐 Accès distant SSH et transfert SCP
- 🔒 Permissions Linux : symbolique et numérique (`chmod`)
- ⚙️ Gestion de processus : `ps`, `top`, `kill`, `systemctl`, job control
- ⏰ Structure et planification cron job
- 📦 Gestion de paquets avec `apt`
- 📊 Lecture et parsing de logs Apache
- 📄 Gestion de noms de fichiers piégés (tirets, espaces, fichiers cachés)
- 🔍 Recherche de fichiers avec `find` et filtres multiples
- 🔎 Traitement de texte : `grep`, `sort`, `uniq`, `strings`, `tr`
- 🔓 Encodage/décodage : Base64, ROT13, hex dump (`xxd`)
- 📦 Extraction d'archives : `gzip`, `bzip2`, `tar`
- 🔑 Authentification SSH par clé privée (`chmod 400`, `ssh -i`)
- 🌐 Interaction TCP basique avec `nc` (Netcat)

---

### ⚠️ Faiblesses identifiées

- Réflexe de Googler avant de vérifier les pages `man`
- Légère hésitation avec les pipelines de traitement de texte

---

### 📦 Livrables publiés

- [x] 📝 Write-up publié : `overthewire_bandit_0-15.md`
- [x] 📝 Quick reference publiée : `overthewire_bandit_0-15v2.md`
- [x] 📋 Cheatsheet mise à jour : `bandit_shell_tools.md`
- [ ] 🚀 Code poussé sur GitHub

---

### 🎯 Objectifs semaine suivante

1. Refaire les niveaux Bandit 5 → 12 sans aucune aide externe
2. Utiliser `man` avant Google — construire le réflexe
3. Démarrer le contenu sécurité web (TryHackMe ou PortSwigger)

---

## 🗓️ Week 2 — 26 février → 1 mars 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 4 / 7         |
| ⏱️ Temps total       | ~6h30         |
| 😊 Humeur moyenne    | 3.8 / 5       |
| 📝 Score quiz        | 4 / 5         |

---

### ✅ Accomplissements

- [x] 📜 Complété TryHackMe – Bash Scripting
- [x] 🐚 Complété TryHackMe – Linux Shells
- [x] 🏴 Complété OverTheWire – Bandit niveaux 15 à 25
- [x] 🏴 Résolu 4 challenges Root-Me App Script (PATH Hijacking, Path Traversal, LaTeX Injection, Command Injection)
- [x] 🐍 Construit 2 scripts Python : service checker et SSH log parser

---

### 🧠 Compétences acquises

- 🔐 Connexion SSL/TLS avec `openssl s_client`
- 🔍 Scan de ports avec `nmap`
- 📄 Comparaison de fichiers avec `diff`
- 🖥️ Exécution de commandes SSH sans charger un shell
- ⚡ Exploitation de binaires SUID
- 📡 Setup d'un listener TCP avec `nc -l -p PORT`
- ⏰ Énumération et analyse de cron jobs (`/etc/cron.d/`)
- 🔢 Hashing MD5 et reconstruction de noms de fichiers
- 💉 Injection de scripts dans des répertoires surveillés par cron
- 💣 Automatisation de brute force avec `seq`, `printf`, et `nc`
- 🔀 PATH Hijacking — exploitation de binaires SUID avec appels non qualifiés
- 📁 Sudo misconfiguration — path traversal via wildcard
- 📄 LaTeX Injection — lecture de fichiers via `\openin` / `\typeout`
- 💻 PowerShell Command Injection via input non sanitisé
- 🐍 Python : `sys.argv`, `subprocess.run()`, lecture de fichiers, parsing de logs, dictionnaires

---

### ⚠️ Faiblesses identifiées

- 📝 Notes Linux Shells THM perdues avant sauvegarde — écrire immédiatement la prochaine fois
- 🐢 Temps encore trop long sur les niveaux nécessitant la reconstruction `md5sum`
- 🔍 Besoin d'un réflexe plus rapide pour la reconnaissance de binaires SUID

---

### 📦 Livrables publiés

- [x] 📝 Write-up publié : `overthewire_bandit_15-25.md`
- [x] 📋 Cheatsheet mise à jour : `bandit_shell_tools.md`
- [x] 📋 Référence mise à jour : `linux-cmd.md`
- [x] 🐍 Scripts poussés : `backup-script.sh`, `service_checker.py`, `log_parser.py`

---

### 🎯 Objectifs semaine suivante

1. Continuer les challenges Root-Me App Script
2. Démarrer le track sécurité web (PortSwigger / TryHackMe Web)
3. Améliorer le scripting Python — ajouter du parsing d'arguments et des patterns de gestion d'erreurs

---

## 🗓️ Week 3 — 2 → 8 mars 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 7 / 7 🔥      |
| ⏱️ Temps total       | ~7h           |
| 😊 Humeur moyenne    | 4 / 5         |
| 📝 Score quiz        | 4 / 5         |

---

### ✅ Accomplissements

- [x] 🌐 Complété TryHackMe – What Is Networking
- [x] 🌐 Complété TryHackMe – Introductory Networking
- [x] 🦈 Capturé et analysé du trafic TCP, DNS, HTTP dans Wireshark

---

### 🧠 Compétences acquises

- 🌐 Modèle OSI (7 couches) et modèle TCP/IP (4 couches) — structure et rôles
- 🤝 TCP Three-Way Handshake (SYN / SYN+ACK / ACK)
- 🔌 Numéros de ports courants (FTP, SSH, DNS, HTTP, HTTPS, RDP)
- 🌍 Processus de résolution DNS — hosts → cache → recursive → root → TLD → authoritative
- ⏳ DNS TTL (Time To Live) — expiration du cache
- 🔧 `dig` — requêtes DNS manuelles, lecture de la section ANSWER et du TTL
- 📡 `ping` — test d'accessibilité ICMP, flags `-4` `-i` `-v`
- 🗺️ `traceroute` — mapping de chemin, flags `-i` `-t`
- 🔍 `whois` — requêtes de propriété de domaine et IP
- 🦈 Wireshark — capture de paquets en direct, filtrage, analyse TCP/DNS/HTTP

---

### ⚠️ Faiblesses identifiées

- 🔄 Les couches OSI nécessitent une révision régulière pour rester solides (surtout couches 2-4)
- 🧠 La hiérarchie DNS nécessite encore un effort de rappel délibéré

---

### 📦 Livrables publiés

- [x] 📋 Référence créée : `network.md`
- [x] 📋 Cheatsheet mise à jour : `linux-cmd.md` (ping, traceroute, whois, dig)
- [ ] 🚀 Code poussé sur GitHub

---

### 🎯 Objectifs semaine suivante

1. Continuer les challenges Root-Me App Script
2. Démarrer PortSwigger Web Security Academy
3. Approfondir Wireshark — écrire des filtres et analyser des captures

---

## 🗓️ Week 4 — 9 → 15 mars 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 7 / 7 🔥      |
| ⏱️ Temps total       | ~10h          |
| 😊 Humeur moyenne    | 4 / 5         |
| 📝 Score quiz        | 4 / 5         |

---

### ✅ Accomplissements

- [x] 🔍 Complété TryHackMe – NMAP (types de scans, NSE, évasion firewall)
- [x] 🔍 Complété TryHackMe – Passive Reconnaissance
- [x] 🎯 Complété TryHackMe – Active Reconnaissance
- [x] ⚡ Complété TryHackMe – Linux Privilege Escalation

---

### 🧠 Compétences acquises

- 🔍 Types de scans NMAP : TCP Connect (`-sT`), SYN Half-open (`-sS`), UDP (`-sU`)
- 🥷 Scans avancés : NULL (`-sN`), FIN (`-sF`), Xmas (`-sX`) — évasion de firewall
- 📜 Catégories de scripts NSE (safe, vuln, exploit, auth, brute, discovery)
- 🛡️ Flags NMAP : `-Pn`, `-f`, `--mtu`, `--scan-delay`, `--badsum`, `--data-length`
- 🔍 Distinction passive vs active reconnaissance
- 📋 Types d'enregistrements DNS (A, AAAA, CNAME, MX, SOA, TXT)
- 🔧 `nslookup` — lookups DNS par type d'enregistrement
- 🏷️ `telnet` — banner grabbing sur HTTP, SMTP, POP3
- 🔧 Options Netcat et setup de listener
- 📋 Linux PrivEsc — checklist d'énumération complète
- ✏️ Exploitation `/etc/shadow` et `/etc/passwd` world-writable
- 🔓 Sudo GTFOBins (find, vim, awk, nmap, less, man, ftp)
- 💉 Injection LD_PRELOAD / LD_LIBRARY_PATH
- ⏰ Cron job PATH hijacking
- 📂 Exploitation NFS `no_root_squash`

---

### ⚠️ Faiblesses identifiées

- 📋 Les vecteurs Linux PrivEsc sont nombreux — besoin d'une approche d'énumération systématique
- 📜 Les scripts NSE nécessitent plus de pratique pour savoir lesquels utiliser dans quel contexte

---

### 📦 Livrables publiés

- [x] 📋 Référence mise à jour : `network.md` (NMAP, recon, DNS record types)
- [x] 📋 Cheatsheet mise à jour : `linux-cmd.md` (nmap étendu, telnet, nslookup)
- [ ] 🚀 Code poussé sur GitHub

---

### 🎯 Objectifs semaine suivante

1. Commencer PortSwigger Web Security Academy
2. Pratiquer NMAP sur des labs HackTheBox ou TryHackMe
3. Approfondir les techniques Linux PrivEsc avec des labs dédiés

---

## 🗓️ Week 5 — 17 → 22 mars 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 3 / 7         |
| ⏱️ Temps total       | ~8h           |
| 😊 Humeur moyenne    | 4 / 5         |
| 📝 Score quiz        | 4 / 5         |

---

### ✅ Accomplissements

- [x] 🐍 Complété TryHackMe – Python Basics (module complet)
- [x] 🐍 Complété TryHackMe – Python for Pentesters
- [x] 🔧 Construit un port scanner Python from scratch (socket, threading, argparse, banner grabbing)
- [x] 🔧 Développé/adapté 3 scripts offensifs : directory enumeration, hash cracker, SSH brute force

---

### 🧠 Compétences acquises

- 🐍 Python fondamentaux : variables, types, conditions, boucles, fonctions, fichiers, imports
- 🌐 `requests` — requêtes HTTP, vérification de status codes, analyse de contenu
- 🔌 `socket` — connexions TCP bas niveau, `connect_ex()` pour scan de ports
- 🔎 `re` — regex pour détecter des patterns (hashes MD5/SHA-256 dans des réponses HTTP)
- 🔐 `hashlib` — génération de hashes MD5/SHA-256, cracking par comparaison wordlist
- 🔑 `paramiko` — connexions SSH, brute force de credentials
- 📡 `scapy` — création de paquets réseau (ARP)
- 🧵 `threading` + `Semaphore` — scan parallèle avec limitation de threads actifs
- ⚙️ `argparse` — parsing d'arguments CLI (`--host`, `--start`, `--end`)
- 🏷️ Banner grabbing — identification de services et versions après connexion

---

### ⚠️ Faiblesses identifiées

- 🐛 Incohérence de nommage de variables (`response` vs `reponse`) — source de bugs silencieux
- 🔌 Placement du socket dans la boucle — créer un nouveau socket par connexion
- 🧵 Gestion des threads sans Semaphore → `Too many open files`

---

### 📦 Livrables publiés

- [x] 🔧 Script publié : port scanner Python (socket + threading + argparse + banner grabbing)
- [x] 📋 Logbook mis à jour (W5D1 à W5D3)
- [ ] 🚀 Code poussé sur GitHub

---

### 🎯 Objectifs semaine suivante

1. Démarrer PortSwigger Web Security Academy
2. Approfondir les scripts Python offensifs — ajouter des fonctionnalités au port scanner
3. Pratiquer NMAP + Python ensemble sur des labs

---

## 📋 Template – Semaines futures

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | [X] / 7       |
| ⏱️ Temps total       | [X]h [X]min   |
| 😊 Humeur moyenne    | [X] / 5       |
| 📝 Score quiz        | [X] / 10      |

---

### ✅ Accomplissements

- [ ] [Tâche majeure 1]
- [ ] [Tâche majeure 2]
- [ ] [Tâche majeure 3]

---

### 🧠 Compétences acquises

- [Compétence 1]
- [Compétence 2]

---

### ⚠️ Faiblesses identifiées

- [Axe d'amélioration]

---

### 📦 Livrables publiés

- [ ] 📝 Write-up publié
- [ ] 🚀 Code poussé sur GitHub
- [ ] 📋 Cheatsheet mise à jour

---

### 🎯 Objectifs semaine suivante

1. [Objectif 1]
2. [Objectif 2]
3. [Objectif 3]
