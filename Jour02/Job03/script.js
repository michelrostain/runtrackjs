let compteur = 0

function addOne() {
    compteur = compteur + 1
    // On crée le changement dans l'affichage
    document.getElementById("compteur").innerText = compteur
}

// On récupère le bouton HTML (id="button") et on le stocke dans une variable
const bouton = document.getElementById("button")

// On dit au bouton : "à chaque clic, exécute la fonction addOne()"
// C'est le point d'entrée : tout part de ce clic
bouton.addEventListener("click", addOne)