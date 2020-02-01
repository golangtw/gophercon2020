import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';

import { TemplateState } from '../types/template';
import { RootState } from '../types/root';

import submitInfoDOMString from '../../../template/submitInfo.mod';
import openSubmitDOMString from '../../../template/openSubmit.mod';
import loudlyDOMString from '../../../template/loudly.mod';

const namespaced: boolean = true;

const state: TemplateState = {
  submitInfo: submitInfoDOMString,
  openSubmit: openSubmitDOMString,
  loudly: loudlyDOMString
};

const getters: GetterTree<TemplateState, RootState> = {
  submitInfo: (state): TemplateState['submitInfo'] => state.submitInfo,
  openSubmit: (state): TemplateState['openSubmit'] => state.openSubmit,
  loudly: (state): TemplateState['loudly'] => state.loudly
};

const actions: ActionTree<TemplateState, RootState> = {
};

const mutations: MutationTree<TemplateState> = {
};

export const template: Module<TemplateState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
};
