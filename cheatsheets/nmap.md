# NMAP Reference

---

## Table of Contents

1. [🔌 Ports](#-ports)
2. [🔍 Types de scans](#-types-de-scans)
3. [⚙️ Flags principaux](#️-flags-principaux)
4. [📜 NSE — Nmap Scripting Engine](#-nse--nmap-scripting-engine)
5. [🛡️ Évasion de firewall](#️-évasion-de-firewall)
6. [📡 Ping Sweep](#-ping-sweep)

---

## 🔌 Ports

- Chaque machine possède **65535 ports**
- Ports **0–1023** = well-known (protocoles réservés)

| Port | Protocole | Description                 |
|------|-----------|-----------------------------|
| 80   | HTTP      | Web non chiffré             |
| 443  | HTTPS     | Web chiffré (TLS)           |
| 139  | NetBIOS   | NetBIOS Session Service     |
| 445  | SMB       | Server Message Block        |

---

## 🔍 Types de scans

### Scans principaux

| Flag  | Nom             | Description                                                           |
|-------|-----------------|-----------------------------------------------------------------------|
| `-sT` | TCP Connect     | Handshake complet — plus bruyant, ne nécessite pas root               |
| `-sS` | SYN Half-open   | Le plus populaire — ne complète jamais le handshake, nécessite root   |
| `-sU` | UDP             | Plus lent — port marqué `open\|filtered` si aucune réponse            |

> Si un port UDP est fermé, la cible renvoie un message "port unreachable" via ICMP.

### Scans avancés (évasion firewall)

| Flag  | Nom   | Flags TCP envoyés | Comportement attendu (port fermé) |
|-------|-------|-------------------|-----------------------------------|
| `-sN` | NULL  | Aucun             | La cible renvoie RST              |
| `-sF` | FIN   | FIN               | La cible renvoie RST              |
| `-sX` | Xmas  | PSH + URG + FIN   | La cible renvoie RST              |

- Ces trois types servent principalement à l'**évasion de firewall**
- RFC 9293 définit le comportement TCP attendu — un port fermé renvoie un flag RST
- **Windows** peut répondre RST sur tous les ports pour ces scans — résultats non fiables

---

## ⚙️ Flags principaux

```bash
nmap -h                          # menu d'aide
nmap -sS host                    # SYN scan (le plus populaire)
nmap -sU host                    # UDP scan
nmap -o host                     # détection d'OS
nmap -sV host                    # détection de version des services
nmap -v host                     # verbose
nmap -vv host                    # très verbose (ultra recommandé)
nmap -oA output host             # output dans les 3 formats majeurs
nmap -oN output.txt host         # output normal vers fichier
nmap -oG output.gnmap host       # output au format grep
nmap -a host                     # mode agressif
nmap -T4 host                    # timing template (0–5, plus élevé = plus rapide = plus bruyant)
nmap -p 80,443 host              # ports spécifiques
nmap -p 1-1000 host              # plage de ports
nmap -p- host                    # tous les 65535 ports
nmap --script vuln host          # scripts de la catégorie vuln
nmap --top-ports 20 host         # les 20 ports les plus courants (utilisé pour UDP)
```

---

## 📜 NSE — Nmap Scripting Engine

Permet d'exécuter des scripts automatisés contre les services découverts.

```bash
nmap --script <nom_du_script> host      # exécuter un script spécifique
nmap --script=vuln host                 # tous les scripts vuln
nmap --script ftp-anon host             # exemple : FTP anonyme
```

> `ftp-anon.nse` accepte l'argument optionnel `maxlist`.

### Catégories de scripts

| Catégorie   | Comportement                                                           |
|-------------|------------------------------------------------------------------------|
| safe        | Aucun impact sur la cible                                              |
| intrusive   | Peut affecter la cible                                                 |
| vuln        | Scan de vulnérabilités connues                                         |
| exploit     | Tentative d'exploitation d'une vulnérabilité                           |
| auth        | Bypass d'authentification (ex: login FTP anonyme)                      |
| brute       | Brute-force de credentials sur les services                            |
| discovery   | Interroge les services pour obtenir des infos réseau (ex: SNMP)        |

---

## 🛡️ Évasion de firewall

```bash
nmap -Pn host                        # skip le ping ICMP avant le scan
nmap -f host                         # fragmente les paquets en morceaux plus petits
nmap --mtu 16 host                   # MTU personnalisé (doit être multiple de 8)
nmap --scan-delay 200ms host         # délai entre paquets (évite les triggers temporels)
nmap --badsum host                   # checksum invalide pour détecter la présence d'un firewall
nmap --data-length 25 host           # ajoute des données aléatoires aux paquets
```

| Flag                 | Effet                                                          |
|----------------------|----------------------------------------------------------------|
| `-Pn`                | Ne ping pas l'hôte avant de scanner — utile quand ICMP est bloqué |
| `-f`                 | Fragmente les paquets — moins détectable par firewall/IDS      |
| `--mtu <n>`          | MTU custom (multiple de 8) — contrôle fin de la fragmentation  |
| `--scan-delay <n>ms` | Délai entre paquets — réseau instable ou triggers temporels    |
| `--badsum`           | Checksum invalide — détecte si un firewall répond sans vérifier |
| `--data-length <n>`  | Données aléatoires en fin de paquet                            |

> Protocole souvent bloqué nécessitant `-Pn` : **ICMP**

---

## 📡 Ping Sweep

Scanner tous les hôtes actifs d'un réseau sans scanner les ports.

```bash
nmap -sn 172.16.0.0/16     # ping sweep sur 172.16.x.x (masque 255.255.0.0)
nmap -sn 192.168.1.0/24    # ping sweep sur un /24
```

`-sn` désactive le port scan — utile pour cartographier rapidement les hôtes actifs.
