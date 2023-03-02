# TME 2 Frontend

Le but de ce TME est de commencer les différents écran du projet.

Les objectifs de la séance sont :

- configurer le routeur
- afficher la liste de produits
- modifier un élément
- afficher des statistiques

si les routes backend n'ont pas encore été créé on peut se contenter d'un bouchon dans les fonctions du module `api`

(bouchon: une fonction ou module simulant le fonctionnement réel pas encore implémenté)

## Exercice 1: Le routeur

Créez les fichiers `.vue` pour chacune des routes suivantes :

- liste (ou home sur le `/`)
- détails d'un élément (`/product/id`)
- un formulaire de modification du produit
- les statistiques de ventes

Certaines de ces pages n'ont pas encore été implémenté il est possible de juste créer le squelette du composant vue.

## Exercice 2: La liste

Se baser sur la liste créée au TME d'avant.

La seul différence est qu'il faut ajouter un lien vers la route de détail et de modification lorsqu'on clique sur un élément.

## Exercice 3 détail et modification

Créer une page qui va chercher l'id dans l'url.

`http://localhost:8080/product/7` => ici `id=7`

Et qui affiche les détail du produit (chercher les info du produit dans le store).

On doit pouvoir également passer en mode formulaire pour modifier ce produit.

Quand on enregistre on envoie la modification au backend et on modifie la valeur dans le store si l'appel au backend réussis, sinon on affiche l'erreur.

## Exercice 4 Statistiques

Ici on veut créer une page de statistiques de ventes (les ventes sont fournis dans un fichier json dans le repo : `ventes.json`).

Vous pouvez choisir le plugin de chart que vous voulez :

- Chart.js
- ApexCharts
- jscharting
- fusionChart
- echarts

La page doit charger toutes les statistiques et afficher :

- le nombre de ventes
- le nombre de ventes par semaine
- le chiffres d'affaire global
- le chiffres d'affaire par semaine
- la repartitions des ventes par produits (en utilisant les quantités de produits pas le nombre de vente)

et d'autres statistiques qui vous semblerez cohérentes.
