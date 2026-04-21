function bisextile(annee){
    if ((annee % 4 == 0 && annee % 100 > 0) || (annee % 400 == 0)) {
        console.log(annee + " est bissextile");
    } else {
        alert(annee + " n'est pas bissextile");
    }
}
console.log(bisextile(2024))