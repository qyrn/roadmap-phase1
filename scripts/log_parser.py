import sys

if len(sys.argv) < 2:
    print("Usage : python3 log_parser.py <fichier_log>")
    sys.exit(1)

fichier = sys.argv[1]
echecs = {}

with open(fichier, "r") as f:
    for ligne in f:
        mots = ligne.split()
        if "Failed" in ligne:
            ip = mots[mots.index("from") + 1]
            user = mots[mots.index("for") + 1]
            echecs[ip] = echecs.get(ip, 0) + 1
            print(f"❌ Échec - User: {user} - IP: {ip}")
        elif "Accepted" in ligne:
            ip = mots[mots.index("from") + 1]
            user = mots[mots.index("for") + 1]
            print(f"✅ Succès - User: {user} - IP: {ip}")

print("\n--- Analyse brute force ---")
for ip, count in echecs.items():
    if count > 2:
        print(f"⚠️  BRUTE FORCE détecté - IP: {ip} ({count} échecs)")