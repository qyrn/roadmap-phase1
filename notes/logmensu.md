# 📅 Monthly Review – Pentest Journey

---

## 🗓️ Mois de février–mars 2026 (Semaines 1–4)

> 📍 Période : 18 février → 15 mars 2026

### 📊 Vue d'ensemble

| Métrique                | Valeur   |
|-------------------------|----------|
| 📆 Semaines complétées | 4 / 4   |
| ⏱️ Temps total         | ~28h    |
| 😊 Humeur moyenne      | 4.2 / 5 |
| 📝 Write-ups publiés   | 2       |
| 🚀 Projets complétés   | 3       |

---

### 🗓️ Résumé par semaine

#### 📅 Semaine 1 (18–24 fév) — 🐧 Linux Fundamentals
- TryHackMe Linux Fundamentals Parts 1, 2, 3
- OverTheWire Bandit niveaux 0 → 15
- 🧠 Compétences : navigation filesystem, SSH, permissions, processus, cron, apt, logs Apache

#### 📅 Semaine 2 (26 fév–1 mar) — 📜 Scripting & Exploitation
- TryHackMe Bash Scripting + Linux Shells
- OverTheWire Bandit niveaux 15 → 25
- Root-Me : 4 challenges App Script (PATH Hijacking, Path Traversal, LaTeX Injection, PowerShell Command Injection)
- 2 scripts Python : service checker, SSH log parser
- 🧠 Compétences : SSL/TLS avec openssl, SUID, cron exploitation, brute force avec nc, Python scripting

#### 📅 Semaine 3 (2–8 mar) — 🌐 Networking
- TryHackMe : What Is Networking, Introductory Networking (OSI, TCP/IP, DNS, Wireshark)
- 🧠 Compétences : modèles OSI et TCP/IP, Three-Way Handshake, DNS résolution, dig, ping, traceroute, Wireshark

#### 📅 Semaine 4 (9–15 mar) — 🔍 Scanning & ⚡ PrivEsc
- TryHackMe NMAP (scan types, NSE, évasion firewall)
- TryHackMe Passive Reconnaissance + Active Reconnaissance
- TryHackMe Linux Privilege Escalation
- 🧠 Compétences : nmap, nslookup, telnet banner grabbing, netcat, PrivEsc vectors (shadow, passwd, sudo GTFOBins, LD_PRELOAD, cron hijacking, NFS)

---

### 💪 Compétences maîtrisées

1. 🐧 **Linux** — navigation, permissions, processus, services, scripting Bash
2. 🌐 **Réseau** — modèle OSI/TCP/IP, DNS, Wireshark, nmap, reconnaissance passive et active
3. ⚡ **Exploitation** — SUID, PATH Hijacking, LaTeX Injection, brute force, Linux PrivEsc (8 vecteurs)
4. 🐍 **Python scripting** — sys.argv, subprocess, parsing de logs
5. 🏴 **OverTheWire Bandit** — niveaux 0 à 25 complétés

---

### 🚀 Projets livrés

| Projet | Description |
|--------|-------------|
| 📜 `backup-script.sh` | Backup Bash avec validation et gestion d'erreurs |
| 🐍 `service_checker.py` | Vérification de statut de services via systemctl |
| 🐍 `log_parser.py` | Parsing de logs SSH avec détection de brute force par IP |

---

### 🏆 Classements

| Plateforme  | Score / Progression                      |
|-------------|------------------------------------------|
| 🏴 Root-Me    | 4 challenges App Script résolus         |
| 🎓 TryHackMe  | ~10 rooms complétées                    |
| 🌐 PortSwigger | 0 labs (démarrage prévu semaine 5)     |

---

### ✅ Ce qui a bien marché

- 🔥 Rythme soutenu : 7/7 jours en semaine 3 et 4
- 📈 Progression logique : Linux → scripting → réseau → exploitation
- 📝 Deux write-ups Bandit publiés
- ⚡ PrivEsc assimilé rapidement grâce à la pratique directe

---

### ⚠️ Ce qui doit changer

