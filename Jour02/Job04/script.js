// On écoute tous les événements "keydown" sur toute la page (document)
// event contient les infos sur la touche pressée
document.addEventListener("keydown", (event) =>  {
    
    // On vérifie si la touche pressée est une lettre (a-z, majuscule ou minuscule)
    // /[a-z]/i.test() retourne true ou false
    if(/[a-z]/i.test(event.key)) {
        
        // On récupère l'élément textarea pour pouvoir le modifier
        const textarea = document.getElementById("keylogger")
        
        // On vérifie si le focus est actuellement sur le textarea
        // document.activeElement retourne l'élément qui a le focus
        if (document.activeElement === textarea) {
            
            // Le focus est sur le textarea → ajouter la lettre DEUX fois
            // += signifie "ajouter à la suite du contenu existant"
            textarea.value += event.key
            
        } else {
            
            // Le focus n'est pas sur le textarea → ajouter la lettre UNE fois
            textarea.value += event.key
        }
    }
});