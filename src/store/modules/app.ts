import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';

import { AppState } from '../types/app';
import { RootState } from '../types/root';
import * as mutationTypes from '../mutation-types';

const namespaced: boolean = true;

export const state: AppState = {
  mode: 'WEB',
  device: 'DESKTOP',
  sight: {
    offset: 0,
    containerWidth: 0,
    containerHeight: 0,
    width: 0,
    height: 0,
    cols: 0,
    rows: 0,
    gap: 0
  },
  theme: 'LIGHT'
};

export const getters: GetterTree<AppState, RootState> = {
  mode (state): AppState['mode'] {
    return state.mode;
  },

  device (state): AppState['device'] {
    return state.device;
  },

  sight (state): AppState['sight'] {
    return state.sight;
  },

  theme (state): AppState['theme'] {
    return state.theme;
  }
};

export const actions: ActionTree<AppState, RootState> = {
  toggleMode ({ commit }, mode: AppState['mode']): any {
    commit(mutationTypes.APP_MODE, mode);
  },

  toggleDevice ({ commit }, device: AppState['device']): any {
    commit(mutationTypes.APP_DEVICE, device);
  },

  toggleTheme ({ commit }, theme: AppState['theme']): any {
    commit(mutationTypes.APP_THEME, theme);
  },

  setSightMeasure ({ commit }, sight: AppState['sight']): any {
    commit(mutationTypes.APP_SIGHT, sight);
  }
};

export const mutations: MutationTree<AppState> = {
  [mutationTypes.APP_MODE] (state, mode: AppState['mode']) {
    state.mode = mode;
  },

  [mutationTypes.APP_DEVICE] (state, device: AppState['device']) {
    state.device = device;
  },

  [mutationTypes.APP_THEME] (state, theme: AppState['theme']) {
    state.theme = theme;
  },

  [mutationTypes.APP_SIGHT] (state, sight: AppState['sight']) {
    state.sight = sight;
  }
};

export const app: Module<AppState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
