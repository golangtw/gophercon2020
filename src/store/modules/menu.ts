import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';

import { MenuState, MenuItem } from '../types/menu';
import { RootState } from '../types/root';

import { routes } from '../../router';

const namespaced: boolean = true;

const state: MenuState = {
  menu: routes.filter((route) => (route.meta.menuItem === true))
};

const getters: GetterTree<MenuState, RootState> = {
  menu: (state): MenuItem[] => state.menu
};

const actions: ActionTree<MenuState, RootState> = {};

const mutations: MutationTree<MenuState> = {};

export const menu: Module<MenuState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
