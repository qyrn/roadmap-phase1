# IDOR FAILLE

## Informations générales
- **Date de découverte** : 16/01/25
- **Testeur** : Client X
- **Cible** : https://monsite.com
- **Sévérité** : Haute

## Résumé exécutif
Le faille consiste à ce que n'importe quel utilisateur puisse avoir accès aux commandes des autres clients, juste en changeant le chiffre de l'url. N'importe qui peut avoir accès aux données d'autrui sans que la personne concernée ne soit au courant. 

## Description technique
C'est une faille IDOR (Insecure Direct Object Reference), l'identifiant est directement exposé coté client et non côté serveur, le serveur ne vérifie pas l'autorisation mais seulement l'authentification. L'accès à la ressource dépend juste de la valeur fournie. En manipulant ces identifiants dans les requêtes, un utilisateur malveillant pourrait accéder à des données qui ne lui appartiennent pas en raison d'un contrôle insuffisant côté serveur.

## Étapes de reproduction
1. Aller sur https///monsite.com/orders/abc
2. Changer le abc par xyz dans le champ orders/
3. Avoir accès à des données de x

## Preuve (Proof of Concept)
Screenshot

## Impact
- Vol de données
- Accès aux données personnelles d'autres utilisateurs
- Revente de données

## Recommandations
Vérifier que l'utilisateur connecté est bien le propriétaire de la source côté serveur et renforcer le contrôle.

## Références
- ?
