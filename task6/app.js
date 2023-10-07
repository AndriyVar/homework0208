'use strict'
class Product {
    #sale = {
        'bakery': 0.95,
        'chemicals': 0.93
    };
    constructor(name, type, count, price) {
        this.name = name;
        this.type = type;
        this.count = count;
        this.price = price;
        this.total_summ = this.summ();
    }
    sales() {
        if(this.count >= 3 && this.type === 'bakery') {
            this.price = this.price * this.#sale['bakery']
        }
        if(this.count >= 3 && this.type === 'chemicals') {
            this.price = this.price * this.#sale['chemicals']
        }
    }
    summ() {
        return this.count * this.price;
    }
    log() {
        console.log(`Information:
Name of product: ${this.name}
Count of product: ${this.count}
Price of product: ${this.price}
Summ of price: ${this.total_summ}`)
    }
}
const p1 = new Product('Wine', '', 2, 469.90);
const p2 = new Product('Chicken', '', 1, 161.50);
const p3 = new Product('bread', 'bakery', 4, 11.00);
p3.sales()
const ps = [p1, p2, p3];
class Check {
    constructor(product) {
        this.time = new Date();
        this.product = product;
    }
    show() {
        for (let i = 0; i < this.product.length; i++) {
            document.write(`<p style="font-size:15px;">${this.product[i].name} ${this.product[i].count} * ${this.product[i].price}</p>`);
        }
    }
    summ() {
        let summ = 0
        for (let i = 0; i < this.product.length; i++) {
            summ += this.product[i].count * this.product[i].price
        }
        document.write(`<p style="font-size:20px;">Total summ: ${summ}</p>`);
    }
    count() {
        document.write(`<p style="font-size:18px;">Count of products: ${ps.length}</p>`)
    }
}
const check = new Check(ps);
document.write(`<h1>Check of products:</h1>
<h2>SHOP123</h2>`);
check.show()
check.count()
check.summ()