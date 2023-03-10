/* class animal {
    constructor(species, name, colour){
        this.Species = species
        this.Name = name
        this.Colour = colour
    }
    bark(){
        console.log(this.Name + ' said RUF RUF')
    }
    eat(food){
        return this.Name + ' ate all their ' + food
    }
    run(km){
        console.log(this.Name + ' ran ' + km + ' km')
    }
}

let august = new animal('Dog', 'August', 'Black')
// console.table(august)
august.run(10)

let fred = new animal('Dog', 'Fred', 'Brown')
// console.table(fred)
fred.bark()

console.log(fred.eat('pancakes')) 
// use this method above when function is defined with 'return' instead of 'console.log'

*/

/* class Ninja {
    constructor(name, clan, alive, dojutsu, shuriken) {
        this.Name = name
        this.Clan = clan
        alive = Boolean
        this.Dojutsu = dojutsu
        this.Shuriken = shuriken
    }
    throwShuriken(num) {
        if(num >= this.Shuriken && this.Shuriken != 0){
            console.log(this.Name + ' threw ' + num + ' shuriken!')
            this.Shuriken -= num
        } else {
            console.log(this.Name + ' does not have enough shuriken!')
        }
    }
    perfectSusanoo() {
        if (this.Dojutsu == 'Mangekyo Sharingan') {
            console.log(this.Name + ' used perfect Susanoo!')
        } else {
            console.log(this.Name + ' cannot use this jutsu.')
        }
    }
}

let hatKakashi = new Ninja('Kakashi', 'Hatake', true, 'Mangekyo Sharingan', 3)
let uzuNaruto = new Ninja('Naruto', 'Uzumaki', true, 'None', 2)
let uchSasuke = new Ninja('Sasuke', 'Uchiha', true, 'Mangekyo Sharingan', 3)

 console.log(hatKakashi)
hatKakashi.throwShuriken(5)
hatKakashi.perfectSusanoo()
uzuNaruto.perfectSusanoo() 

uzuNaruto.throwShuriken(uchSasuke)
console.table(uzuNaruto)
console.table(uchSasuke)

let instance
if(hatKakashi instanceof Ninja){
    instance = 'positive'
} else {
    instance = 'negative'
} */

let qtd = 'qtd_de_'
let fruta = {
    qtd_de_frutas: 12
}

let carro = {
    [qtd + 'rodas']: 4
}

let lorry = {
    wheels: 4,
    driver: 'John',
    doors: 2,
    load: 'animals'
}

console.log(lorry)
console.log(lorry.wheels)
let {wheels, driver, doors, load} = lorry

