import { ECommerceShoppingCart } from './shoppingCart/ecommerce-shopping-cart';
import { DefaultDiscount } from './shoppingCart/default-discount';
import { NewDiscount } from './shoppingCart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct(
  { name: 'Produto 1', price: 250 },
  { name: 'Produto 2', price: 50 }
);
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
