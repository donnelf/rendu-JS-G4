var musiquename = ["anissa-wejdene", "legends-juice wrld", "imaginary folklore-nujabes", "peace haine love-josman", "himawari-ado"]

class personnage {
    constructor(name, mentalhealth) {
        this.name = name
        this.mentalhealth = mentalhealth
    }
}

var nbrstaxi = 0
var john = new personnage ("john", 10)

class travel {
    constructor() {
    }
    changement() {
        var randommusique = Math.floor(Math.random() * musiquename.length)
        if (randommusique == 0) {
            console.log(musiquename[0])
            john.mentalhealth -= 1
            nbrstaxi += 1
            console.log("John est tilté et pert 1 points de santé mentale, il lui reste " + john.mentalhealth + " neurones avant de perdre la tête.")
        }
        else {
            console.log(musiquename[randommusique])
            console.log("enfin une bonne musqiue, John peut rester dans ce taxi.")
        }
    }
}

var johntravel = new travel()

for(var nbrsfeuxrouges = 30; nbrsfeuxrouges >= 0; nbrsfeuxrouges--) {
    johntravel.changement()
    console.log( "Il lui reste " + nbrsfeuxrouges + " feux rouges à traverser")
    if(john.mentalhealth <= 0) {
        console.log("john n'en peut plus, il a finit par exploser! Il lui restait " + nbrsfeuxrouges + " feu à parcourir.")
        break
    }
    if(nbrsfeuxrouges <= 0) {
        console.log("John est enfin rentré chez lui et il lui a fallu " + this.nbrstaxi + " taxi pour arriver a destination.")
    }
}