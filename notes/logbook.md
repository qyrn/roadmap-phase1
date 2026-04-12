# 🛡️ Progress Logbook – Pentest Journey

> [Semaine 1](#-semaine-1--setup--fondations-0203--0224) | [Semaine 2](#-semaine-2--scripting--challenges-0226--0301) | [Semaine 3](#-semaine-3--networking-0302--0308) | [Semaine 4](#-semaine-4--scanning--privesc-0309--0315) | [Semaine 5](#-semaine-5--python-offensif-0317--0322) | [Semaine 6](#-semaine-6--burp-suite--http-0323--0329) | [Semaine 7](#-semaine-7--osint--consolidation-0330--0408) | [Semaine 8](#-semaine-8--web-vulns-intro-0406--0412)
>
> *Les liens fonctionnent sur GitHub / VS Code Markdown Preview*

---

# 📌 SEMAINE 1 — Setup & Fondations (02/03 – 02/24)

---

## 📅 2026-02-03 — Day 1

**⏱️ Durée :** 40 min
**🎯 Focus :** Penetration Testing Fundamentals

### 🛠️ Ce que j'ai fait
- Regardé des vidéos éducatives sur les fondamentaux du pentesting

### 🧠 Ce que j'ai appris
- Concepts de base du penetration testing
- Principes fondamentaux de la sécurité

---

## 📅 2026-02-04 — Day 2

**⏱️ Durée :** 120 min
**🎯 Focus :** Environment Setup

### 🛠️ Ce que j'ai fait
- Installé une distribution Linux fraîche
- Optimisé l'environnement de travail

### 🧠 Ce que j'ai appris
- Comment poser une base solide pour les exercices de pentesting
- Bonnes pratiques système Linux

---

## 📅 2026-02-05 — Day 3

**⏱️ Durée :** 60 min
**🎯 Focus :** Web Application Security

### 🛠️ Ce que j'ai fait
- Installation propre d'Ubuntu
- Tutoriel sur les techniques d'exploitation React

### 🧠 Ce que j'ai appris
- Configuration système pour le pentesting
- Bases de l'exploitation d'applications web (React)

---

## 📅 2026-02-18 — Day 1 (Restart) 🔄

**⏱️ Durée :** 60 min
**🎯 Focus :** Linux Fundamentals
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Appris les commandes Linux de base
- Complété Linux Fundamentals 1 sur TryHackMe

### 🧠 Ce que j'ai appris
- Navigation dans le filesystem, recherche récursive de fichiers, redirection d'output

---

## 📅 2026-02-19 — Day 2

**⏱️ Durée :** 30 min
**🎯 Focus :** Linux Fundamentals Part 2
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété les Tasks 1 à 5 de Linux Fundamentals Part 2
- Pratiqué les commandes de gestion de fichiers sur la machine THM
- Appris SSH, opérations fichiers, et bases des permissions Linux

### 🧠 Ce que j'ai appris
- 🔐 Connexion à une machine distante via SSH
- 📁 Gestion fichiers et répertoires : `touch`, `mkdir`, `cp`, `mv`, `rm`
- 📋 Différence entre fichiers et répertoires dans `ls -l`
- 👁️ Fichiers cachés avec `ls -a`
- 🔍 Identification de type avec `file`
- 🔒 Structure des permissions Linux (r, w, x)
- 🔢 Système numérique de permissions (777, 750)
- 👤 Changement d'utilisateur avec `su`

---

## 📅 2026-02-22/23 — Days 3 & 4

**⏱️ Durée :** ~1h
**🎯 Focus :** Linux Fundamentals Part 2 & Part 3 (complétés)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété Linux Fundamentals Part 2 et Part 3
- Pratiqué transfert de fichiers, gestion de processus, services et logging
- Revu la structure du filesystem Linux

### 🧠 Ce que j'ai appris

#### 📂 Structure du filesystem
- `/etc` → fichiers de configuration système
- `/var` → données variables (logs, cache, spool)
- `/home` → répertoires utilisateurs
- `/root` → répertoire du superutilisateur
- `/tmp` → fichiers temporaires

#### 📝 Édition & transferts de fichiers
- `nano` pour créer et éditer des fichiers
- `wget` pour télécharger des fichiers
- `scp` pour transférer entre machines

#### ⚙️ Gestion de processus
- `ps` et `ps aux` pour visualiser les processus
- `top` pour le monitoring en temps réel
- `kill` avec SIGTERM, SIGKILL, SIGSTOP
- `CTRL+Z` pour suspendre, `fg` / `bg` pour reprendre

#### 🔧 Services & contrôle système
- `systemctl` (start, stop, enable, disable, status)

#### ⏰ Automatisation
- Structure et format cron job (`* * * * *`)

#### 📦 Gestion de paquets
- `apt` pour installer et mettre à jour depuis les dépôts

#### 📊 Bases de logging
- Lecture des access logs Apache dans `/var/log/apache2/access.log`
- Identification : IP client, méthode HTTP, ressource demandée, status code

---

## 📅 2026-02-24 — Day 5 🏁

**⏱️ Durée :** ~2–3h
**🎯 Focus :** OverTheWire – Bandit (Level 0 → 15)
**📍 Plateforme :** OverTheWire

### 🛠️ Ce que j'ai fait
- Complété les niveaux Bandit 0 à 15
- Pratiqué l'authentification SSH et l'utilisation de clés privées
- Appliqué des techniques de manipulation, recherche et filtrage de fichiers
- Utilisé des outils réseau (`nc`)
- Travaillé avec des encodages et formats de compression

### 🧠 Ce que j'ai appris
- 📄 Gestion de noms de fichiers piégés (tirets, espaces, fichiers cachés)
- 🔍 Recherche efficace avec `find`
- 🔎 Filtrage avec `grep`, `sort`, `uniq`
- 🔇 Compréhension stdout vs stderr (`2>/dev/null`)
- 🔓 Décodage Base64 et ROT13 (`tr`)
- 🔢 Hex dumps (`xxd -r`)
- 📦 Extraction d'archives (`gzip`, `bzip2`, `tar`)
- 🔑 Clés SSH privées (`chmod 400`, `ssh -i`)
- 🌐 Interaction TCP basique avec `nc`

---

# 📌 SEMAINE 2 — Scripting & Challenges (02/26 – 03/01)

---

## 📅 2026-02-26 — Week 2 Day 1

**⏱️ Durée :** ~1h
**🎯 Focus :** Bash Scripting – Script de backup automatisé

### 🛠️ Ce que j'ai fait
- Construit un script Bash de backup complet from scratch
- Implémenté variables, validation de répertoire, gestion d'erreurs
- Utilisé `date`, `basename`, `mkdir -p`, `cp -r`

### 🧠 Ce que j'ai appris
- 📜 Shebang portable : `#!/usr/bin/env bash` localise bash via `PATH`
- 📝 Déclaration de variables : `VAR=value`, référencé avec `$VAR`
- 🔄 Substitution de commande : `VAR=$(command)`
- 🔀 Conditionnels : `if [ condition ]; then ... fi`
- ✅ Vérification d'existence : `[ -d "$DIR" ]`
- 🚪 Codes de sortie : `0` = succès, non-zéro = erreur
- 💬 Toujours quoter les variables (`"$VAR"`) pour les chemins avec espaces
- 📂 `cp -r "$SOURCE"` copie le répertoire ; `cp -r "$SOURCE"/*` copie son contenu
- ✂️ `basename /path/to/dir` retourne uniquement le dernier composant

---

## 📅 2026-02-27 — Week 2 Day 2

**⏱️ Durée :** ~1h
**🎯 Focus :** Bash Scripting & Linux Shells
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété TryHackMe – Bash Scripting
- Complété TryHackMe – Linux Shells

### 🧠 Ce que j'ai appris

#### 📜 Bash Scripting THM
- Rien de nouveau — concepts déjà couverts avec le script de backup la veille

#### 🐚 Linux Shells THM
- Différents types de shells et fonctionnalités spécifiques
- Variables d'environnement, variables shell, bases du scripting
- *(Notes perdues avant sauvegarde)*

---

## 📅 2026-02-28 — Week 2 Day 3

**⏱️ Durée :** ~2h30
**🎯 Focus :** OverTheWire – Bandit (Level 15 → 25)
**📍 Plateforme :** OverTheWire

### 🛠️ Ce que j'ai fait
- Complété les niveaux Bandit 15 à 25
- 🔐 Connexions SSL/TLS avec `openssl s_client`
- 🔍 Scan de ports avec `nmap` pour identifier les services SSL
- 🔑 Récupération et utilisation d'une clé RSA privée
- 🛡️ Bypass d'un `.bashrc` hostile via commande SSH directe
- ⚡ Exploitation d'un binaire SUID pour lire des fichiers protégés
- 📡 Setup d'un listener `nc` en background
- ⏰ Analyse de cron jobs et reverse-engineering de scripts
- 💣 Brute-force d'un PIN 4 chiffres via `nc`

### 🧠 Ce que j'ai appris
- `openssl s_client` connecte aux services SSL/TLS — contrairement à `nc` (plaintext)
- `-ign_eof` maintient la connexion jusqu'à réception de la réponse
- `nmap -p PORT_RANGE localhost` scanne un range de ports
- `diff` compare deux fichiers (`<` = file1, `>` = file2)
- SSH peut exécuter une commande sans charger un shell : `ssh user@host command`
- Les binaires SUID tournent avec les privilèges du propriétaire
- `nc -l -p PORT` crée un listener TCP — `&` le lance en background
- `* * * * *` en cron = chaque minute ; cron jobs dans `/etc/cron.d/`
- `md5sum` génère un hash ; `cut -d ' ' -f 1` extrait le hash
- `seq 0 9999` + `printf '%04d'` pour générer toutes les combinaisons
- Piper toutes les combinaisons en un seul `nc` évite 10 000 reconnexions

---

## 📅 2026-03-01 — Week 2 Day 4

**⏱️ Durée :** ~2h
**🎯 Focus :** Root-Me App Script + Python Scripting
**📍 Plateforme :** Root-Me, Python

### 🛠️ Ce que j'ai fait
- Résolu 4 challenges Root-Me App Script
- Construit un script Python de vérification de status de services via `systemctl`
- Construit un script Python d'analyse de logs SSH pour détecter le brute force

### 🧠 Ce que j'ai appris

#### 🏴 Root-Me — App Script

**🔀 PATH Hijacking (System 1 & 2)**
- Un binaire SUID appelant une commande sans chemin absolu peut être hijacké
- Créer un faux binaire avec le même nom, placer son répertoire en premier dans `$PATH`
- Quand le binaire a des arguments (`ls -lA`), `$1` ne marche pas — hardcoder le chemin

**📁 Sudo Path Traversal**
- Un wildcard `*` dans une règle sudo (`/bin/cat notes/*`) est abusable avec `../`
- `sudo -u user /bin/cat /allowed/path/../target/.passwd` lit hors du scope prévu

**📄 LaTeX Injection**
- Un script compilant du `.tex` fourni par l'utilisateur avec des droits élevés est exploitable
- `\openin` + `\read` + `\typeout` lit un fichier et affiche son contenu dans le log
- `%` est un caractère commentaire en LaTeX — `\catcode\`\%=12` le désactive si nécessaire

**💻 PowerShell Command Injection**
- Un input non sanitisé dans un script PowerShell permet d'injecter via `;`
- `gc` = alias PowerShell pour `Get-Content` (équivalent `cat`)

#### 🐍 Python Scripting
- `sys.argv` — accès aux arguments CLI
- `subprocess.run(["cmd", "arg"], capture_output=True, text=True)` — exécuter une commande shell
- `result.stdout.strip()` — nettoyer l'output
- `open(file, "r")` + `for line in f` — lire ligne par ligne
- `line.split()` + `.index("word")` — parser des lignes structurées
- `dict.get(key, default)` — compter des occurrences avec valeur par défaut

---

# 📌 SEMAINE 3 — Networking (03/02 – 03/08)

---

## 📅 2026-03-02 — Week 3 Day 1

**⏱️ Durée :** ~45min
**🎯 Focus :** What Is Networking
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété TryHackMe – What Is Networking

### 🧠 Ce que j'ai appris
- Consolidation — rien de fondamentalement nouveau, mais bon d'avoir des mémos structurés
- 🌐 Un réseau = deux appareils ou plus connectés pour partager des ressources
- 🏷️ Identification par adresse IP et adresse MAC

---

## 📅 2026-03-03 — Week 3 Day 2

**⏱️ Durée :** ~1h
**🎯 Focus :** Introductory Networking (Modèle OSI)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Étudié le modèle OSI en entier (7 couches)

### 🧠 Ce que j'ai appris

#### 🌐 Modèle OSI (7 couches — application → physique)
- 7️⃣ **Application** — interface entre les apps et le réseau (navigateur, client mail, API)
- 6️⃣ **Presentation** — traduction de format, chiffrement/déchiffrement, compression
- 5️⃣ **Session** — création et gestion de sessions, connexions simultanées
- 4️⃣ **Transport** — sélection du protocole (TCP vs UDP), segmentation
  - 🔒 TCP : fiable, vérifie les paquets, retransmet en cas de perte — segments
  - ⚡ UDP : rapide, pas de vérification, streaming/VoIP — datagrams
- 3️⃣ **Network** — routage de paquets, adressage IP (logique)
- 2️⃣ **Data Link** — communication LAN, adressage MAC (physique), NIC
- 1️⃣ **Physical** — transmission physique, convertit les bits en signaux

🧠 Mnémonique (FR) : "Alain part servir trois nachos à des péruviens"

---

## 📅 2026-03-04 — Week 3 Day 3

**⏱️ Durée :** ~1h
**🎯 Focus :** Introductory Networking (Modèle TCP/IP)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Étudié le modèle TCP/IP et son contexte historique
- Comparé les couches TCP/IP aux couches OSI

### 🧠 Ce que j'ai appris

#### 🌐 Modèle TCP/IP (4 couches)
- Application / Transport / Internet / Network Interface
- TCP/IP = le vrai standard utilisé sur Internet — OSI = modèle pédagogique
- Standardisé en 1982 par le DoD US pour remplacer les systèmes propriétaires incompatibles

#### 🔒 TCP vs ⚡ UDP
- TCP : fiable, vérifie les paquets, retransmet en cas de perte, plus lent
- UDP : rapide, pas de vérification, streaming et VoIP

---

## 📅 2026-03-05 — Week 3 Day 4

**⏱️ Durée :** ~45min
**🎯 Focus :** Introductory Networking (Three-Way Handshake + ports)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Analysé le TCP Three-Way Handshake en détail
- Mappé les numéros de ports courants à leurs protocoles

### 🧠 Ce que j'ai appris

#### 🤝 Three-Way Handshake (établissement de connexion TCP)
1. 📤 **SYN** — le client demande la connexion
2. 📥 **SYN + ACK** — le serveur accepte
3. 📤 **ACK** — le client confirme, connexion établie

#### 🔌 Ports courants
| Port | Protocole |
|------|-----------|
| 21   | 📂 FTP   |
| 22   | 🔐 SSH   |
| 53   | 🌐 DNS   |
| 80   | 🌍 HTTP  |
| 443  | 🔒 HTTPS |
| 3389 | 🖥️ RDP  |

---

## 📅 2026-03-06 — Week 3 Day 5

**⏱️ Durée :** ~1h
**🎯 Focus :** Introductory Networking (DNS)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Étudié le processus de résolution DNS et sa hiérarchie en profondeur
- Pratiqué avec `dig` pour requêter le DNS manuellement

### 🧠 Ce que j'ai appris

#### 🌐 DNS (Domain Name System)
- Traduit les noms de domaine en adresses IP (`www.google.com → 142.250.x.x`)
- 🔄 Ordre de résolution :
  1. Fichier hosts local (`/etc/hosts`)
  2. Cache DNS
  3. Serveur DNS récursif (FAI ou public comme 8.8.8.8)
  4. Root Name Server → TLD Server (.com / .org) → Authoritative Name Server

#### ⏳ TTL (Time To Live)
- Indique combien de temps cacher un enregistrement DNS avant de re-requêter
- Exemple : TTL = 157 → après 157 secondes, nouvelle requête DNS nécessaire

#### 🔧 dig
- `dig domain` — lookup DNS standard
- `dig domain @8.8.8.8` — requêter un serveur DNS spécifique
- La section ANSWER montre l'IP résolue ; TTL montre la durée de cache

---

## 📅 2026-03-07 — Week 3 Day 6

**⏱️ Durée :** ~1h
**🎯 Focus :** Introductory Networking (ping / traceroute / whois)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Étudié `ping`, `traceroute` et `whois` — flags et cas d'usage

### 🧠 Ce que j'ai appris

#### 📡 ping
- Envoie des requêtes ICMP echo pour tester l'accessibilité d'un hôte
- `-4` force IPv4, `-i` définit l'intervalle, `-v` output verbeux

#### 🗺️ traceroute
- Mappe le chemin des paquets vers une destination, enregistre chaque saut
- Utilise la couche Internet par défaut
- `-i` spécifie l'interface, `-t` utilise TCP SYN au lieu d'UDP

#### 🔍 whois
- Requête les infos d'enregistrement de domaine et propriété d'adresse IP
- Prédécesseur de la résolution DNS (ère pré-DNS)

---

## 📅 2026-03-08 — Week 3 Day 7

**⏱️ Durée :** ~1h30
**🎯 Focus :** Wireshark – Capture et analyse de trafic en direct

### 🛠️ Ce que j'ai fait
- Installé et configuré Wireshark
- 🤝 Capturé un TCP Three-Way Handshake
- 🌐 Capturé du trafic DNS avec `dig`
- 🌍 Capturé du trafic HTTP avec `curl`

### 🧠 Ce que j'ai appris

#### 🦈 Wireshark
- Analyseur de paquets open source multiplateforme
- Capture et inspecte le trafic réseau en temps réel
- Filtrage par protocole, IP, port et autres critères

#### 🤝 Capture TCP Handshake
- Observé la séquence SYN → SYN+ACK → ACK
- Confirme l'établissement de connexion TCP entre client et serveur

#### 🌐 Capture DNS
- Générée avec `dig example.com`
- Observé : requête standard (client → serveur DNS) + réponse

#### 🌍 Capture HTTP
- Générée avec `curl http://example.com`
- Observé : requête `GET / HTTP/1.1` → réponse `200 OK`

---

# 📌 SEMAINE 4 — Scanning & PrivEsc (03/09 – 03/15)

---

## 📅 2026-03-09 — Week 4 Day 1

**⏱️ Durée :** ~1h30
**🎯 Focus :** NMAP (types de scans & bases)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Étudié les trois types de scans principaux (TCP Connect, SYN, UDP)
- Mémorisé la structure des 65535 ports et les ports courants
- Pratiqué les options nmap en ligne de commande

### 🧠 Ce que j'ai appris

#### 🔌 Structure des ports
- Chaque machine possède 65535 ports
- Ports 0–1023 = well-known (protocoles réservés)
- HTTP: 80 / HTTPS: 443 / NetBIOS: 139 / SMB: 445

#### 🔗 TCP Connect Scan (`-sT`)
- Complète le Three-Way Handshake complet sur chaque port
- 🔊 Plus bruyant — laisse des traces dans les logs de la cible
- Utilisé sans accès root (quand `-sS` n'est pas disponible)

#### ⚡ SYN "Half-open" Scan (`-sS`)
- Scan le plus populaire — nécessite root/sudo
- Envoie SYN → reçoit SYN+ACK → envoie RST (handshake incomplet)
- 🤫 Plus rapide et plus discret que `-sT`

#### 🐢 UDP Scan (`-sU`)
- Plus lent — pas de handshake, repose sur ICMP "port unreachable" pour les ports fermés
- Aucune réponse → port marqué open|filtered
- RFC 9293 définit le comportement correct du protocole TCP

---

## 📅 2026-03-10 — Week 4 Day 2

**⏱️ Durée :** ~1h30
**🎯 Focus :** NMAP (scans avancés & NSE)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Étudié les scans NULL, FIN et Xmas
- Exploré le Nmap Scripting Engine (NSE) et ses catégories
- Pratiqué les flags d'output et de timing

### 🧠 Ce que j'ai appris

#### 🥷 Types de scans avancés
- **NULL** (`-sN`) — paquet TCP sans aucun flag ; RST si port fermé
- **FIN** (`-sF`) — flag FIN envoyé ; RST si port fermé
- **Xmas** (`-sX`) — flags PSH, URG, FIN (ressemble à un sapin en Wireshark 🎄) ; RST si fermé
- Ces trois types servent à l'**évasion de firewall**
- ⚠️ Windows peut répondre RST sur tous les ports — peu fiable sur Windows

#### 📜 Catégories NSE
| Catégorie     | Description                                        |
|---------------|----------------------------------------------------|
| `safe`        | ✅ Aucun impact sur la cible                       |
| `intrusive`   | ⚠️ Peut affecter la cible                         |
| `vuln`        | 🔍 Scan de vulnérabilités connues                  |
| `exploit`     | 💣 Tentative d'exploitation                        |
| `auth`        | 🔓 Bypass d'authentification (ex: FTP anonyme)     |
| `brute`       | 🔑 Brute-force de credentials                      |
| `discovery`   | 🌐 Interroge les services pour obtenir des infos   |

#### 🎛️ Flags principaux
- `-o` — détection d'OS
- `-sV` — détection de version des services
- `-v` / `-vv` — verbosité (recommandé : `-vv`)
- `-oA` — output dans les 3 formats simultanément
- `-oN` — output normal vers fichier
- `-oG` — output au format grep
- `-a` — mode agressif
- `-T<0-5>` — timing template (+ élevé = + rapide = + bruyant)
- `-p <port>` / `-p-` — port spécifique ou tous les 65535
- `--script <nom>` — exécuter un script NSE spécifique
- `--script=vuln` — exécuter tous les scripts de la catégorie vuln
- `--top-ports <n>` — scanner les n ports les plus courants

---

## 📅 2026-03-11 — Week 4 Day 3

**⏱️ Durée :** ~1h
**🎯 Focus :** NMAP (évasion firewall) + Passive Reconnaissance
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété la section évasion de firewall NMAP
- Complété le module Passive Reconnaissance

### 🧠 Ce que j'ai appris

#### 🛡️ NMAP — Évasion de firewall
- `-Pn` — skip le ping de découverte (utile quand ICMP est bloqué)
- `-f` — fragmente les paquets pour tromper l'IDS
- `--mtu <n>` — taille de transmission maximum personnalisée (multiple de 8)
- `--scan-delay <n>ms` — délai entre paquets (évasion de triggers temporels)
- `--badsum` — checksum invalide pour détecter la présence d'un firewall
- `--data-length <n>` — ajoute des données aléatoires aux paquets
- Protocole bloqué par `-Pn` : ICMP

#### 🔍 Passive vs 🎯 Active Reconnaissance
- 🔍 Passive : aucun contact direct (DNS, offres d'emploi, articles de presse)
- 🎯 Active : contact direct (connexion aux serveurs, social engineering, accès physique)

#### 📋 Types d'enregistrements DNS
| Type  | Résultat             |
|-------|----------------------|
| A     | 🌐 Adresses IPv4    |
| AAAA  | 🌐 Adresses IPv6    |
| CNAME | 🔗 Canonical Name   |
| MX    | 📧 Serveurs de mail |
| SOA   | 🏛️ Start of Authority |
| TXT   | 📝 Enregistrements TXT |

#### 🔧 nslookup
- `nslookup -type=A domain` — lookup IPv4
- `nslookup -type=MX domain 1.1.1.1` — enregistrements MX via serveur spécifique
- `nslookup -type=TXT domain` — enregistrements TXT

---

## 📅 2026-03-12 — Week 4 Day 4

**⏱️ Durée :** ~1h
**🎯 Focus :** Active Reconnaissance
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété le module Active Reconnaissance
- Pratiqué le banner grabbing avec telnet
- Revu les options netcat et leurs cas d'usage

### 🧠 Ce que j'ai appris

#### 📡 ping — détails
- `-s` — définit la taille des données portées par la requête ICMP echo
- Taille de l'en-tête ICMP : 8 bytes
- ⚠️ Le Firewall Windows bloque ping par défaut

#### 🏷️ Telnet pour le banner grabbing
- Telnet ouvre une connexion TCP brute — il faut parler le protocole du service manuellement
- Port 80 → HTTP → `GET / HTTP/1.0` + deux Entrées
- Port 25 → SMTP → `EHLO`, `MAIL FROM:`, etc.
- Port 110 → POP3 → `USER`, `PASS`
- Les headers de réponse révèlent le nom et la version du service (`Server: nginx/1.6.2`)

#### 🔧 Netcat — options
| Flag   | Description                                    |
|--------|------------------------------------------------|
| `-l`   | 👂 Mode écoute                                 |
| `-p`   | 🔌 Spécifier le port                           |
| `-n`   | 🔢 Numérique uniquement, pas de résolution DNS |
| `-v`   | 📢 Output verbeux                              |
| `-vv`  | 📢📢 Très verbeux                              |
| `-k`   | 🔄 Continuer à écouter après déconnexion       |

- ⚠️ Port < 1024 nécessite root pour écouter

---

## 📅 2026-03-13 — Week 4 Day 5

**⏱️ Durée :** ~2h
**🎯 Focus :** Linux PrivEsc (énumération + exploitation shadow/passwd)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Démarré le module Linux Privilege Escalation
- Pratiqué les techniques d'énumération système
- Exploité `/etc/shadow` et `/etc/passwd` en world-writable

### 🧠 Ce que j'ai appris

#### 🔍 Énumération
| Commande | Résultat |
|----------|----------|
| `uname -a` | 🖥️ Infos système (kernel, architecture) |
| `id && whoami` | 👤 Utilisateur courant |
| `cat /etc/passwd` | 👥 Liste des utilisateurs |
| `sudo -l` | 🔐 Droits sudo de l'utilisateur courant |
| `ps aux` | ⚙️ Processus en cours |
| `find / -perm -u=s -type f 2>/dev/null` | 💎 Fichiers SUID |
| `cat /etc/crontab` | ⏰ Tâches cron planifiées |
| `cat ~/.*history \| less` | 📜 Historique des commandes |
| `cat /etc/exports` | 📂 Configuration NFS |

#### 🔓 Cracker /etc/shadow
- Extraire le hash : `grep "root" /etc/shadow > hash.txt`
- Craquer : `john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt`
- Afficher : `john --show hash.txt`
- ⚠️ John doit tourner sur **Kali**, pas sur la cible

#### ✏️ /etc/shadow world-writable
- Générer un hash : `mkpasswd -m sha-512 monmotdepasse`
- Remplacer le hash root directement dans `/etc/shadow`
- `su root`

#### ✏️ /etc/passwd world-writable
- Générer un hash : `openssl passwd monmotdepasse`
- Ajouter : `echo 'newroot:HASH:0:0:root:/root:/bin/bash' >> /etc/passwd`
- `su newroot`

---

## 📅 2026-03-14 — Week 4 Day 6

**⏱️ Durée :** ~1h30
**🎯 Focus :** Linux PrivEsc (GTFOBins sudo + LD_PRELOAD)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Exploité des permissions sudo mal configurées via GTFOBins
- Exploité LD_PRELOAD et LD_LIBRARY_PATH pour escalader les privilèges

### 🧠 Ce que j'ai appris

#### 🔓 Sudo — GTFOBins
- `sudo find . -exec /bin/sh \; -quit`
- `sudo vim -c ':!/bin/sh'`
- `sudo awk 'BEGIN {system("/bin/sh")}'`
- `sudo nmap --interactive` puis `!sh`
- `sudo less /etc/passwd` puis `!/bin/sh`
- 📚 Référence : https://gtfobins.github.io

#### 💉 LD_PRELOAD
- Si `env_keep+=LD_PRELOAD` dans sudoers → injecter une shared library avant tout `sudo`
- `gcc -fPIC -shared -nostartfiles -o /tmp/preload.so preload.c`
- `sudo LD_PRELOAD=/tmp/preload.so find`

#### 📚 LD_LIBRARY_PATH
- `ldd /usr/sbin/apache2` — lister les bibliothèques utilisées par un binaire
- Remplacer l'une d'elles par une version malveillante compilée dans /tmp
- `sudo LD_LIBRARY_PATH=/tmp apache2`

---

## 📅 2026-03-15 — Week 4 Day 7

**⏱️ Durée :** ~1h30
**🎯 Focus :** Linux PrivEsc (cron hijacking + NFS)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Exploité le PATH hijacking sur des cron jobs
- Exploité la misconfiguration NFS `no_root_squash`

### 🧠 Ce que j'ai appris

#### ⏰ Cron Jobs — PATH Hijacking
- `cat /etc/crontab` — vérifier si le PATH commence par un répertoire inscriptible
- Créer un faux script avec le même nom que le binaire cron dans ce répertoire
- Le script copie `/bin/bash` vers `/tmp/rootbash` avec le bit SUID
- Attendre 1 minute, puis exécuter `/tmp/rootbash -p`
- 🧹 Toujours nettoyer : `rm /tmp/rootbash && exit`

#### 📂 NFS — no_root_squash
- `cat /etc/exports` — chercher les partages avec `no_root_squash`
- Avec cette option, root sur la machine attaquante = root sur le partage NFS
- Sur Kali (en root) : monter le partage, créer un binaire SUID avec msfvenom, `chmod +xs`
- Sur la cible : exécuter le binaire → shell root

#### 🔄 Rappels d'énumération
- `cat ~/.*history | grep -i 'mysql\|pass\|ssh'` — chercher des credentials dans l'historique
- Toujours `exit` proprement après un shell root
- 🧹 Nettoyer les fichiers temporaires après chaque exploit

---

# 📌 SEMAINE 5 — Python Offensif (03/17 – 03/22)

---

## 📅 2026-03-17 — Week 5 Day 1

**⏱️ Durée :** ~2h
**🎯 Focus :** Python Basics (module complet)
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété le module TryHackMe Python Basics en entier
- Couvert : syntaxe de base, opérateurs, variables, conditions, boucles, fonctions, fichiers, imports

### 🧠 Ce que j'ai appris

#### 🖨️ Print & syntaxe de base
- `print("texte")` — affiche du texte à l'écran
- `#` — commentaire, non exécuté par l'interpréteur

#### ➕ Opérateurs mathématiques
| Opérateur      | Syntaxe | Exemple           |
|----------------|---------|-------------------|
| Addition       | `+`     | `1 + 1 = 2`      |
| Soustraction   | `-`     | `5 - 1 = 4`      |
| Multiplication | `*`     | `10 * 10 = 100`  |
| Division       | `/`     | `10 / 2 = 5`     |
| Modulo         | `%`     | `10 % 2 = 0`     |
| Exposant       | `**`    | `5**2 = 25`      |

#### ⚖️ Opérateurs de comparaison
| Symbole | Signification          |
|---------|------------------------|
| `>`     | Supérieur à            |
| `<`     | Inférieur à            |
| `==`    | Égal à                 |
| `!=`    | Différent de           |
| `>=`    | Supérieur ou égal à    |
| `<=`    | Inférieur ou égal à    |

#### 📦 Variables et types de données
- Déclaration directe (pas de `var`/`let`/`const` comme en JS) : `age = 30`
- Types : `str`, `int`, `float`, `bool`, `list`
- Conversion : `str(nombre)` pour concaténer un nombre avec un string

#### 🔀 Opérateurs logiques et booléens
- `and` (équivalent JS `&&`), `or` (`||`), `not` (`!`)
- Structure conditionnelle : `if` / `elif` / `else` — l'indentation définit les blocs (pas de `{}`)

#### 🔁 Boucles
- `while condition:` — tourne tant que la condition est vraie (attention aux boucles infinies)
- `for item in liste:` — itère sur une liste
- `for i in range(n):` — itère de 0 à n-1 (remplace le `for (let i = 0; i < n; i++)` du JS)

#### 🧩 Fonctions
- `def nomFonction(param1, param2):` — définition (pas de `function` ni `{}`)
- `return` pour renvoyer une valeur
- Une fonction = une responsabilité

#### 📄 Fichiers
- Lecture : `open("fichier.txt", "r")` → `.read()` (tout) ou `.readlines()` (ligne par ligne)
- Écriture : `"a"` (append) ou `"w"` (écrase/crée)
- Context manager : `with open(...) as f:` — ferme automatiquement le fichier
- 🎯 Use case cyber : importer une wordlist, exporter des résultats de scan

#### 📥 Imports
- `import lib` puis `lib.methode()`
- Libs utiles en pentest : `requests` (HTTP), `scapy` (paquets réseau), `pwntools` (CTF & exploit dev)
- Installation : `pip install nom_lib`

---

## 📅 2026-03-21 — Week 5 Day 2

**⏱️ Durée :** ~3h
**🎯 Focus :** Python for Pentesters
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété la room TryHackMe Python for Pentesters
- Développé/adapté des scripts : directory enumeration, hash cracker, SSH brute force
- Pratiqué les modules requests, socket, sys, re, hashlib, paramiko, scapy

### 🧠 Ce que j'ai appris

#### ⌨️ Entrée utilisateur
- `input()` — saisie interactive pendant l'exécution
- `sys.argv[1]` — argument passé directement en CLI

#### 🔎 Regex et pattern matching
- `re.search(r'[a-f0-9]{32}', r.text)` — chercher un pattern MD5 dans une réponse HTTP
- Hash MD5 = 32 caractères hexadécimaux `[a-f0-9]`
- Hash SHA-256 = 64 caractères hexadécimaux
- `re.search` pour des patterns, `in` pour des mots exacts

#### 🔐 Hashing et cracking
- `hashlib.md5()` / `hashlib.sha256()` pour générer des hashes
- Hash cracking = comparer des hashes générés depuis une wordlist avec le hash cible (pas de "reverse", juste de la comparaison)

#### 💀 Kill Chain
- Lateral Movement = phase où PSexec est utilisé (déjà dans le réseau, déplacement d'une machine à l'autre)

#### 🐍 Modules Python vus

| Module   | Usage                                       |
|----------|---------------------------------------------|
| requests | 🌐 Requêtes HTTP (`requests.get()`)         |
| socket   | 🔌 Connexions TCP bas niveau (port scanner) |
| sys      | ⚙️ `sys.argv[]`, `sys.stdout.flush()`      |
| re       | 🔎 Regex pour chercher des patterns         |
| hashlib  | 🔐 Générer des hashes MD5/SHA-256           |
| paramiko | 🔑 Connexions SSH (brute force)             |
| scapy    | 📡 Créer des paquets réseau (ARP)           |
| keyboard | ⌨️ Enregistrer/rejouer des frappes clavier  |
| pyfiglet | 🎨 Bannières ASCII (cosmétique)             |
| py2exe   | 📦 Convertir scripts Python en .exe Windows |

### 📜 Scripts développés / adaptés

#### 🔍 Directory enumeration
- Charger une wordlist, construire des URLs, vérifier status 200
- Adapter la condition pour chercher du contenu spécifique :
  `if "username" in r.text` — trouver page de login/userlist
  `if re.search(r'[a-f0-9]{32}', r.text)` — trouver un hash caché

#### 🔓 Hash cracker
- Lire une wordlist, hasher chaque ligne, comparer au hash cible
- Adapter `hashlib.md5` → `hashlib.sha256` selon le type de hash

#### 🔑 SSH brute force
- Fonction `ssh_connect()` avec paramiko
- code=0 si auth réussie, code=1 si échec
- Itérer sur une wordlist jusqu'à trouver le bon password

### ❌ Erreurs faites
- Typo `passwsord` dans paramiko → erreur keyword argument
- `def (password)` sans nom de fonction → SyntaxError
- `input_file.close()` sur une variable inexistante → NameError
- `reponse` vs `response` → NameError silencieux dans le flux
- Oublier de passer l'IP en argument → IndexError `sys.argv`

### 💡 Réflexes à garder
- Toujours vérifier la cohérence des noms de variables (`response` vs `reponse` → bug silencieux)
- `count += 1` ≠ `count = 1` — ne jamais réassigner un compteur
- L'indentation Python = structure du code, une erreur = bug logique
- Filtrer sur status 200 (valide) plutôt que 404 (invalide)
- Penser à `| grep` pour filtrer un output volumineux

### 🔌 Protocoles / ports à retenir
- 🔐 SSH → TCP 22
- 🌐 DNS → utilisable pour énumération de sous-domaines
- 📡 ARP → découverte réseau local (Scapy)

### 🏆 Résultat final
- Trouvé page privée : `private.html`
- Trouvé page login avec username : `tiffany`
- Cracké password SSH : `trustno1`
- Lu `flag.txt` via SSH connecté en tant que tiffany

---

## 📅 2026-03-22 — Week 5 Day 3

**⏱️ Durée :** ~3h
**🎯 Focus :** Port Scanner Python (socket, threading, argparse, banner grabbing)
**📍 Plateforme :** Python

### 🛠️ Ce que j'ai fait
- Construit un port scanner en Python avec socket, multi-threading, argparse et banner grabbing

### 🧠 Ce que j'ai appris

#### 🔌 socket
- Module Python pour faire des connexions réseau TCP bas niveau
- `connect_ex(host, port)` retourne `0` si le port est ouvert, autre chose sinon

#### 🧵 threading + Semaphore
- Permet de scanner plusieurs ports en parallèle au lieu d'un par un
- `Semaphore(100)` limite le nombre de threads actifs pour éviter de saturer le système

#### ⚙️ argparse
- Permet de passer des arguments au script depuis le terminal (`--host`, `--start`, `--end`)
- Plus besoin de hardcoder les valeurs dans le code

#### 🏷️ Banner grabbing
- Après connexion sur un port ouvert, on envoie une requête et on lit la réponse du service
- Ça révèle le nom et la version du service (ex: `Apache/2.4.7 Ubuntu`)

### 📜 Commande type
```bash
python3 scanner.py --host scanme.nmap.org --start 1 --end 1024
```

### ❌ Erreurs fréquentes
- `connect.ex` au lieu de `connect_ex` (underscore, pas un point)
- Socket créé en dehors de la boucle → bug sur les connexions multiples
- Trop de threads sans Semaphore → `Too many open files`
- `banner.decode()` sans `errors='ignore'` → crash sur bytes non-UTF-8

---

# 📌 SEMAINE 6 — Burp Suite & HTTP (03/23 – 03/29)

---

## 📅 2026-03-27 — Week 6 Day 1

**⏱️ Durée :** ~1h
**🎯 Focus :** Burp Suite: The Basics
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété le module Burp Suite: The Basics sur TryHackMe
- Configuré le proxy Burp et intercepté des requêtes HTTP
- Exploré les onglets Target (Site map, Scope, Issue definitions)
- ⚠️ Challenge pratique sitemap (`http://10.10.x.x/`) non réalisé — IP interne THM inaccessible sans VPN fonctionnel

### 🧠 Ce que j'ai appris

#### 🔧 Burp Suite — Architecture générale
- Burp Suite est un **proxy d'interception HTTP** : il se place entre le navigateur et le serveur pour capturer, lire et modifier les requêtes
- **Proxy** → intercepte le trafic HTTP en temps réel
- **HTTP History** → liste toutes les requêtes capturées pendant la session
- **Intercept on/off** → active ou désactive l'interception manuelle
- **Forward / Drop** → envoie ou bloque une requête interceptée

#### 🗺️ Onglet Target
- **Site map** → carte visuelle en arbre des pages visitées ; utile pour la reconnaissance et la découverte d'endpoints API
- **Scope settings** → définit sur quels domaines/URLs Burp doit travailler (évite de capturer du trafic inutile)
- **Issue definitions** → liste des vulnérabilités cherchées par le scanner Pro, accessible en lecture en Community — utile pour les rapports

#### 🤖 robots.txt
- Fichier public censé indiquer aux moteurs de recherche les pages à ne pas indexer
- **Problème** : il est lisible par tout le monde — si une page sensible y est référencée, elle est exposée
- Concept : **security through obscurity** — cacher n'est pas protéger

#### 🔌 Infra & Setup
- VPN TryHackMe (OpenVPN) requis pour accéder aux IPs internes `10.10.x.x`
- Labs PortSwigger accessibles directement via compte web (pas de VPN nécessaire)
- Commande VPN : `sudo openvpn ~/chemin/vers/fichier.ovpn`

---

## 📅 2026-03-28 — Week 6 Day 2

**⏱️ Durée :** ~45min
**🎯 Focus :** Burp Suite: Repeater
**📍 Plateforme :** TryHackMe

### 🛠️ Ce que j'ai fait
- Complété le module Burp Suite: Repeater sur TryHackMe

### 🧠 Ce que j'ai appris

#### 🔁 Repeater — Concept
- Outil pour renvoyer manuellement une requête HTTP autant de fois que voulu, en la modifiant à chaque envoi
- Indispensable pour tester des paramètres, provoquer des erreurs volontaires, ou fuzzer manuellement

#### 🔄 Workflow typique
1. Capturer une requête dans **Proxy > HTTP History**
2. Clic droit → **Send to Repeater**
3. Modifier la requête (paramètres, headers, body, valeurs d'ID...)
4. Cliquer **Send** et analyser la réponse

#### 🎯 Cas d'usage courants
- Tester des IDs différents dans une URL pour détecter un IDOR
- Provoquer des erreurs volontaires pour extraire de l'info sur la stack technique
- Vérifier le comportement du serveur selon différents inputs

---

## 📅 2026-03-29 — Week 6 Day 3

**⏱️ Durée :** ~1h
**🎯 Focus :** PortSwigger — 3 labs Access Control & Information Disclosure
**📍 Plateforme :** PortSwigger Web Security Academy

### 🛠️ Ce que j'ai fait
- Complété 3 labs PortSwigger sans VPN (accès direct via compte)
- Lab 1 : Unprotected admin functionality
- Lab 2 : Insecure Direct Object References (IDOR)
- Lab 3 : Information disclosure in error messages

### 🧠 Ce que j'ai appris

#### 🔓 Lab 1 — Unprotected Admin Functionality

**Concept : Security through obscurity**

Le panel admin était référencé dans `robots.txt` — fichier public lisible par tout le monde.
Naviguer vers `/robots.txt` exposait directement le chemin du panel admin.

- **Réflexe :** toujours vérifier `robots.txt` en début de reconnaissance — c'est souvent une mine d'info sur la structure de l'app

#### 🔑 Lab 2 — IDOR (Insecure Direct Object Reference)

**Concept : Accès non autorisé à des ressources via manipulation d'identifiant**

- Le transcript du chat était téléchargé via une URL prévisible (ex: `2.txt`)
- En changeant l'identifiant (`2.txt` → `1.txt`), on accède au fichier d'un autre utilisateur
- La faille est **côté serveur** : le serveur ne vérifie pas si l'utilisateur a le droit d'accéder à la ressource demandée

**Méthode utilisée :**
1. Cliquer "View transcript" → pas d'URL visible directement
2. Ouvrir **DevTools (F12) > Network** et relancer l'action
3. Repérer la requête de téléchargement et l'URL du fichier
4. Modifier l'identifiant dans l'URL → accès au fichier de Carlos

- **Réflexe :** tout identifiant prévisible dans une URL ou une requête → tester l'IDOR

#### 🔍 Lab 3 — Information Disclosure in Error Messages

**Concept : Les erreurs mal gérées exposent des infos sur la stack technique**

- En provoquant une erreur volontaire (ID produit invalide), le serveur retourne sa version Apache dans le message d'erreur
- Ces infos permettent de cibler des CVE connues sur cette version

**Méthode utilisée :**
1. **Proxy > HTTP History** → repérer `GET /product?productId=1`
2. Clic droit → **Send to Repeater**
3. Modifier `productId=1` par une valeur invalide (ex: `"abc"`)
4. Lire la réponse → version Apache exposée dans l'erreur

- **Réflexe :** provoquer des erreurs = source d'info sur la stack — ne jamais laisser des error messages verbeux en production

#### 📋 Concepts clés consolidés

| Concept | Résumé |
|---|---|
| **Security through obscurity** | Cacher une ressource ne la protège pas — `robots.txt` est public |
| **IDOR** | Faille serveur : accès à la ressource d'un autre user en changeant un identifiant |
| **Information disclosure** | Erreurs verbeux exposent la version du serveur → vecteur de ciblage CVE |
| **GET vs POST** | GET → paramètres dans l'URL / POST → paramètres dans le **body** |

### 💡 Réflexes à garder
- Toujours checker `robots.txt` en recon
- Tout identifiant prévisible dans une URL → tenter l'IDOR
- Provoquer des erreurs volontairement → extraire de l'info sur la stack
- DevTools > Network si une requête n'est pas visible directement dans le navigateur
- Burp Repeater = outil principal pour tester manuellement une requête

### ❌ Erreurs / points à consolider
- IDOR = faille **serveur** (pas client) — le client exploite, mais la vulnérabilité est dans la vérification côté serveur
- POST → paramètres dans le **body** (pas "dans la requête HTTP" de façon vague)

### ⚠️ Reporté en S7
- Challenge sitemap Burp (VPN stable requis) — endpoint inhabituel sur `http://10.10.x.x/`
- OWASP Top 10 (~2h) — #1 : Broken Access Control

---

# 📌 SEMAINE 7 — OSINT & Consolidation (03/30 – 04/08)

---

## 📅 2026-03-31 — Week 7 Day 1

**⏱️ Durée :** ~1h30
**🎯 Focus :** Quiz récapitulatif S1→S6 + identification des lacunes
**📍 Plateforme :** Auto-évaluation

### 🛠️ Ce que j'ai fait
- Passé un quiz couvrant les 6 premières semaines (45 questions)
- Score obtenu : 31/45 (69%)
- Identifié trois axes faibles : S3 réseau, S5 Python, S6 Burp

### 🧠 Ce que j'ai appris

#### 📊 Bilan par semaine
- **S1-S2 (Linux, Bash, Bandit)** — solide, pas de lacune majeure
- **S3 (Networking)** — faiblesses sur les ports courants, les filtres Wireshark, et le comportement de traceroute
- **S4 (Nmap, PrivEsc)** — correct, quelques hésitations sur la distinction `filtered` vs `closed`
- **S5 (Python offensif)** — lacunes sur threading/Semaphore, hashlib workflow, banner grabbing
- **S6 (Burp Suite)** — outils Burp pas assez précis, IDOR côté serveur mal formulé

#### 🎯 Plan de consolidation
- Drill des ports jusqu'à 10/10 (FTP/SSH/Telnet/SMTP/DNS/HTTP/HTTPS/SMB/RDP/MySQL)
- Revoir Wireshark filtres, traceroute `* * *`, Nmap `filtered` vs `closed`
- Réécrire le port scanner Python de zéro
- Refaire les labs PortSwigger sans notes

---

## 📅 2026-04-02 — Week 7 Day 2

**⏱️ Durée :** ~2h
**🎯 Focus :** Consolidation réseau — ports, Wireshark, traceroute, Nmap
**📍 Plateforme :** Révision active + Wireshark

### 🛠️ Ce que j'ai fait
- Drill mémorisation des ports courants jusqu'à score parfait 10/10
- Pratiqué les filtres Wireshark en live sur du trafic capturé
- Revu le comportement de traceroute et la distinction Nmap `filtered` vs `closed`

### 🧠 Ce que j'ai appris

#### 🔌 Ports mémorisés (drill 10/10)

| Port | Service |
|------|---------|
| 21   | FTP     |
| 22   | SSH     |
| 23   | Telnet  |
| 25   | SMTP    |
| 53   | DNS     |
| 80   | HTTP    |
| 443  | HTTPS   |
| 445  | SMB     |
| 3389 | RDP     |
| 3306 | MySQL   |

#### 🦈 Wireshark — filtres pratiqués
- `tcp.dstport == 80` — trafic HTTP sortant
- `ip.src == 10.0.0.1` — paquets depuis une IP source spécifique
- `dns` — tout le trafic DNS
- `tcp.flags.syn == 1` — paquets SYN (début de connexion TCP)

#### 🗺️ Traceroute — `* * *`
- `* * *` signifie que le routeur à ce hop ne répond pas aux paquets ICMP TTL Exceeded
- Ce n'est **pas** une coupure réseau — le routeur est simplement muet aux requêtes ICMP
- Le paquet continue son chemin vers le hop suivant

#### 🔍 Nmap — `filtered` vs `closed`
- `filtered` → silence complet, aucune réponse — un firewall bloque le paquet
- `closed` → le port répond avec un RST — le port existe mais aucun service n'écoute

---

## 📅 2026-04-04 — Week 7 Day 3

**⏱️ Durée :** ~2h30
**🎯 Focus :** Consolidation Python — port scanner from scratch + hashlib
**📍 Plateforme :** Python

### 🛠️ Ce que j'ai fait
- Réécrit le port scanner de zéro sans regarder le code précédent
- Revu le workflow complet hashlib (encode → hash → hexdigest)

### 🧠 Ce que j'ai appris

#### 🔧 Port scanner — reconstruction complète
- `socket` — créer un nouveau socket par connexion, `connect_ex()` retourne 0 si ouvert
- `threading` + `Semaphore(100)` — paralléliser les scans tout en limitant les threads actifs
- `argparse` — `--host`, `--start`, `--end` pour un script paramétrable depuis le terminal
- Banner grabbing — après connexion, `sock.recv(1024).decode(errors='ignore')` pour lire la bannière du service

#### 🔐 Hashlib — workflow complet
```python
import hashlib
message = "test"
hash_obj = hashlib.md5(message.encode())
result = hash_obj.hexdigest()
```
- `.encode()` → convertir la string en bytes (obligatoire avant le hashing)
- `hashlib.md5()` / `hashlib.sha256()` → créer l'objet hash
- `.hexdigest()` → obtenir le hash en string hexadécimale lisible

---

## 📅 2026-04-05 — Week 7 Day 4

**⏱️ Durée :** ~1h30
**🎯 Focus :** Consolidation Burp Suite + labs PortSwigger refaits sans notes
**📍 Plateforme :** PortSwigger Web Security Academy

### 🛠️ Ce que j'ai fait
- Revu les outils Burp Suite : Proxy, Repeater, Intruder, Decoder, Site Map
- Refait 2 labs PortSwigger sans aucune note :
  - Unprotected Admin Functionality (robots.txt)
  - IDOR (transcripts)

### 🧠 Ce que j'ai appris

#### 🔧 Burp Suite — outils redéfinis

| Outil      | Rôle |
|------------|------|
| **Proxy**    | Intercepte le trafic HTTP entre le navigateur et le serveur |
| **Repeater** | Renvoie et modifie manuellement une requête capturée |
| **Intruder** | Automatise l'envoi de requêtes avec des payloads variables (fuzzing, brute force) |
| **Decoder**  | Encode/décode des données (Base64, URL encoding, HTML entities, hex) |
| **Site Map** | Carte en arbre de toutes les pages et endpoints découverts pendant la session |

#### 🔓 Lab repassé — Unprotected Admin Functionality
- `/robots.txt` → chemin du panel admin exposé en clair
- Navigation directe → accès complet sans authentification
- Réflexe : toujours checker `robots.txt` en début de reconnaissance

#### 🔑 Lab repassé — IDOR (transcripts)
- Téléchargement via URL prévisible (`2.txt`)
- Changement d'identifiant (`2.txt` → `1.txt`) → accès au fichier d'un autre utilisateur
- La faille est **côté serveur** : aucune vérification d'autorisation sur la ressource demandée
- DevTools > Network pour repérer la requête de téléchargement quand l'URL n'est pas visible

---

## 📅 2026-04-07 — Week 7 Day 5

**⏱️ Durée :** ~3h
**🎯 Focus :** Projet OSINT — osint-domain-recon
**📍 Plateforme :** Python + GitHub

### 🛠️ Ce que j'ai fait
- Construit et livré le projet `osint-domain-recon` de A à Z
- Push sur GitHub : `qyrnsec/osint-domain-recon`

### 🧠 Ce que j'ai appris

#### 🔍 WHOIS
- Récupération des informations d'enregistrement d'un domaine : registrar, dates de création/expiration, nameservers
- Données publiques sauf si protection WHOIS activée (privacy proxy)

#### 🌐 Subdomains via crt.sh
- `crt.sh` est un moteur de recherche de Certificate Transparency logs
- Requête sur `%.domaine.com` → liste tous les certificats émis pour les sous-domaines
- Source passive (pas de scan actif) — parfait pour la reconnaissance OSINT

#### 📡 DNS Records
- Résolution des enregistrements A (IPv4), MX (mail), TXT (SPF/DKIM/vérification), NS (nameservers)
- Chaque type d'enregistrement révèle un aspect différent de l'infrastructure

#### 📄 Rapport Markdown auto-généré
- Le script produit un rapport `.md` structuré avec toutes les données collectées
- Sections : WHOIS, Subdomains, DNS Records
- Format directement lisible sur GitHub

#### 📦 Structure du projet
- `README.md` — description, installation, usage
- `requirements.txt` — dépendances Python
- Script principal avec fonctions modulaires (WHOIS, crt.sh, DNS, rapport)

---

# 📌 SEMAINE 8 — Web Vulns Intro (04/06 – 04/12)

---

## 📅 2026-04-11 — Week 8 Day 1

**⏱️ Durée :** ~2h30
**🎯 Focus :** Access Control — PortSwigger Web Security Academy
**📍 Plateforme :** PortSwigger

### 🛠️ Ce que j'ai fait
- Setup propre de l'environnement Burp + Chrome pour la session
- Complété 4 labs PortSwigger Access Control :
  - **Unprotected admin functionality** — panel révélé via `/robots.txt` → `/administrator-panel`
  - **Unprotected admin functionality with unpredictable URL** — URL cachée repérée dans le code source HTML
  - **User role controlled by request parameter** — cookie `admin=false` modifié en `admin=true` via DevTools
  - **User role can be modified in user profile** — ajout de `"roleid": 2` dans le body JSON via Burp Repeater

### 🧠 Ce que j'ai appris

#### 🔍 Réflexes de reconnaissance web
- `robots.txt` = premier fichier à checker, expose souvent des chemins admins cachés
- Code source HTML/JS = mine d'or — URLs, credentials, logique d'auth traînent parfois en clair
- Ordre type sur cible web : `robots.txt` → code source → cookies → requêtes réseau

#### 🔑 Access Control côté client vs serveur
- Cookies côté client (ex: `admin=false`) = jamais fiables, modifiables via DevTools
- JSON body tampering — modifier les paramètres d'une requête API (ex: `roleid`) pour escalader les privilèges
- La validation d'autorisation doit **toujours** être faite côté serveur, jamais uniquement côté client

#### 🧰 Setup Burp + Chrome (à retenir)
- **FoxyProxy** — toggle du proxy Burp en un clic, sans casser le navigateur global
- **Certificat Burp CA** — importé via Windows Certificate Store (Autorités racines de confiance)
- **Erreur SSL persistante sur Chrome** — taper `thisisunsafe` directement sur la page d'erreur

### ⚠️ Difficultés rencontrées
- Configuration Burp + Chrome (certificat SSL, proxy) — résolue avec FoxyProxy
- Labs PortSwigger qui expirent entre deux sessions

---

## 📅 2026-04-12 — Week 8 Day 2

**⏱️ Durée :** ~2h
**🎯 Focus :** Web Client — Root Me
**📍 Plateforme :** Root Me

### 🛠️ Ce que j'ai fait
- Complété 7 challenges Root Me (catégorie Web Client) :
  - **HTML — Boutons désactivés** — modification du DOM pour réactiver des boutons `disabled`
  - **Javascript — Source** — mot de passe trouvé en clair dans le code source JS
  - **Javascript — Authentification** — logique d'auth côté client contournée via la console
  - **Javascript — Authentification 2** — variante plus complexe, même principe
  - **Javascript — Obfuscation 1** — code déobfusqué via outil en ligne
  - **Javascript — Obfuscation 2** — idem, encodage différent
  - **Javascript — Native code** — code natif analysé, mécanisme décodé manuellement

### 🧠 Ce que j'ai appris

#### 🕹️ Client-side = jamais une barrière de sécurité
- Tout paramètre envoyé par le client peut être falsifié (cookies, body, headers, attributs HTML)
- Un bouton `disabled` n'empêche rien — l'attribut se retire en deux clics dans DevTools
- Une auth implémentée en JS côté client = contournable via la console

#### 🧪 Obfuscation JS ≠ sécurité
- L'obfuscation ralentit l'analyse, elle ne protège rien
- Outils en ligne + lecture patiente suffisent à retrouver la logique d'origine
- Native code plus coriace : nécessite une analyse manuelle du mécanisme, mais reste décodable