- 📖 Réflexe de consulter `man` avant Google pas encore automatique
- 📝 Notes Linux Shells perdues en semaine 2 — écrire immédiatement, sans attendre
- 📋 Approche d'énumération PrivEsc encore trop désordonnée — besoin d'une checklist systématique

---

### 🎯 Objectifs pour le mois suivant

1. 🌐 Démarrer PortSwigger Web Security Academy (au moins 10 labs)
2. 🔍 Pratiquer NMAP et reconnaissance sur des labs HackTheBox ou TryHackMe
3. 🏴 Continuer Root-Me App Script et commencer la catégorie Web
4. 📝 Publier un write-up sur Linux PrivEsc

---

### 🧠 Mindset

Premier mois solide. La base Linux est bien ancrée, le réseau commence à avoir du sens, et toucher aux premiers vecteurs d'exploitation donne un vrai aperçu de ce que c'est que le pentesting. Le volume de contenu est dense mais la progression est visible semaine après semaine. Le mois prochain doit marquer le début du web — c'est là que ça va vraiment devenir intéressant.

---

## 🗓️ Mois de mars–avril 2026 (Semaines 5–8)

> 📍 Période : 17 mars → 12 avril 2026

### 📊 Vue d'ensemble

| Métrique                | Valeur   |
|-------------------------|----------|
| 📆 Semaines complétées | 4 / 4   |
| ⏱️ Temps total         | ~25h45  |
| 😊 Humeur moyenne      | 4.05 / 5 |
| 📝 Write-ups publiés   | 1       |
| 🚀 Projets complétés   | 2       |

---

### 🗓️ Résumé par semaine

#### 📅 Semaine 5 (17–22 mars) — 🐍 Python Offensif
- TryHackMe Python Basics + Python for Pentesters
- Port scanner Python construit from scratch (socket, threading, Semaphore, argparse, banner grabbing)
- 3 scripts offensifs : directory enumeration, hash cracker, SSH brute force
- 🧠 Compétences : `requests`, `socket`, `re`, `hashlib`, `paramiko`, `scapy`, threading parallèle, parsing CLI

#### 📅 Semaine 6 (23–29 mars) — 🔧 Burp Suite & HTTP
- TryHackMe Burp Suite: The Basics + Repeater
- 3 labs PortSwigger (Access Control + Information Disclosure)
- 🧠 Compétences : proxy Burp, Site map, Repeater, IDOR (faille serveur), information disclosure, GET vs POST

#### 📅 Semaine 7 (30 mars–8 avril) — 🔍 OSINT & Consolidation
- Quiz récapitulatif S1→S6 : 31/45 (69%) — lacunes identifiées et ciblées
- Drill ports courants 10/10, filtres Wireshark pratiqués en live
- Port scanner Python réécrit from scratch, Burp Suite redéfini en profondeur
- Projet `osint-domain-recon` livré et poussé sur GitHub
- 🧠 Compétences : auto-évaluation structurée, WHOIS, crt.sh (CT logs), DNS records, rapports Markdown auto-générés

#### 📅 Semaine 8 (6–12 avril) — 🌐 Web Vulns Intro
- 4 labs PortSwigger Access Control (robots.txt, URL cachée, cookie tampering, JSON body tampering)
- 7 challenges Root Me Web Client (HTML disabled, JS Source, JS Auth, JS Obfuscation, JS Native)
- Setup Burp + Chrome finalisé (FoxyProxy, certificat CA, `thisisunsafe`)
- 🧠 Compétences : reconnaissance web, access control côté client, JSON body tampering, DOM tampering, déobfuscation JS

---

### 💪 Compétences maîtrisées

1. 🐍 **Python offensif** — socket, threading + Semaphore, argparse, hashlib, paramiko, banner grabbing
2. 🔧 **Burp Suite** — Proxy, Repeater, Intruder, Decoder, Site Map (rôles précis de chaque outil)
3. 🔍 **OSINT** — WHOIS, Certificate Transparency (crt.sh), enregistrements DNS, génération de rapports
4. 🔑 **Access Control** — exploitation côté client (cookies, body JSON, DOM, logique JS)
5. 📊 **Auto-évaluation** — quiz structurés pour identifier et corriger les lacunes

