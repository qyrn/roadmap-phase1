# Linux Reference – Core Commands

---

## Table of Contents

1. [🗂️ Navigation & Files](#navigation--files)
2. [🔧 Shell Operators](#shell-operators)
3. [✏️ Text Editors](#text-editors)
4. [🔍 Search & Text Processing](#search--text-processing)
5. [🔤 Encoding & Encoding Tools](#encoding--encoding-tools)
6. [🗜️ Compression & Archives](#compression--archives)
7. [🌐 Network & Transfer](#network--transfer)
8. [⚙️ Processes & System](#processes--system)
9. [📦 Package Management](#package-management)
10. [⏰ Automation](#automation)
11. [🔑 Linux Permissions](#linux-permissions)

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
ls -a      # show hidden files (dot files)
ls -lh     # long format with human-readable sizes
ls -la     # long format + hidden files
```

---

### `cat`
Displays the content of a file directly in the terminal.
Best suited for small files.

```bash
cat file.txt
cat ./-                      # file whose name is a dash
cat "./file with spaces"     # file whose name contains spaces
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
mkdir -p parent/child/grandchild    # create nested directories in one shot
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
Determines the type of a file (text, binary, gzip, bzip2, tar…).

```bash
file document.txt
file ./*          # check all files in current directory
```

---

### `man`
Opens the manual page for a command.

```bash
man ls
man find
man chmod
```

> Always check `man` before Googling — the answer is usually there.

---

### `clear`
Clears the terminal screen.

```bash
clear
```

---

## 🔧 Shell Operators

Operators control how commands interact with each other and with files.

| Operator | Name | Description |
|----------|------|-------------|
| `\|` | Pipe | Pass the output of one command as input to another |
| `>` | Redirect | Write output to a file (overwrites) |
| `>>` | Append | Append output to a file |
| `&` | Background | Run a command in the background |
| `&&` | And | Run the second command only if the first succeeds |

Examples:

```bash
ls -la | grep ".txt"          # pipe: filter ls output
echo "hello" > file.txt       # redirect: write to file
echo "world" >> file.txt      # append: add to file
sleep 10 &                    # background: run without blocking
apt update && apt upgrade     # and: update then upgrade
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

## 🔍 Search & Text Processing

### `find`
Searches for files and directories recursively.

```bash
find / -name "*.txt"
find / -type f -name "secret"
find / -type f -user bob -group dev -size 33c 2>/dev/null
find / -type f -size 1033c ! -executable 2>/dev/null
```

| Flag | Description |
|------|-------------|
| `-type f` | Files only |
| `-type d` | Directories only |
| `-name` | Match by name |
| `-user` | Match by owner |
| `-group` | Match by group |
| `-size Nc` | Match by size in bytes |
| `! -executable` | Exclude executable files |

> `2>/dev/null` suppresses permission error output.

---

### `grep`
Searches for a specific pattern inside files.

```bash
grep "admin" file.txt
grep -r "admin" /path
grep -i "admin" file.txt
grep -n "admin" file.txt
grep -v "admin" file.txt
grep -E "error|warning" file.txt
grep -o "[0-9]\+" file.txt
```

| Flag | Description                           |
|------|---------------------------------------|
| `-r` | Recursive search                      |
| `-c` | Count matching lines                  |
| `-i` | Case-insensitive search               |
| `-n` | Show line numbers                     |
| `-v` | Invert — show lines that do NOT match |
| `-E` | Extended regex (alternation, `+`, `?`, etc.) |
| `-o` | Print only the matched part, not the whole line |

---

### `sort`
Sorts lines in a file alphabetically (or numerically).

```bash
sort file.txt
sort -u file.txt          # sort and remove duplicates
sort -n file.txt          # sort numerically
sort -r file.txt          # reverse order
sort file.txt | uniq -u   # pipeline: keep only unique lines
```

| Flag | Description                     |
|------|---------------------------------|
| `-u` | Sort and remove duplicates      |
| `-n` | Numeric sort                    |
| `-r` | Reverse order                   |

---

### `uniq`
Filters or counts duplicate lines. Usually combined with `sort`.

```bash
sort file.txt | uniq       # remove duplicates
sort file.txt | uniq -u    # keep only unique lines
sort file.txt | uniq -c    # count occurrences of each line
```

| Flag | Description                    |
|------|--------------------------------|
| `-u` | Print only unique lines        |
| `-c` | Prefix each line with a count  |

---

### `wc`
Counts lines, words, or characters in a file.

```bash
wc file.txt          # lines, words, characters
wc -l file.txt       # count lines only
wc -w file.txt       # count words only
cat file.txt | wc -l # count lines via pipe
```

---

### `strings`
Extracts human-readable strings from a binary file.

```bash
strings binary_file
strings data.txt | grep "="    # extract and filter
```

---

## 🔤 Encoding & Encoding Tools

### `base64`
Encodes or decodes base64 data.

```bash
base64 file.txt          # encode
base64 -d file.txt       # decode
```

---

### `tr`
Translates or replaces characters in a stream.

```bash
tr 'A-Za-z' 'N-ZA-Mn-za-m'                    # ROT13
tr 'a-z' 'A-Z'                                 # lowercase to uppercase
cat file.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'     # ROT13 via pipe
```

---

### `xxd`
Creates a hex dump of a file, or reverses one back to binary.

```bash
xxd file                   # display hex dump
xxd -r hexdump > binary    # rebuild binary from hex dump
```

---

## 🗜️ Compression & Archives

### `gzip` / `gunzip`
Compresses or decompresses `.gz` files.

```bash
gzip file.txt              # compress → file.txt.gz
gunzip file.gz             # decompress
gzip -d file.gz            # decompress (alternative)
gunzip -c file.gz > output # decompress to stdout
```

---

### `bzip2` / `bunzip2`
Compresses or decompresses `.bz2` files.

```bash
bzip2 file.txt             # compress → file.txt.bz2
bunzip2 file.bz2           # decompress
bzip2 -d file.bz2          # decompress (alternative)
bzip2 -dc file.bz2 > output
```

---

### `tar`
Archives multiple files into a single `.tar` file.

```bash
tar tf archive.tar               # list contents
tar xf archive.tar               # extract
tar czf archive.tar.gz folder/   # create compressed archive
```

| Flag | Description              |
|------|--------------------------|
| `t`  | List contents            |
| `x`  | Extract                  |
| `c`  | Create archive           |
| `f`  | Specify filename         |
| `z`  | Use gzip compression     |

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
ssh user@host -p 2220              # specify port
ssh -i keyfile user@host -p 2220   # authenticate with private key
```

---

### `scp`
Securely copies files between machines over SSH.

```bash
scp file.txt user@192.168.1.10:/path/        # send
scp user@192.168.1.10:/path/file.txt .       # receive
scp -P 2220 user@host:file.txt .             # specify port
```

---

### `wget`
Downloads files from a URL.

```bash
wget http://example.com/file.txt
```

---

### `nc` (Netcat)
Opens raw TCP/UDP connections. Useful for interacting with services directly.

```bash
nc host port            # connect to a host on a port
nc localhost 30000      # connect to a local service
```

---

### `python3 -m http.server`
Starts a simple HTTP server in the current directory. Useful for transferring files between machines.

```bash
python3 -m http.server          # serve on port 8000
python3 -m http.server 9000     # serve on custom port
```

Then fetch from another machine:

```bash
wget http://<ip>:8000/file.txt
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

### `chown`
Changes the owner (and optionally the group) of a file or directory.

```bash
chown user file.txt
chown user:group file.txt
chown -R user folder/       # recursive
```

---

### `chmod`
Changes the permissions of a file or directory.

```bash
chmod 750 file.txt
chmod 400 keyfile      # read-only for owner (SSH private keys)
chmod +x script.sh     # add execute permission
```

---

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

Example — `chmod 750 file.txt`:

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
