const product = require("./Product")

module.exports = class Posters extends product{
    constructor(name, description, height, widht, price, inStock = 0){
        super(name, description, price, inStock)
        this.height = height
        this.widht = widht
    }
} 