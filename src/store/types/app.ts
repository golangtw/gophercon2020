import { Sight } from './sight';

export interface AppState {
  mode: AppMode;
  device: DeviceType;
  sight: SightState;
}

export type AppMode =
  'WEB' |
  'APP'
;

export type DeviceType =
  'DESKTOP' |
  'MOBILE'
;
