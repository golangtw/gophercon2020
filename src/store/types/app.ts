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

export enum AppMode {
  WEB = 'web',
  APP = 'app'
}

export enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile'
}

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
  RAINBOW_LIGHT = 'rainbow-light',
  RAINBOW_DARK = 'rainbow-dark'
}

export enum PopupType {
  SUBMIT_INFO = 'submitInfo',
  OPEN_SUBMIT = 'openSubmit',
  LOUDLY = 'loudly'
}
