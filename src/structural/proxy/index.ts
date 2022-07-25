import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Newmar', 'newmarlucas');
  console.log('Isso vai demorar 2 segundos');
  console.log(await user.getAddresses());

  console.log('Isso vai se repetir 5 vezes');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
