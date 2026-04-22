// On définit la fonction showhide() qui sera appelée à chaque clic sur le bouton
function showHide() {
    
    // On crée une balise <article> en javascript — elle n'existe pas encore dans la page
    const article = document.createElement("article")
    
    // On lui donne un id pour pouvoir la cibler plus tard
    article.id = "article"
    
    // On y met le texte visible
    article.innerText = "L'important ce n'est pas la chute, c'est l'atterrissage"
    
    // On vérifie si l'article existe déjà dans la page
    // getElementById retourne null si l'élément est introuvable
    if(document.getElementById("article") == null)
        // L'article n'existe pas → on l'ajoute au body de la page
        document.body.appendChild(article)
    else 
        // L'article existe déjà → on le supprime
        document.getElementById("article").remove()
}   

// On récupère le bouton HTML (id="button") et on le stocke dans une variable
const bouton = document.getElementById("button")

// On dit au bouton : "à chaque clic, exécute la fonction showHide()"
// C'est le point d'entrée : tout part de ce clic
bouton.addEventListener("click", showHide)