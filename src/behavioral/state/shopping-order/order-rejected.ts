import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pagamento porquê o pedido foi recusado.');
  }

  rejectPayment(): void {
    console.log(
      'Não posso aprovar o pagamento porquê o pedido já está recusado.'
    );
  }

  waitPayment(): void {
    console.log('Não posso mover para pendente porquê o pedido foi recusado.');
  }

  shipOrder(): void {
    console.log('Não posso enviar um pedido com o pagamento recusado.');
  }
}
