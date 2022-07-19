import { Radio } from './devices/radio';
import { Tv } from './devices/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume
): void {
  abstraction.togglePower();

  // Type Guard
  if (!('volumeUp' in abstraction)) return;
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(radioRemoteControl);
clientCode(tvRemoteControl);
