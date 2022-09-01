import { resolve } from 'path';
import { CustomerDataParserJson } from './customer-data-parser-json';
import { CustomerDataParserTxt } from './customer-data-parser-txt';

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);

  console.log('------');

  const filePathJson = resolve(__dirname, 'files', 'customer.Json');
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserJson.fixCustomerData();
  console.log(customerDataParserJson.customerData);
}

run();
