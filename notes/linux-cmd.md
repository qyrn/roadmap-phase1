## 🐧 Linux Fundamentals – Commands Learned

### 📌 echo
Displays text or the value of a variable in the terminal.

- `echo Hello`
- `echo "Hello world"`
- `echo $HOME` → prints the value of the HOME environment variable

---

### 👤 whoami
Displays the username of the currently logged-in user.

---

### 📂 ls
Lists files and directories in the current (or specified) directory.

- `ls`
- `ls -l` → long format (permissions, owner, size, etc.)

---

### 📄 cat
Displays the content of a file directly in the terminal.

Best suited for small files.  
For large files, `less` is preferred.

---

### 📁 cd
Changes the current working directory.

- `cd folder`
- `cd ..` → move to parent directory

---

### 📍 pwd
Prints the absolute path of the current working directory.

---

### 🔎 find
Searches for files and directories recursively.

Example:
```bash
find / -name "*.txt"
