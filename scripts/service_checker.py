import sys
import subprocess

if len(sys.argv) < 2:
    print("Usage : python3 service_checker.py <nom_du_service>")
    sys.exit(1)

service = sys.argv[1]
print(f"Vérification du service : {service}")

result = subprocess.run(["systemctl", "is-active", service], capture_output=True, text=True)

if result.stdout.strip() == "active":
    print("✅ Le service est actif")
else:
    print("❌ Le service est inactif")
