# Network Reference

---

## Table of Contents

1. [🌐 OSI Model](#-osi-model)
2. [🔗 TCP/IP Model](#-tcpip-model)
3. [⚡ TCP vs UDP](#-tcp-vs-udp)
4. [🤝 Three-Way Handshake](#-three-way-handshake)
5. [🔌 Common Ports](#-common-ports)
6. [🗂️ DNS](#-dns)
7. [🛠️ Network Tools](#-network-tools)
8. [🦈 Wireshark](#-wireshark)

---

## 🌐 OSI Model

OSI = Open Systems Interconnection — 7 couches décrivant comment les données traversent un réseau.

Mnémotechnique (FR) : **Alain part servir trois nachos à des péruviens** (Application → Physical)

| Layer | Name         | Role                                                              |
|-------|--------------|-------------------------------------------------------------------|
| 7     | Application  | Interface entre les apps et le réseau (navigateur, mail, API)     |
| 6     | Presentation | Traduction du format, encryption/decryption, compression          |
| 5     | Session      | Création et gestion des sessions, connexions simultanées          |
| 4     | Transport    | Choix du protocole (TCP/UDP), découpe des données en segments     |
| 3     | Network      | Routage des paquets, adressage IP (logical addressing)            |
| 2     | Data Link    | Communication LAN, adressage MAC (physical addressing), NIC       |
| 1     | Physical     | Transmission physique — bits convertis en signaux électriques / optiques / radio |

> OSI est principalement un modèle pédagogique.

---

## 🔗 TCP/IP Model

Le vrai standard utilisé sur Internet — 4 couches.

| TCP/IP Layer       | Couches OSI équivalentes |
|--------------------|--------------------------|
| Application        | 5, 6, 7                  |
| Transport          | 4                        |
| Internet           | 3                        |
| Network Interface  | 1, 2                     |

Historique :
- Avant les années 1980 : chaque fabricant utilisait son propre système réseau incompatible
- 1982 : le DoD américain introduit TCP/IP pour standardiser les communications

---

## ⚡ TCP vs UDP

| Feature        | TCP                              | UDP                            |
|----------------|----------------------------------|--------------------------------|
| Fiabilité      | Livraison garantie               | Aucune garantie                |
| Vérification   | Vérifie tous les paquets         | Pas de vérification            |
| Retransmission | Oui, en cas de perte             | Non                            |
| Vitesse        | Plus lent                        | Plus rapide                    |
| Unité de données | Segment                        | Datagram                       |
| Cas d'usage    | Web, SSH, FTP, email             | Streaming, VoIP, DNS           |

---

## 🤝 Three-Way Handshake

Obligatoire avant toute communication TCP.

```
Client → Server    SYN         Demande de connexion
Server → Client    SYN + ACK   Le serveur accepte
Client → Server    ACK         Connexion confirmée
```

TCP est fiable car il :
- Vérifie que les paquets arrivent
- Retransmet les paquets perdus
- Contrôle la vitesse de transmission

---

## 🔌 Common Ports

| Port | Protocol | Description                   |
|------|----------|-------------------------------|
| 21   | FTP      | File Transfer Protocol        |
| 22   | SSH      | Secure Shell                  |
| 43   | DNS      | Domain Name System            |
| 80   | HTTP     | Web (non chiffré)             |
| 443  | HTTPS    | Web (chiffré / TLS)           |
| 3389 | RDP      | Remote Desktop Protocol       |

---

## 🗂️ DNS

DNS = Domain Name System — traduit les noms de domaine en adresses IP.

```
www.google.com → 142.250.x.x
```

### Ordre de résolution

| Étape | Source                    | Description                                      |
|-------|---------------------------|--------------------------------------------------|
| 1     | Hosts file                | Mapping manuel local (`/etc/hosts`)              |
| 2     | DNS cache                 | Résultats stockés précédemment                   |
| 3     | Recursive DNS server      | Serveur ISP ou public (ex: 8.8.8.8)             |
| 4     | Hiérarchie DNS            | Si le recursive server ne sait pas               |

### Hiérarchie DNS

```
Root Name Server
↓
TLD Server (.com / .org / .net)
↓
Authoritative Name Server → retourne l'IP réelle
```

### TTL (Time To Live)

Durée pendant laquelle un enregistrement DNS peut rester en cache avant d'être re-demandé.

Exemple : `TTL = 157` → après 157 secondes, une nouvelle requête DNS est nécessaire.

---

## 🛠️ Network Tools

### `ping`

Envoie des requêtes ICMP echo pour tester la joignabilité d'un hôte.

```bash
ping hostname
ping -4 hostname        # forcer IPv4
ping -i 0.5 hostname    # intervalle entre les paquets (secondes)
ping -v hostname        # output verbeux
```

| Flag | Description                     |
|------|---------------------------------|
| `-4` | Force les requêtes en IPv4      |
| `-i` | Intervalle entre chaque ping    |
| `-v` | Output verbeux                  |

---

### `traceroute`

Cartographie le chemin emprunté par les paquets jusqu'à destination en enregistrant chaque saut.

```bash
traceroute hostname
traceroute -i eth0 hostname    # spécifier l'interface réseau
traceroute -T hostname         # utiliser TCP SYN au lieu d'UDP
```

Utilise la couche Internet (IP) par défaut.

| Flag | Description                        |
|------|------------------------------------|
| `-i` | Spécifier l'interface réseau       |
| `-T` | Utiliser des paquets TCP SYN       |

---

### `whois`

Interroge les informations d'enregistrement d'un domaine ou d'une IP.

```bash
whois example.com
whois 8.8.8.8
```

> Ancêtre de la résolution DNS — utilisé avant l'ère des noms de domaine.

---

### `dig`

Interroge manuellement les serveurs DNS.

```bash
dig example.com                  # lookup DNS standard
dig example.com @8.8.8.8         # interroger un serveur DNS spécifique
dig -x 8.8.8.8                   # reverse DNS lookup
```

| Section | Contenu                                     |
|---------|---------------------------------------------|
| ANSWER  | Adresse IP résolue                          |
| TTL     | Durée de cache en secondes avant refresh    |

---

## 🦈 Wireshark

Analyseur de paquets open source, cross-platform.

Fonctionnalités :
- Capture le trafic réseau en direct
- Inspecte les paquets individuellement
- Filtre par protocole, IP, port
- Analyse TCP, DNS, HTTP et autres protocoles

### Captures effectuées

**TCP Three-Way Handshake**
Séquence SYN → SYN+ACK → ACK observée — confirme l'établissement de la connexion TCP.

**Trafic DNS**
Généré avec `dig example.com` :
- Standard query (client → serveur DNS)
- Standard query response (serveur DNS → client)

**Trafic HTTP**
Généré avec `curl http://example.com` :
- Requête `GET / HTTP/1.1`
- Réponse `200 OK`
