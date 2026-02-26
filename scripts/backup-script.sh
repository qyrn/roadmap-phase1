#!/usr/bin/env bash
# Script de backup automatique

SOURCE="/usr/input"
DESTINATION="/usr/output_backup"

if [ ! -d "$SOURCE" ]; then
    echo "Erreur : le dossier source n'existe pas."
    exit 1
fi

DATE=$(date +"%Y-%m-%d")
BACKUP_NAME="$(basename "$SOURCE")_$DATE"

mkdir -p "$DESTINATION/$BACKUP_NAME"
cp -r "$SOURCE"/* "$DESTINATION/$BACKUP_NAME"

echo "Backup créé avec succès dans : $DESTINATION/$BACKUP_NAME"
