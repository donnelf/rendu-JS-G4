class pokemon { 
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    islucky(pokemon){
        return Math.random() < this.luck
    }
    attackpokemon(pokemon){
        if (this.islucky()){
            var damage = this.attack - pokemon.defense
            pokemon.hp -= damage 
            console.log(pokemon.name + " subit " + damage + " de dégats" + ", il est donc à " + pokemon.hp + " hp")
        }
        else
        console.log("l'attaque n'a pas touché")
    }
}
var pokemon1 = new pokemon ("simularbe", 25, 10, 100, 0.9)
var pokemon2 = new pokemon ("ronflex", 15, 20, 120, 0.8)

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    pokemon1.attackpokemon(pokemon2)
    if (pokemon2.hp <= 0) {
        console.log(pokemon2.name + " est mort")
        console.log(pokemon1.name + " a gagné")
    break
    }
    pokemon2.attackpokemon(pokemon1)
     if (pokemon1.hp <= 0){
        console.log(pokemon1.name + " est mort")
         console.log(pokemon2.name + " a gagné")
     break
    }
        
}
    





