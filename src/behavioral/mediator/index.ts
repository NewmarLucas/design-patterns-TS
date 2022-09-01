import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 10 });
seller1.addProduct({ id: '2', name: 'Calça', price: 20 });
seller1.addProduct({ id: '3', name: 'Meia', price: 30 });

const seller2 = new Seller();
seller2.addProduct({ id: '4', name: 'Caneta Azul', price: 9 });
seller2.addProduct({ id: '5', name: 'Borracha', price: 15 });
seller2.addProduct({ id: '6', name: 'Carro', price: 49000 });

mediator.addSeller(seller1, seller2);
mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('4');
buyer.viewProducts();
