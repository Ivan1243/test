class Product {
    constructor(name, count) {
       // this.id=id;
        this.name=name;
        this.count=count;
    }
    sell(count) {
        if (this.count < count) {
            console.log("Невозможно купить товар");
            return;
        }
        this.count -= count;
        console.log("Товар " + this.name + " продан в количестве " + count.toString());
    }
    addCount(count) {
        this.count += count;
        console.log("Привезли товар " + this.name + " в количестве " + count.toString() + " и теперь его " + this.count.toString());
    }
}

class ProductStore {
    constructor(name) {
        this.name = name;
        this.products = [];
    }
    getAllProducts() {
        
    }
    addProduct(product) {
        this.products.push(product);
        //console.log(product.name);
        //console.log(this.products.length);
    }
    listProducts() {
        //console.log(this.products.length);
        for (let i = 0; i < this.products.length; i++){
           console.log(this.products[i].name + " - " + this.products[i].count.toString()); 
        }
    }
}

product = new Product("telephone", 3);
product1 = new Product("computer", 5);
store = new ProductStore("Электроника");
store.addProduct(product1);
store.addProduct(product);
store.listProducts();
