# Sujet
> Vous allez devoir développer une application conversationnelle en utilisant [DialogFlow](https://console.dialogflow.com/api-client/), [Firebase](https://console.firebase.google.com/) et [Actions on Google](https://console.actions.google.com/)

Votre application essaiera de répondre à la question :

```
Quelle est la couleur du cheval blanc d'Henry 4 ?
```

# Synoptique

- [ ] Créer l'app `DialogFlow`
- [ ] [Utiliser un `Entity`](entity.md)
- [ ] [Utiliser un Fulfillment](fulfillment.md)
- [ ] [Demander la couleur du cheval à l'utilisateur](ask-color.md)
- [ ] [Retenir la couleur du cheval via Firebase Db](firebase-db.md)
- [ ] [Utiliser SSML](ssml.md)
- [ ] [Déployer sur un Google Home](deplay.md)

## Créer l'app `DialogFlow`

La première chose à faire est de créer une nouvelle application via l'interface [DialogFlow](https://console.dialogflow.com/api-client/) ; vous aurez pour cela besoin de créer un nouvel agent.

### Créer un `Intent`

Créer un nouvel `Intent`, demandez à vos utilisateurs de dire :

```
Quelle est la couleur du cheval blanc d'Henry 4 ?
```

Définissez une nouvelle réponse à votre convenance.

> Vous pouvez essayer votre `Intent` via la colonne de droite.

Et voilà 🎉 vous avez votre premier Assistant vocal capable de vous donner la couleur du cheval d'Henry IV !

Étape suivante : [Utiliser un `Entity`](entity.md)
