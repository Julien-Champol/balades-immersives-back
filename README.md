# balades-immersives-back

## Déploiement

Le déploiement s'effectue via un hook post-receive sur le serveur distant.

L'état du serveur est maintenu grâce à pm2, pm2 est démarré avec l'option watch :

`pm2 start server.js --watch`

Cette option permet de redémarrer le serveur dès que des modifications des sources sont détectées.
