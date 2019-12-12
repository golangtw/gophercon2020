import { SightState } from './sight';

export interface AppState {
  mode: AppMode;
  device: DeviceType;
  sight: SightState;
  theme: ThemeType;
  isPopup: boolean;
  popupContent: string;
  validPopupTypes: Array<keyof typeof PopupType>;
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
  'RAINBOW-LIGHT' |
  'RAINBOW-DARK'
;

export enum PopupType {
  submitInfo = 'submitInfo',
  openSubmit = 'openSubmit',
  loudly = 'loudly'
}
