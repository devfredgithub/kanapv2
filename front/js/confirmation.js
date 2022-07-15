let monPanier = [];



//récupération des éléments du DOM 
let cart_items = document.getElementById ('cart_items');


//récupération des données dans l' URL
const url = new URL ('http://127.0.0.1:5500/front/product.html?id=42');
const params = new URLSearchParams (url.search);
params.set('id', data [i]._id);
productsId = params.get ('id');

//récuperation de la quantité du panier
let recuperationPanier = document.getElementById ('totalQuantity');
get (localStorage.data);



//creation dans le DOM des articles dans le panier

let article = ('');
let quantité =('');
let couleur =('');

article= document.createElement('article');
quantité= document.createElement('quantité');
couleur= document.createElement('couleur');
article.appenchild(cart_items);
quantité.appenchild(cart_items);
couleur.appenchild(cart_items);

//boucle article dans le panier
for ( article<= 0 )=>{

    if
}



//ajouter des produits récupérer dans le local storage



//supprimer des produits



//stockage des infos panier
for (let index =0; index<40; index++) {
    nomPanier.push(data[index].id);
}

localStorage.monPanier=JSON.stringify(monPanier);




