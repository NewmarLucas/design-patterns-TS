import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
console.log(tShirt.getPrice());

const decoratedTShirt = new ProductStampDecorator(tShirt);
console.log(decoratedTShirt.getPrice(), decoratedTShirt.getName());
