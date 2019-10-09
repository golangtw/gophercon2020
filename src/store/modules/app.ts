import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';

import { AppState } from '../types/app';
import { RootState } from '../types/root';
import * as mutationTypes from '../mutation-types';

const namespaced: boolean = true;

export const state: AppState = {
  sight: {
    width: 0,
    height: 0,
    spot: {
      x: 0,
      y: 0
    }
  }
};

export const getters: GetterTree<AppState, RootState> = {
  sight (state): AppState['sight'] {
    return state.sight;
  }
};

export const actions: ActionTree<AppState, RootState> = {
  setSight ({ commit }, data: AppState['sight']): any {
    commit(mutationTypes.SIGHT, data);
  }
};

export const mutations: MutationTree<AppState> = {
  [mutationTypes.SIGHT] (state, data: AppState['sight']) {
    state.sight = data;
  }
};

export const app: Module<AppState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
