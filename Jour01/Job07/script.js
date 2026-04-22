function jourtravaille(madate) {
    let jour = madate.getDay()
    let jsemaine = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
    if (jour == 0) console.log("Le", jsemaine[jour], madate.getDate(),"/",madate.getMonth()+1,"/",madate.getFullYear(), "est un jour de week-end")
    else if (jour == 6) console.log("le",jsemaine[jour], madate.getDate(),"/",madate.getMonth()+1,"/",madate.getFullYear(), "est un jour de week-end")
    else console.log("Le", jsemaine[jour], madate.getDate(),"/",madate.getMonth()+1,"/",madate.getFullYear(), "est un jour travaillé")   
}

console.log(jourtravaille(new Date(2024, 0, 7)))