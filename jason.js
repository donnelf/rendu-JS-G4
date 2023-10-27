var pseudo = ["adrien", "tanguy", "louane", "sonia", "idrissa"]
var power = ["la populaire", "le geek", "le sportif", "la cherleader", "le scout"]

class tueur {
    constructor(killername, hp) {
        this.killername = killername
        this.hp = hp
    }
}

var jason = new tueur ("jason", 100)
console.log("jason se terre dans cette foret, nos survivant parviendront-ils a le capturer?")

class survivant {
    constructor(names, death, dodge, postmortem, power) {
        this.names = names
        this.death = death
        this.dodge = dodge
        this.postmortem = postmortem
        this.power = power
        this.alive = 1
    }
    
    ability() {
        var randomnumbers = Math.random()
            if (this.death >= randomnumbers) {
                this.alive = 0
                console.log(this.names + " est mort !")
            }
            else if (this.dodge >= randomnumbers && this.dodge > this.death && this.dodge < this.postmortem) {
                jason.hp -= 10
                console.log(this.names + " esquive et réussi a infliger 10 de dégat a jason, il lui reste " + jason.hp + " points de vie.")
            }
            else if (this.postmortem >= randomnumbers && this.postmortem > this.dodge) {
                jason.hp -= 15
                this.alive = 0
                console.log(this.names + " est mort mais dans son dernier souffle il a réussi a infliger 15 de dégat a jason, il lui reste " + jason.hp + " points de vie.")
            }
            else
                console.log("defaut")
    }
}
function creatnames() {
    var randomnames = Math.floor(Math.random() * pseudo.length)
    var playername = pseudo[randomnames]
    pseudo.splice(randomnames, 1)
    return playername
}
function creatpower () {
    var randompower = Math.floor(Math.random() * power.length)
    var playerpower = power[randompower]
    power.splice (randompower, 1)
    return playerpower
}

var survivant1 = new survivant (creatnames(), 0.3, 0.8, 1, creatpower())
console.log(survivant1.names + " est " + survivant1.power)

var survivant2 = new survivant (creatnames(), 0.3, 0.8, 1, creatpower())
console.log(survivant2.names + " est " + survivant2.power)

var survivant3 = new survivant (creatnames(), 0.3, 0.8, 1, creatpower())
console.log(survivant3.names + " est " + survivant3.power)

var survivant4 = new survivant (creatnames(), 0.3, 0.0, 1, creatpower())
console.log(survivant4.names + " est " + survivant4.power)

var survivant5 = new survivant (creatnames(), 0.3, 0.8, 1, creatpower())
console.log(survivant5.names + " est " + survivant5.power)


while (jason.hp > 0 && (survivant1.alive == 1 || survivant2.alive == 1 || survivant3.alive == 1 || survivant4.alive == 1 || survivant5.alive == 1)) {
    survivant1.ability()
    survivant2.ability()
    survivant3.ability()
    survivant4.ability()
    survivant5.ability()
    if (jason.hp <= 0) {
        console.log("Jason est mort, les survivants ont réussie a l'arreter! Cependant ")
        if (survivant1.alive == 0) {
            console.log(survivant1.names + " est mort.")
        }
        if (survivant2.alive == 0) {
            console.log(survivant2.names + " est mort.")
        }
        if (survivant3.alive == 0) {
            console.log(survivant3.names + " est mort.")
        }
        if (survivant4.alive == 0) {
            console.log(survivant4.names + " est mort.")
        }
        if (survivant5.alive == 0) {
            console.log(survivant5.names + " est mort.")
        }
    break
    }
    if (survivant1.alive == 0 && survivant2.alive == 0 && survivant3.alive == 0 && survivant4.alive == 0 && survivant5.alive ==0) {
        console.log("Jason a tué tous les survivant, il continuera de sévir dans ces bois!")
    break
    }
}
