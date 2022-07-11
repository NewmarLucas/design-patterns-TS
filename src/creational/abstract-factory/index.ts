import { EnterpriseCreateVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleFactory();
const individualFactory = new IndividualCreateVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Celta', 'João');
const car2 = individualFactory.createVehicle('Fusca', 'Diego');

car1.pickUp();
car2.pickUp();
