# Référence Linux – Commandes fondamentales

---

## Table des matières

1. [Navigation et fichiers](#navigation-et-fichiers)
2. [Éditeurs de texte](#éditeurs-de-texte)
3. [Recherche](#recherche)
4. [Réseau et transfert](#réseau-et-transfert)
5. [Processus et système](#processus-et-système)
6. [Gestion des paquets](#gestion-des-paquets)
7. [Automatisation](#automatisation)
8. [Permissions Linux](#permissions-linux)

---

## Navigation et fichiers

### `echo`
Affiche du texte ou la valeur d'une variable dans le terminal.

```bash
echo Bonjour
echo "Hello world"
echo $HOME
```

---

### `whoami`
Affiche le nom de l'utilisateur actuellement connecté.

```bash
whoami
```

---

### `ls`
Liste les fichiers et répertoires du répertoire courant (ou spécifié).

```bash
ls
ls -l      # format long (permissions, propriétaire, taille, date)
ls -a      # afficher les fichiers cachés
ls -lh     # format long avec tailles lisibles
```

---

### `cat`
Affiche le contenu d'un fichier directement dans le terminal.
Adapté aux petits fichiers.

```bash
cat fichier.txt
```

Pour les gros fichiers, préférer :

```bash
less fichier.txt
```

---

### `cd`
Change le répertoire courant.

```bash
cd dossier
cd ..
cd /chemin/absolu
```

---

### `pwd`
Affiche le chemin absolu du répertoire courant.

```bash
pwd
```

---

### `mkdir`
Crée un nouveau répertoire.

```bash
mkdir nouveau_dossier
```

---

### `touch`
Crée un fichier vide ou met à jour son horodatage s'il existe déjà.

```bash
touch fichier.txt
```

---

### `cp`
Copie des fichiers ou répertoires.

```bash
cp fichier.txt sauvegarde.txt
cp -r dossier/ dossier_backup/
```

---

### `mv`
Déplace ou renomme des fichiers et répertoires.

```bash
mv fichier.txt /home/user/
mv ancien.txt nouveau.txt
```

---

### `rm`
Supprime des fichiers ou répertoires.

```bash
rm fichier.txt
rm -r dossier/
```

> ⚠️ `rm -rf` peut être destructeur en cas de mauvais usage.

---

### `file`
Détermine le type d'un fichier (texte, binaire, etc.).

```bash
file document.txt
```

---

### `clear`
Efface le terminal.

```bash
clear
```

---

## Éditeurs de texte

### `nano`
Éditeur de texte en terminal — simple et accessible.

```bash
nano fichier.txt
```

Raccourcis clavier :

| Raccourci  | Action       |
|------------|--------------|
| `CTRL + O` | Sauvegarder  |
| `CTRL + X` | Quitter      |

---

## Recherche

### `find`
Recherche des fichiers et répertoires récursivement.

```bash
find / -name "*.txt"
```

Les guillemets empêchent le shell d'expandre `*` avant que `find` le traite.

---

### `grep`
Recherche un motif dans des fichiers.

```bash
grep "admin" fichier.txt
grep -r "admin" /chemin
grep -c "admin" fichier.txt
```

| Option | Description                        |
|--------|------------------------------------|
| `-r`   | Recherche récursive                |
| `-c`   | Compter les lignes correspondantes |

---

## Réseau et transfert

### `su`
Change d'utilisateur.

```bash
su utilisateur
su -l utilisateur
```

`-l` ouvre un shell de connexion complet.

---

### `ssh`
Connexion à une machine distante via le réseau.

```bash
ssh user@hostname
ssh user@192.168.1.10
```

Nécessite une connexion réseau (LAN ou internet).

---

### `wget`
Télécharge des fichiers depuis une URL.

```bash
wget http://example.com/fichier.txt
```

---

### `scp`
Copie des fichiers entre machines via SSH.

Envoyer un fichier vers une machine distante :

```bash
scp fichier.txt user@192.168.1.10:/chemin/
```

Récupérer un fichier depuis une machine distante :

```bash
scp user@192.168.1.10:/chemin/fichier.txt .
```

---

## Processus et système

### `ps`
Affiche les processus en cours d'exécution.

```bash
ps
ps aux
```

---

### `top`
Affiche les statistiques des processus en temps réel (CPU, mémoire, PID).

```bash
top
```

---

### `kill`
Envoie des signaux aux processus.

```bash
kill PID       # SIGTERM – arrêt propre
kill -9 PID    # SIGKILL – arrêt forcé
```

---

### `systemctl`
Gère les services système.

```bash
systemctl start apache2
systemctl stop apache2
systemctl enable apache2    # démarrage automatique au boot
systemctl disable apache2
systemctl status apache2
```

---

### Contrôle des tâches (Job Control)

Suspendre un processus en cours :

```bash
CTRL + Z
```

Reprendre en arrière-plan :

```bash
bg
```

Reprendre au premier plan :

```bash
fg
```

---

## Gestion des paquets

### `apt`
Gestionnaire de paquets pour les systèmes Debian (Ubuntu, Kali, etc.).

```bash
sudo apt update                    # actualiser la liste des paquets
sudo apt upgrade                   # mettre à jour les paquets installés
sudo apt install nom_du_paquet     # installer un paquet
```

---

## Automatisation

### `cron`
Planifie des tâches récurrentes.

Éditer le crontab :

```bash
crontab -e
```

Format cron :

```
* * * * * commande
│ │ │ │ │
│ │ │ │ └── jour de la semaine (0–7, 0 et 7 = dimanche)
│ │ │ └──── mois               (1–12)
│ │ └────── jour du mois       (1–31)
│ └──────── heure              (0–23)
└────────── minute             (0–59)
```

---

## Permissions Linux

Les permissions sont structurées en trois niveaux :

| Niveau        | Description                                  |
|---------------|----------------------------------------------|
| **Propriétaire** | L'utilisateur propriétaire du fichier     |
| **Groupe**    | Les membres du groupe associé                |
| **Autres**    | Tous les autres utilisateurs                 |

Valeurs numériques :

| Permission      | Valeur |
|-----------------|--------|
| `r` (lecture)   | 4      |
| `w` (écriture)  | 2      |
| `x` (exécution) | 1      |

Exemple :

```bash
chmod 750 fichier.txt
```

| Niveau        | Permissions | Valeur |
|---------------|-------------|--------|
| Propriétaire  | `rwx`       | 7      |
| Groupe        | `r-x`       | 5      |
| Autres        | `---`       | 0      |

### Sur les fichiers

| Permission | Signification         |
|------------|-----------------------|
| `r`        | Lire le contenu       |
| `w`        | Modifier le fichier   |
| `x`        | Exécuter le fichier   |

### Sur les répertoires

| Permission | Signification                              |
|------------|--------------------------------------------|
| `r`        | Lister le contenu du répertoire            |
| `x`        | Entrer / traverser le répertoire           |
| `w`        | Créer ou supprimer des fichiers à l'intérieur |
