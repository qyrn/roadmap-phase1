# Journal de progression – Pentest Journey

---

## 2026-02-03 — Jour 1

**Durée :** 40 min
**Humeur :** 5/5
**Focus :** Fondamentaux du pentest

### Ce que j'ai fait
- Visionnage de vidéos sur les fondamentaux du test d'intrusion

### Ce que j'ai appris
- Concepts de base du penetration testing
- Principes fondamentaux de la sécurité

### Blocages
- Aucun

### Demain
- Mettre en place l'environnement de travail

---

## 2026-02-04 — Jour 2

**Durée :** 120 min
**Humeur :** 4/5
**Focus :** Installation de l'environnement

### Ce que j'ai fait
- Installation d'une distribution Linux fraîche
- Optimisation de l'environnement de travail

### Ce que j'ai appris
- Mise en place d'une base solide pour les exercices de pentest
- Bonnes pratiques système sous Linux

### Blocages
- Aucun

### Demain
- Passer aux tutoriels de sécurité web

---

## 2026-02-05 — Jour 3

**Durée :** 60 min
**Humeur :** 4/5
**Focus :** Sécurité des applications web

### Ce que j'ai fait
- Installation propre d'Ubuntu
- Tutoriel sur les techniques d'exploitation React

### Ce que j'ai appris
- Configuration système pour le pentest
- Bases de l'exploitation d'applications web (React)

### Blocages
- Aucun

---

## 2026-02-18 — Jour 1 (Reprise)

**Durée :** 60 min
**Humeur :** 5/5
**Focus :** Fondamentaux Linux

### Ce que j'ai fait
- Apprentissage des commandes de base Linux
- Complétion de Linux Fundamentals 1 sur TryHackMe

### Ce que j'ai appris
- Navigation dans le système de fichiers, recherche récursive et redirection de sorties

### Blocages
- Aucun

### Demain
- Approfondir les techniques d'exploitation web

---

## 2026-02-19 — Jour 2

**Durée :** 30 min
**Humeur :** 5/5
**Focus :** Linux Fundamentals Part 2 (TryHackMe)

### Ce que j'ai fait
- Complétion des tâches 1 à 5 de Linux Fundamentals Part 2
- Pratique des commandes de gestion de fichiers sur la machine THM
- Apprentissage de SSH, opérations sur fichiers et bases des permissions Linux

### Ce que j'ai appris
- Connexion à une machine distante via SSH (accès réseau)
- Gestion des fichiers et répertoires : `touch`, `mkdir`, `cp`, `mv`, `rm`
- Différence entre fichiers normaux et répertoires dans `ls -l`
- Affichage des fichiers cachés avec `ls -a`
- Identification du type de fichier avec `file`
- Gestion du terminal avec `clear`
- Structure des permissions Linux (r, w, x)
- Sémantique des permissions sur les répertoires (read = lister, execute = traverser)
- Système de permissions numériques (ex. : 777, 750)
- Utilisation de base de `su` pour changer d'utilisateur

### Blocages
- Légère confusion sur la sémantique des permissions sur répertoires (r vs x)

---

## 2026-02-22/23 — Jours 3 et 4

**Durée :** ~1h
**Humeur :** 5/5
**Focus :** Linux Fundamentals Part 2 & Part 3 (complétés)

### Ce que j'ai fait
- Complétion de Linux Fundamentals Part 2 et Part 3 sur TryHackMe
- Pratique du transfert de fichiers, gestion des processus, services et journaux
- Révision de la structure du système de fichiers Linux

### Ce que j'ai appris

#### Structure du système de fichiers
- `/etc` → fichiers de configuration système
- `/var` → données variables (logs, cache, spool)
- `/home` → répertoires personnels des utilisateurs
- `/root` → répertoire personnel de root
- `/tmp` → stockage temporaire

#### Édition et transfert de fichiers
- Création et édition de fichiers avec `nano`
- Téléchargement de fichiers avec `wget`
- Transfert de fichiers entre machines avec `scp`

#### Gestion des processus
- Affichage des processus avec `ps` et `ps aux`
- Surveillance en temps réel avec `top`
- Gestion des processus avec `kill` (SIGTERM, SIGKILL, SIGSTOP)
- Suspension avec `CTRL+Z`, reprise avec `fg` / `bg`

#### Services et contrôle système
- Gestion des services avec `systemctl` (start, stop, enable, disable, status)

#### Automatisation des tâches
- Compréhension de la structure et du format de planification des cron jobs (`* * * * *`)

#### Gestion des paquets
- Fonctionnement d'`apt` pour l'installation et la mise à jour depuis les dépôts

#### Bases des journaux système
- Lecture des logs d'accès Apache dans `/var/log/apache2/access.log`
- Identification des éléments clés :
  - IP client
  - Méthode HTTP (GET / POST)
  - Ressource demandée
  - Code de statut HTTP

### Blocages
- Besoin d'approfondir l'analyse de journaux
- Légère confusion sur la sémantique des requêtes HTTP

---

## 2026-02-24 — Jour 5 — FIN DE PREMIÈRE SEMAINE

**Durée :** ~2–3h
**Humeur :** 4/5
**Focus :** OverTheWire – Bandit (Level 0 → 15)

### Ce que j'ai fait
- Complétion des niveaux Bandit 0 à 15
- Pratique de l'authentification SSH et utilisation de clés privées
- Application de techniques de manipulation de fichiers, recherche et filtrage Linux
- Utilisation des outils réseau (`nc`)
- Travail avec les encodages et formats de compression

### Compétences renforcées
- Gestion des noms de fichiers problématiques (tirets, espaces, fichiers cachés)
- Recherche efficace avec `find`
- Filtrage de données avec `grep`, `sort`, `uniq`
- Distinction stdout / stderr (`2>/dev/null`)
- Décodage Base64
- Décodage ROT13 avec `tr`
- Reconstruction depuis un hexdump (`xxd -r`)
- Identification du type de fichier avec `file`
- Extraction d'archives compressées (`gzip`, `bzip2`, `tar`)
- Utilisation de clés SSH privées (`chmod 400`, `ssh -i`)
- Interaction TCP basique avec `nc`

### Points faibles identifiés
- Tendance à recourir à Google trop tôt
- Réflexe `man` à développer
- Légère hésitation avec les outils de traitement de texte

### Plan d'action
- Refaire les niveaux 5 → 12 sans aide extérieure
- Utiliser `man` avant Google
- Se concentrer sur la maîtrise des commandes de traitement de texte
