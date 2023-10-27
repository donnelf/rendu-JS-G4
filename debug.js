let users = ["stephanie", "gaia", "etienne", "michel", "roberto", "julie"]

function countcharacter (value) {
    return value.lenght
}

users.foreach(user => {
    if (countcharacter(user) > 5) {
        console.log("c'est un prénom long de plus de 5 lettres.")
    }else {
        console.log("ce n'est pas du tout un prénom long.")
    }
})
