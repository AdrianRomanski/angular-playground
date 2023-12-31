import { Logger } from './logger.interface';

export const LegacyLogger: Logger = {
  prefix: 'legacy root',
  log(message: string): void {
    console.log(`${this.prefix} - (legacy) ${message}`);
  },
};
