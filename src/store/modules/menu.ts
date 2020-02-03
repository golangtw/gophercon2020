import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';

import { MenuState, MenuItem } from '../types/menu';
import { RootState } from '../types/root';
import * as mutationTypes from '../mutation-types';

import { routes } from '../../router';

const namespaced: boolean = true;

const state: MenuState = {
  menu: routes.filter((route) => (route.meta.menuItem === true)),
  toggle: false
};

const getters: GetterTree<MenuState, RootState> = {
  menu: (state): MenuItem[] => state.menu,
  toggle: (state): boolean => state.toggle
};

const actions: ActionTree<MenuState, RootState> = {
  toggleMenu ({ commit }, status): void {
    commit(mutationTypes.TOGGLE_MENU, status);
  }
};

const mutations: MutationTree<MenuState> = {
  [mutationTypes.TOGGLE_MENU] (state, status: boolean) {
    state.toggle = status;
  }
};

export const menu: Module<MenuState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
