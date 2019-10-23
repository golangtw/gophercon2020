import { SightState } from './sight';

export interface AppState {
  mode: AppMode;
  device: DeviceType;
  sight: SightState;
  theme: ThemeType;
  isPopup: boolean;
}

export type AppMode =
  'WEB' |
  'APP'
;

export type DeviceType =
  'DESKTOP' |
  'MOBILE'
;

export type ThemeType =
  'LIGHT' |
  'DARK' |
  'RAINBOW'
;
