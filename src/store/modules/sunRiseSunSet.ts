import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';
import axios from 'axios';

import { SunRiseSunSetState, SunRiseSunSetAPIResponsePayload } from '../types/sunRiseSunSet';
import { RootState } from '../types/root';
import * as mutationTypes from '../mutation-types';

const namespaced: boolean = true;

export const state: SunRiseSunSetState = {
  sunrise: new Date(),
  sunset: new Date()
};

export const getters: GetterTree<SunRiseSunSetState, RootState> = {
  sunrise: (state): SunRiseSunSetState['sunrise'] => state.sunrise,
  sunset: (state): SunRiseSunSetState['sunset'] => state.sunset
};

export const actions: ActionTree<SunRiseSunSetState, RootState> = {
  async getSunRiseSunSetData ({ commit }): Promise<void> {
    const res = await axios.get('https://api.sunrise-sunset.org/json?lat=25.0375198&lng=121.5636796&date=today&formatted=0');
    commit(mutationTypes.SUNRISE_SUNSET, res.data);
  }
};

export const mutations: MutationTree<SunRiseSunSetState> = {
  [mutationTypes.SUNRISE_SUNSET] (state, data: SunRiseSunSetAPIResponsePayload) {
    state.sunrise = new Date(data.results.sunrise);
    state.sunset = new Date(data.results.sunset);
  }
};

export const sunRiseSunSet: Module<SunRiseSunSetState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
