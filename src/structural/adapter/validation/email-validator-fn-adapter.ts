import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './email-validator-protocol';

export const EmailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string
): boolean => {
  return isEmail(value);
};
