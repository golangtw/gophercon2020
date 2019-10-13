import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';

import { AppState } from '../types/app';
import { RootState } from '../types/root';
import * as mutationTypes from '../mutation-types';

const namespaced: boolean = true;

export const state: AppState = {
  mode: 'WEB',
  device: 'DESKTOP',
  sight: {
    width: 0,
    height: 0,
    cols: 0,
    rows: 0,
    gap: 0
  }
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
  }
};

export const actions: ActionTree<AppState, RootState> = {
  toggleMode ({ commit }, mode: AppState['mode']): any {
    commit(mutationTypes.APP_MODE, mode);
  },

  toggleDevice ({ commit }, device: AppState['device']): any {
    commit(mutationTypes.APP_DEVICE, device);
  },

  setSightMensure ({ commit }, sight: AppState['sight']): any {
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

  [mutationTypes.APP_SIGHT] (state, sight: AppState['sight']) {
    state.sight = sigth;
  }
};

export const app: Module<AppState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
