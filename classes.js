
class Enemy {
    constructor(phrase) {
        this.phrase = phrase
    }

    sayPhrase = () => console.log(this.phrase)
    
}


class Alien extends Enemy {
    constructor (name, phrase) {
        super(phrase)
        this.name = name
    }

    sayPhrase = () => {
        console.log('новая фраза')
    }

    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

class Bug extends Enemy {
    constructor (name, phrase) {
        super(phrase)
        this.name = name
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    constructor (name, phrase) {
        super(phrase)
        this.name = name
    }
    #height = '145cm'

    getHeight = () => {
        return ' '
    }

    setHeight = (height) => {
        
        this.#height = ''
    }
    
    transform = () => console.log("Optimus prime!")
}




const alien1 = new Alien('xxxUbivatorxxx', 'Я тебя прозондирую')

alien1.sayPhrase()


// 1 Наследование

// 2 инскапсуляция

// 3 полиморфизм
    // перезаписывание переменных
    // изменение поведения методов в зависимости от типа значения
