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

## 🗓️ Week 6 — 23 → 29 mars 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 3 / 7         |
| ⏱️ Temps total       | ~2h45         |
| 😊 Humeur moyenne    | 4 / 5         |
| 📝 Score quiz        | 4 / 5         |

---

### ✅ Accomplissements

- [x] 🔧 Complété TryHackMe – Burp Suite: The Basics
- [x] 🔁 Complété TryHackMe – Burp Suite: Repeater
- [x] 🏴 Complété 3 labs PortSwigger (Access Control + Information Disclosure)

---

### 🧠 Compétences acquises

- 🔧 Burp Suite — architecture générale : proxy d'interception, HTTP History, Forward/Drop
- 🗺️ Onglet Target — Site map, Scope settings, Issue definitions
- 🔁 Repeater — workflow de test manuel (capture → modification → renvoi → analyse)
- 🤖 `robots.txt` comme vecteur de reconnaissance — security through obscurity
- 🔑 IDOR — exploitation d'identifiants prévisibles, faille côté serveur
- 🔍 Information Disclosure — provoquer des erreurs pour exposer la stack technique
- 🌐 Distinction GET (paramètres dans l'URL) vs POST (paramètres dans le body)
- 🔌 Setup VPN TryHackMe (OpenVPN) et accès direct PortSwigger

---

### ⚠️ Faiblesses identifiées

- 🔌 VPN TryHackMe instable — bloque les challenges nécessitant des IPs internes
- 📝 Besoin de pratiquer plus de labs PortSwigger pour consolider les réflexes

---

### 📦 Livrables publiés

- [x] 📋 Cheatsheet créée : `burp.md`
- [x] 📋 Logbook mis à jour (W6D1 à W6D3)
- [ ] 🚀 Code poussé sur GitHub

---

### 🎯 Objectifs semaine suivante

1. Résoudre le challenge sitemap Burp (VPN stable requis)
2. Continuer les labs PortSwigger — OWASP Top 10 : Broken Access Control
3. Explorer Burp Intruder pour du fuzzing basique

---

## 🗓️ Week 7 — 30 mars → 8 avril 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 5 / 7         |
| ⏱️ Temps total       | ~10h30        |
| 😊 Humeur moyenne    | 4.2 / 5       |
| 📝 Score quiz        | 31 / 45       |

---

### ✅ Accomplissements

- [x] 📝 Quiz récapitulatif S1→S6 : 31/45 (69%) — lacunes identifiées et ciblées
- [x] 🔌 Drill ports courants mémorisés 10/10 (FTP/SSH/Telnet/SMTP/DNS/HTTP/HTTPS/SMB/RDP/MySQL)
- [x] 🦈 Wireshark : filtres tcp.dstport, ip.src, dns, tcp.flags.syn pratiqués en live
- [x] 🐍 Port scanner Python réécrit from scratch (socket, threading, Semaphore, argparse, banner grabbing)
- [x] 🔧 Burp Suite redéfini (Proxy/Repeater/Intruder/Decoder/Site Map) + labs PortSwigger refaits sans notes
- [x] 🔍 Projet OSINT `osint-domain-recon` livré et poussé sur GitHub

---

### 🧠 Compétences acquises

- 📊 Auto-évaluation structurée — identifier les lacunes par quiz et cibler la consolidation
- 🔌 Ports courants ancrés en mémoire (10 services clés)
- 🦈 Wireshark — filtres de capture en live (tcp.dstport, ip.src, dns, tcp.flags.syn)
- 🗺️ Traceroute `* * *` = routeur muet aux ICMP TTL Exceeded, pas une coupure réseau
- 🔍 Nmap `filtered` (firewall, silence) vs `closed` (RST reçu, pas de service)
- 🐍 Port scanner reconstruit de zéro — maîtrise socket, threading, Semaphore, argparse, banner grabbing
- 🔐 Hashlib workflow : `.encode()` → `hashlib.algo()` → `.hexdigest()`
- 🔧 Burp Suite — rôle précis de chaque outil (Proxy, Repeater, Intruder, Decoder, Site Map)
- 🔍 OSINT — WHOIS, crt.sh (Certificate Transparency), DNS records (A, MX, TXT, NS)
- 📄 Génération automatique de rapports Markdown

---

### ⚠️ Faiblesses identifiées

- 📊 Score quiz 69% — les bases sont là mais pas encore solides sur tout
- 🧵 Threading/Semaphore nécessitait une réécriture complète pour être maîtrisé
- 🔧 Outils Burp (surtout Intruder et Decoder) pas encore pratiqués en conditions réelles

---

### 📦 Livrables publiés

- [x] 🔍 Projet poussé sur GitHub : `qyrnsec/osint-domain-recon`
- [x] 📋 Logbook mis à jour (W7D1 à W7D5)
- [x] 🚀 Code poussé sur GitHub

---

### 🎯 Objectifs semaine suivante

1. Pratiquer Burp Intruder sur des labs PortSwigger (fuzzing, brute force)
2. Continuer OWASP Top 10 — Broken Access Control en profondeur
3. Étendre le projet OSINT avec des sources supplémentaires (Shodan, theHarvester)

---

## 🗓️ Week 8 — 6 → 12 avril 2026

### 📊 Stats

| Métrique              | Valeur        |
|-----------------------|---------------|
| 📅 Jours complétés   | 2 / 7         |
| ⏱️ Temps total       | ~4h30         |
| 😊 Humeur moyenne    | 4 / 5         |
| 📝 Score quiz        | — / —         |

---

### ✅ Accomplissements

- [x] 🔑 Complété 4 labs PortSwigger Access Control (robots.txt, URL unpredictable, cookie tampering, JSON body tampering)
- [x] 🕹️ Résolu 7 challenges Root Me Web Client (HTML disabled, JS Source, JS Auth 1/2, JS Obfuscation 1/2, JS Native Code)
- [x] 🧰 Setup complet Burp + Chrome finalisé (FoxyProxy, certificat CA, contournement SSL)

---

### 🧠 Compétences acquises

- 🔍 Reconnaissance web — réflexe `robots.txt` → code source → cookies → requêtes réseau
- 🔑 Access Control côté client vs serveur — modification de cookies et de body JSON pour escalader les privilèges
- 🧪 JSON body tampering — ajout/modification de paramètres comme `roleid` dans les requêtes API
- 🕹️ DOM tampering — suppression d'attributs `disabled` pour réactiver des boutons bloqués côté client
- 🔓 Bypass d'authentification JS côté client via la console DevTools
- 🧩 Déobfuscation JavaScript — outils en ligne pour les encodages standards, analyse manuelle pour le code natif
- 🧰 Setup pro Burp + Chrome — FoxyProxy pour toggle, certificat CA via Windows Certificate Store, `thisisunsafe` en dernier recours

---

### ⚠️ Faiblesses identifiées

- 📆 Seulement 2 jours effectifs sur 7 — rythme à resserrer en S9
- 🔌 Dépendance aux plateformes payantes (abonnement THM) qui bloque certaines pistes
- 📝 Pas de quiz récap sur la semaine — à réintroduire à chaque fin de cycle

---

### 📦 Livrables publiés

- [x] 📋 Logbook mis à jour (W8D1 à W8D2)
- [x] 📋 Loghebdo mis à jour (Week 8)
- [ ] 🚀 Code poussé sur GitHub

---

### 🎯 Objectifs semaine suivante

1. Reprendre les 2 labs PortSwigger Authentication laissés en plan
2. Démarrer SQL Injection et Content Discovery (THM ou PortSwigger équivalent)
3. Enchaîner sur OWASP Top 10 #1 Broken Access Control en profondeur

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
