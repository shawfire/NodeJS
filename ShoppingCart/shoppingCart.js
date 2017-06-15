productCatalogue = {
    'ult_small': { code: 'ult_small', name: 'Unlimited 1GB', price: 24.90 },
    'ult_medium': { code: 'ult_medium', name: 'Unlimited 2GB', price: 29.90 },
    'ult_large': { code: 'ult_large', name: 'Unlimited 5GB', price: 44.90 },
    '1gb': { code: '1gb', name: '1 GB Data-pack', price: 9.90 }
};

class ShoppingCart1 {
    constructor(pricingRules) {
        this.pricingRules = pricingRules;
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
}

const ShoppingCart = (() => {
    let _Student = class {};
    let props = {
        Age: null,
        Name: null,
        ID: null
    };
    for (let prop in props) {
        Object.defineProperty(_Student, prop, {
            get: function() {
                return props[prop];
            },
            set: function(newValue) {
                props[prop] = newValue;
            },
            enumerable: true
        });
    }
    return _Student;
})();

let student = new Student();
student.Age = 12;
student.Name = "Tolani";
student.ID = "Pokemon1234";
console.log(student.Age, student.Name, student.ID); // 12 "Tolani" "Pokemon1234"


cart = ShoppingCart.new(pricingRules)
cart.add(item1)
cart.add(item2, promo_code)
cart.total
cart.items