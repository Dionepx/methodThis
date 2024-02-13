const car = {
     name: 'Corolla',
     brand: 'Toyota',
     colors: ['preto', 'branco', 'vinho'],
     isRunning: true,
     run: function () {
          console.log(`O ${this.name} está em movimento`)
     },
     stop: function () {
          console.log(`O ${this.name} está parado`)
     },
     getColorsMessage: function () { 

          const lastColor = car.colors[2]
          car.colors.pop()
          console.log(`O ${this.name} está disponível nas cores ${this.colors.join(', ')} e ${lastColor}.`)
     }
}

car.getColorsMessage()