

// Extraire l’URL courante pour récupérer le paramètres (_id) 
const urlcourante = document.location.href;
const url = new URL(urlcourante);
const id = url.searchParams.get("id");

// ceci nous permet de requeter l'api et recuperer differentes info du produit en question
const productUrl = "http://localhost:3000/api/products/" + id;

fetch(productUrl)
// récupérer le résultat de la requête au format json
.then(function(res) {
    if (res.ok) {
    return res.json();
  }
  
})

// ce qui est été traiter en json sera appelé item

.then(function(item) {
    afficherProductItems(item);
})
 // En cas d'erreur h1 au contenu de erreur 404 et renvoit en console l'erreur.
 .catch((err) => {
  document.querySelector(".titles").innerHTML = "<h1>erreur 404</h1>";
  console.log("erreur 404, sur ressource api:" + err);
});

function afficherProductItems(item){

    // Créer un élément <img> et ajouter-le au document :
    let Img = document.createElement("img");
    // ajouter l'image du produit
    Img.src=item.imageUrl;
     // ajouter Img en tant que enfant de l'élément avec la class="item__img":
    document.querySelector(".item__img").appendChild(Img);
    
    //Ajouter le nom du produit
    document.querySelector("#title").innerHTML= item.name;
    //Ajouter le prix du produit
    document.querySelector("#price").innerHTML= item.price;
    //Ajouter la description du produit
    document.querySelector("#description").innerHTML= item.description;
    //Remplir les options du composant select
    for(let color of item.colors){
        let option = document.createElement("option");
        option.innerHTML= color;
        document.querySelector("#colors").appendChild(option);
    }
}


// selectionner le bouton avec lId addToCart
let button = document.getElementById("addToCart");
// au clic sur le bouton:
button.addEventListener("click",()=>{
    // newProcuct un objet avec Id, quantity(nbr), color
    let newProduct = {
        "id": id,
        "quantity" : parseInt(document.getElementById("quantity").value, 10) ,
        "color"  : document.getElementById("colors").value
    };
    // recuperer les produits dans le localstoge en json
    let localStorageProducts= JSON.parse(localStorage.getItem("cart")) ;
    let prodTrouve = false;
    let position = 0;
    
    // si la quantite ou la color ne sont pas selectionne
    if( newProduct.quantity === 0 || newProduct.color === ""){
        // affiche cette alert et ne fait rien d'ou return
        window.alert("Veuillez sélectionner la color et/ou la quantité")
        return;
    }
     // quand le localstorge contient des produits
    if(localStorageProducts){
        // verifier l'id et la color existaient déja dans le localstorage
        for (let i=0 ;i<localStorageProducts.length;i++){
            if( newProduct.productId===  localStorageProducts[i].productId &&
                newProduct.color === localStorageProducts[i].color ) {
                prodTrouve = true;
                position = i;
                break;
            }
        }
            //on va incrémenter la quantité souhaité
        if( prodTrouve === true){
            localStorageProducts[position].quantity = localStorageProducts[position].quantity + newProduct.quantity;
         
            // sinon on va ajouter une autre ligne localStorageProducts
        }else{
            localStorageProducts.push(newProduct);
        }

        // quand le localstorge est vide
    } else{
        localStorageProducts=[];
        localStorageProducts.push(newProduct);
    }
    // stocker products qui contiennent localStorageProducts format string
    localStorage.setItem("cart", JSON.stringify(localStorageProducts));

})