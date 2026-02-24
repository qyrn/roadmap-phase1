# Linux Reference – Core Commands

---

## Table of Contents

1. [🗂️ Navigation & Files](#navigation--files)
2. [✏️ Text Editors](#text-editors)
3. [🔍 Search](#search)
4. [🌐 Network & Transfer](#network--transfer)
5. [⚙️ Processes & System](#processes--system)
6. [📦 Package Management](#package-management)
7. [⏰ Automation](#automation)
8. [🔑 Linux Permissions](#linux-permissions)

---

## 🗂️ Navigation & Files

### `echo`
Displays text or the value of a variable in the terminal.

```bash
echo Hello
echo "Hello world"
echo $HOME
```

---

### `whoami`
Displays the username of the currently logged-in user.

```bash
whoami
```

---

### `ls`
Lists files and directories in the current (or specified) directory.

```bash
ls
ls -l      # long format (permissions, owner, size, date)
ls -a      # show hidden files
ls -lh     # long format with human-readable sizes
```

---

### `cat`
Displays the content of a file directly in the terminal.
Best suited for small files.

```bash
cat file.txt
```

For large files, use:

```bash
less file.txt
```

---

### `cd`
Changes the current working directory.

```bash
cd folder
cd ..
cd /absolute/path
```

---

### `pwd`
Prints the absolute path of the current working directory.

```bash
pwd
```

---

### `mkdir`
Creates a new directory.

```bash
mkdir new_folder
```

---

### `touch`
Creates a new empty file or updates its timestamp if it already exists.

```bash
touch file.txt
```

---

### `cp`
Copies files or directories.

```bash
cp file.txt backup.txt
cp -r folder/ backup_folder/
```

---

### `mv`
Moves or renames files and directories.

```bash
mv file.txt /home/user/
mv old.txt new.txt
```

---

### `rm`
Removes files or directories.

```bash
rm file.txt
rm -r folder/
```

> ⚠️ `rm -rf` can be destructive if misused.

---

### `file`
Determines the type of a file (text, binary, etc.).

```bash
file document.txt
```

---

### `clear`
Clears the terminal screen.

```bash
clear
```

---

## ✏️ Text Editors

### `nano`
Terminal-based text editor — simple and beginner-friendly.

```bash
nano file.txt
```

Keyboard shortcuts:

| Shortcut   | Action  |
|------------|---------|
| `CTRL + O` | Save    |
| `CTRL + X` | Exit    |

---

## 🔍 Search

### `find`
Searches for files and directories recursively.

```bash
find / -name "*.txt"
```

Quotes prevent the shell from expanding `*` before `find` processes it.

---

### `grep`
Searches for a specific pattern inside files.

```bash
grep "admin" file.txt
grep -r "admin" /path
grep -c "admin" file.txt
```

| Flag | Description             |
|------|-------------------------|
| `-r` | Recursive search        |
| `-c` | Count matching lines    |

---

## 🌐 Network & Transfer

### `su`
Switches to another user account.

```bash
su username
su -l username
```

`-l` provides a full login shell environment.

---

### `ssh`
Connects to a remote machine over a network.

```bash
ssh user@hostname
ssh user@192.168.1.10
```

Requires network connectivity (LAN or internet).

---

### `wget`
Downloads files from a URL.

```bash
wget http://example.com/file.txt
```

---

### `scp`
Securely copies files between machines over SSH.

Send a file to a remote machine:

```bash
scp file.txt user@192.168.1.10:/path/
```

Receive a file from a remote machine:

```bash
scp user@192.168.1.10:/path/file.txt .
```

---

## ⚙️ Processes & System

### `ps`
Displays running processes.

```bash
ps
ps aux
```

---

### `top`
Displays real-time process statistics (CPU, memory, PID).

```bash
top
```

---

### `kill`
Sends signals to processes.

```bash
kill PID       # SIGTERM – graceful stop
kill -9 PID    # SIGKILL – forced stop
```

---

### `systemctl`
Manages system services.

```bash
systemctl start apache2
systemctl stop apache2
systemctl enable apache2    # auto-start on boot
systemctl disable apache2
systemctl status apache2
```

---

### Job Control

Suspend a running process:

```bash
CTRL + Z
```

Resume in the background:

```bash
bg
```

Resume in the foreground:

```bash
fg
```

---

## 📦 Package Management

### `apt`
Package manager for Debian-based systems (Ubuntu, Kali, etc.).

```bash
sudo apt update                    # refresh package list
sudo apt upgrade                   # upgrade installed packages
sudo apt install package_name      # install a package
```

---

## ⏰ Automation

### `cron`
Schedules recurring tasks.

Edit the crontab:

```bash
crontab -e
```

Cron format:

```
* * * * * command
│ │ │ │ │
│ │ │ │ └── day of week  (0–7, 0 and 7 = Sunday)
│ │ │ └──── month        (1–12)
│ │ └────── day of month (1–31)
│ └──────── hour         (0–23)
└────────── minute       (0–59)
```

---

## 🔑 Linux Permissions

Permissions are structured across three levels:

| Level      | Description                        |
|------------|------------------------------------|
| **Owner**  | The user who owns the file         |
| **Group**  | Members of the associated group    |
| **Others** | Every other user                   |

Numeric values:

| Permission      | Value |
|-----------------|-------|
| `r` (read)      | 4     |
| `w` (write)     | 2     |
| `x` (execute)   | 1     |

Example:

```bash
chmod 750 file.txt
```

| Level  | Permissions | Value |
|--------|-------------|-------|
| Owner  | `rwx`       | 7     |
| Group  | `r-x`       | 5     |
| Others | `---`       | 0     |

### On files

| Permission | Meaning           |
|------------|-------------------|
| `r`        | Read file content |
| `w`        | Modify file       |
| `x`        | Execute file      |

### On directories

| Permission | Meaning                               |
|------------|---------------------------------------|
| `r`        | List directory contents               |
| `x`        | Enter / traverse directory            |
| `w`        | Create or delete files inside         |
