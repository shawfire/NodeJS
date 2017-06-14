const should = require('should'),
    ShoppingCart = require('../lib/shoppingCart');


describe('Book Controller Tests:', () => {
    describe('Items', () => {
        it('should not return empy array of items on creation', () => {
            pricingRules = null;
            cart = new ShoppingCart(pricingRules)
            cart.items.should.equal([]);

            // cart.add(item1)
            // cart.add(item2, promo_code)
            // cart.total
            // cart.items

        })
    });
});