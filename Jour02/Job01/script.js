// On récupère le bouton HTML (id="button") et on le stocke dans une variable
const btn = document.getElementById("button");

// On récupère l'article HTML (id="citation") et on le stocke dans une variable
const article = document.getElementById("citation");

// On définit la fonction citation() — elle sera appelée au clic
function citation() {
    // .innerText lit le texte visible de l'élément HTML ciblé
    // console.log l'affiche dans la console du navigateur
    console.log(article.innerText);
}

// On dit au bouton : "quand tu reçois un clic, exécute citation()"
// addEventListener prend deux arguments : l'événement ("click") et la fonction à appeler
btn.addEventListener("click", citation);