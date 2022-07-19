import { DeviceImplementation } from './device-implementation';

export class Radio implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'Radio JBL';

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (this.volume < 0 || this.volume > 100) return;

    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }
}