---

### 🚀 Projets livrés

| Projet | Description |
|--------|-------------|
| 🐍 Port scanner Python | Scan TCP multithread avec Semaphore, argparse et banner grabbing — réécrit from scratch en S7 |
| 🔍 `osint-domain-recon` | Reconnaissance OSINT modulaire (WHOIS, crt.sh, DNS) avec rapport Markdown auto-généré — poussé sur GitHub |

---

### 🏆 Classements

| Plateforme  | Score / Progression                      |
|-------------|------------------------------------------|
| 🏴 Root-Me    | +7 challenges Web Client résolus        |
| 🎓 TryHackMe  | +4 rooms (Python x2, Burp x2)           |
| 🌐 PortSwigger | 7 labs résolus (Access Control + Info Disclosure) |

---

### ✅ Ce qui a bien marché

- 🔁 Semaine 7 de consolidation — le quiz a permis de cibler les vraies lacunes et de les corriger rapidement
- 🚀 Premier projet GitHub livré (`osint-domain-recon`) — structure pro avec README, requirements et script modulaire
- 🧠 Réécriture from scratch du port scanner — maîtrise réelle du code au lieu d'un simple copier-coller
- 🧰 Setup Burp + Chrome enfin stabilisé (FoxyProxy, certificat CA) — plus de friction au démarrage des sessions

---

### ⚠️ Ce qui doit changer

- 📆 Rythme irrégulier — S6 (3j), S8 (2j) trop creuses, S7 rattrape mais dépend trop des blocs de consolidation
- 🔌 Dépendance aux plateformes payantes (THM) qui coupe l'élan quand l'abonnement expire
- 🧪 Burp Intruder et Decoder encore théoriques — jamais vraiment utilisés en lab
- 📝 Score quiz S7 à 69% — les bases sont là mais pas encore solides partout

---

### 🎯 Objectifs pour le mois suivant

1. 💉 Attaquer SQL Injection en profondeur (PortSwigger Web Security Academy)
2. 🔧 Pratiquer Burp Intruder sur des labs (fuzzing, brute force) — sortir de la théorie
3. 🔑 Finir le module OWASP Top 10 #1 Broken Access Control
4. 🔍 Étendre `osint-domain-recon` avec Shodan et theHarvester

---

### 🧠 Mindset

Mois de transition entre l'offensif bas niveau (Python, réseau) et le web applicatif. La S7 de consolidation a été la meilleure décision — elle a exposé les trous au lieu de les laisser s'enfouir. Le web commence à prendre forme : on passe de "je clique sur un lab" à "je comprends ce que je cherche". Le rythme doit se stabiliser — deux semaines à moins de 3 jours effectifs, c'est trop. Le mois prochain doit être centré injection et fuzzing réels.

---

## 📋 Template – Mois futurs

### 📊 Vue d'ensemble

| Métrique                | Valeur   |
|-------------------------|----------|
| 📆 Semaines complétées | [X] / 4 |
| ⏱️ Temps total         | [X]h    |
| 📝 Write-ups publiés   | [X]     |
| 🚀 Projets complétés   | [X]     |

---

### 💪 Compétences maîtrisées

1. [Compétence 1]
2. [Compétence 2]
3. [Compétence 3]

---

### 🚀 Projets livrés

| Projet | Description |
|--------|-------------|
| [Projet 1] | [Description] |
| [Projet 2] | [Description] |

---

### 🏆 Classements

| Plateforme  | Score / Progression |
|-------------|---------------------|
| 🏴 Root-Me    | [X] points         |
| 🎓 TryHackMe  | [X] rooms, [X]% rank |
| 🌐 PortSwigger | [X] labs résolus   |

---

### ✅ Ce qui a bien marché

- [Point positif]

---

### ⚠️ Ce qui doit changer

- [Axe d'amélioration]

---

### 🎯 Objectifs pour le mois suivant

1. [Objectif 1]
2. [Objectif 2]

---

### 🧠 Mindset

[Évaluation personnelle de la progression ce mois-ci]
