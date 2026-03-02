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
12. [🔨 Bash Scripting](#bash-scripting)
13. [🔐 Security & Exploitation Tools](#security--exploitation-tools)

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

### `date`
Displays the current system date and time. Supports custom output formatting.

```bash
date                       # full date and time
date +"%Y-%m-%d"           # formatted: 2026-02-26
date +"%H:%M:%S"           # time only: 14:35:00
```

The `+` prefix defines a custom format using strftime-style specifiers.

---

### `basename`
Returns the last component of a path — the filename or directory name without the leading path.

```bash
basename /home/user/docs/report.txt    # → report.txt
basename /home/user/docs/              # → docs
```

Useful in scripts to extract a clean name from a full path.

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

### `cut`
Extracts specific fields from lines based on a delimiter.

```bash
cut -d ' ' -f 1 file.txt        # extract first field, space-delimited
echo "a b c" | cut -d ' ' -f 2  # → b
md5sum file | cut -d ' ' -f 1   # extract only the hash
```

| Flag | Description                      |
|------|----------------------------------|
| `-d` | Delimiter character              |
| `-f` | Field number to extract (1-based)|

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

### `md5sum`
Computes the MD5 hash of a file or input string.

```bash
md5sum file.txt
echo "I am user bandit23" | md5sum
echo "I am user bandit23" | md5sum | cut -d ' ' -f 1    # hash only
```

---

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
nc host port              # connect to a host on a port
nc localhost 30000        # connect to a local service
nc -l -p 1234             # listen on port 1234 (TCP server mode)
echo "data" | nc -l -p 1234 &   # serve data in background
```

---

### `openssl s_client`
Connects to a host using SSL/TLS. Required when the service does not accept plaintext.

```bash
openssl s_client -connect localhost:30001
openssl s_client -connect localhost:30001 -ign_eof
```

`-ign_eof` prevents the connection from closing when stdin reaches EOF — necessary when piping input.

---

### `nmap`
Scans hosts and port ranges to identify open services.

```bash
nmap host                          # default scan
nmap -p 31000-32000 localhost      # scan a specific port range
nmap -sV localhost                 # detect service versions
```

---

### `diff`
Compares two files line by line and shows differences.

```bash
diff file1.txt file2.txt
```

Output convention: `<` = line from the first file, `>` = line from the second file.

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
systemctl enable apache2       # auto-start on boot
systemctl disable apache2
systemctl status apache2
systemctl is-active apache2    # returns "active" or "inactive"
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

---

## 🔨 Bash Scripting

### `seq`
Generates a sequence of numbers.

```bash
seq 5             # 1 2 3 4 5
seq 0 9999        # 0 to 9999
seq 1 2 10        # 1 3 5 7 9  (step of 2)
```

Commonly used in loops for brute force or iteration:

```bash
for i in $(seq 0 9999); do echo "input $i"; done | nc localhost 30002
```

---

### `printf`
Formats and prints data — more powerful than `echo` for precise formatting.

```bash
printf '%04d\n' 7        # → 0007
printf '%s %04d\n' "abc" 42
```

| Format | Description                        |
|--------|------------------------------------|
| `%d`   | Integer                            |
| `%04d` | Integer, padded to 4 digits with zeros |
| `%s`   | String                             |
| `%f`   | Float                              |

---

### `export`
Sets an environment variable and makes it available to child processes.

```bash
export VAR=value
export PATH=/tmp/mydir:$PATH    # prepend a directory to PATH
```

Used in PATH Hijacking — prepending a custom directory to `$PATH` forces the shell to find fake binaries before real ones.

---

### Shebang

The shebang must be alone on the first line and tells the OS which interpreter to run the script with.

```bash
#!/usr/bin/env bash
```

`/usr/bin/env bash` is more portable than `#!/bin/bash` — it resolves `bash` via `PATH` instead of assuming a fixed location.

---

### Variables

Declare a variable without spaces around `=`. Reference it with `$VAR` (case-sensitive).

```bash
SOURCE="/path/to/dir"
echo "$SOURCE"
```

Always quote variables to handle paths with spaces:

```bash
cp -r "$SOURCE" "$DESTINATION"
```

Concatenate variables using `${}`:

```bash
BACKUP_NAME="${DIR_NAME}_${DATE}"
```

---

### Command Substitution

Store the output of a command in a variable:

```bash
DATE=$(date +"%Y-%m-%d")
DIR_NAME=$(basename "$SOURCE")
```

---

### Conditionals

```bash
if [ condition ]; then
    # commands
fi
```

Common condition flags:

| Flag | Meaning                        |
|------|--------------------------------|
| `-d` | Path exists and is a directory |
| `-f` | Path exists and is a file      |
| `-z` | String is empty                |
| `!`  | Negate the condition           |

Example — check that a directory exists before proceeding:

```bash
if [ ! -d "$SOURCE" ]; then
    echo "Error: source directory not found."
    exit 1
fi
```

---

### Exit Codes

Every command returns an exit code when it finishes.

| Code    | Meaning  |
|---------|----------|
| `0`     | Success  |
| Non-zero | Error   |

Use `exit` to terminate a script explicitly:

```bash
exit 0    # success
exit 1    # error
```

If a script finishes without an explicit `exit`, it returns the exit code of the last command.

---

### Copying Directories

```bash
cp -r "$SOURCE" "$DESTINATION"      # copies the directory itself
cp -r "$SOURCE"/* "$DESTINATION"    # copies only the contents
```

---

## 🔐 Security & Exploitation Tools

### `sudo`
Executes a command as another user (default: root). Requires the target user to be specified with `-u`.

```bash
sudo command
sudo -u username command
sudo -u app-admin /bin/cat /path/to/file
```

The allowed commands per user are configured in `/etc/sudoers`.

---

### SUID Binaries

A binary with the SUID bit set runs with the **file owner's** privileges, regardless of who executes it.

```bash
ls -la ./binary    # look for 's' in owner permissions: -rwsr-xr-x
./binary command   # runs as the file owner
```

Identifying SUID binaries:

```bash
find / -perm -4000 -type f 2>/dev/null
```

---

### PATH Hijacking

If a SUID binary calls a command without an absolute path (e.g., `ls` instead of `/bin/ls`), the shell resolves it via `$PATH`. Prepending a custom directory allows substituting the real binary with a fake one.

```bash
mkdir /tmp/fake
echo -e '#!/bin/bash\ncat /path/to/secret' > /tmp/fake/ls
chmod +x /tmp/fake/ls
export PATH=/tmp/fake:$PATH
./vulnerable_suid_binary
```
