## 🐧 Linux Fundamentals – Commands Learned

### 📌 echo
Displays text or the value of a variable in the terminal.

Examples:
```bash
echo Hello
echo "Hello world"
echo $HOME
````

---

### 👤 whoami

Displays the username of the currently logged-in user.

```bash
whoami
```

---

### 📂 ls

Lists files and directories in the current (or specified) directory.

Examples:

```bash
ls
ls -l      # long format (permissions, owner, size, date)
ls -a      # show hidden files
ls -lh     # long format with human-readable sizes
```

---

### 📄 cat

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

### 📁 cd

Changes the current working directory.

```bash
cd folder
cd ..
cd /absolute/path
```

---

### 📍 pwd

Prints the absolute path of the current working directory.

```bash
pwd
```

---

### 🔎 find

Searches for files and directories recursively.

```bash
find / -name "*.txt"
```

Quotes prevent the shell from expanding `*` before `find` processes it.

---

### 🔍 grep

Searches for a specific pattern inside files.

```bash
grep "admin" file.txt
grep -r "admin" /path
grep -c "admin" file.txt
```

* `-r` → recursive search
* `-c` → count matching lines

---

### 📁 mkdir

Creates a new directory.

```bash
mkdir new_folder
```

---

### 📝 touch

Creates a new empty file or updates its timestamp if it already exists.

```bash
touch file.txt
```

---

### 📦 cp

Copies files or directories.

```bash
cp file.txt backup.txt
cp -r folder/ backup_folder/
```

---

### 🚚 mv

Moves or renames files and directories.

```bash
mv file.txt /home/user/
mv old.txt new.txt
```

---

### ❌ rm

Removes files or directories.

```bash
rm file.txt
rm -r folder/
```

⚠️ `rm -rf` can be destructive if misused.

---

### 🧬 file

Determines the type of a file (text, binary, etc.).

```bash
file document.txt
```

---

### 🧹 clear

Clears the terminal screen.

```bash
clear
```

---

### 🔐 su

Switches to another user account.

```bash
su username
su -l username
```

`-l` provides a full login shell environment.

---

### 🔐 ssh

Connects to a remote machine over a network.

```bash
ssh user@hostname
ssh user@192.168.1.10
```

Requires network connectivity (LAN or internet).

---

## 🔑 Linux Permissions (rwx)

Permissions are structured as:

* Owner
* Group
* Others

Each permission has a numeric value:

* `r` = 4
* `w` = 2
* `x` = 1

Example:

```bash
chmod 750 file.txt
```

Meaning:

* Owner: rwx (7)
* Group: r-x (5)
* Others: --- (0)

### Permission meaning on files:

* `r` → read file content
* `w` → modify file
* `x` → execute file

### Permission meaning on directories:

* `r` → list directory contents
* `x` → enter/traverse directory
* `w` → create/delete files inside directory

```
