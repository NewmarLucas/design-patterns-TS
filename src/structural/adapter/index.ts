// Client
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { EmailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

const email = 'newmarsouza@gmail.com';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('Email não é válido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FUNCTION)');
  } else {
    console.log('Email não é válido (FUNCTION)');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(EmailValidatorFnAdapter, email);
