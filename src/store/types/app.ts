export interface AppState {
  mode: AppMode;
  device: DeviceType;
}

export type AppMode =
  'WEB' |
  'APP'
;

export type DeviceType =
  'DESKTOP' |
  'MOBILE'
;
