import Vue from 'vue';
import Vuex from 'vuex';
Vue.use( Vuex );

import { getAccounts } from '@/modules/accounts.js';
import { getOptions } from '@/modules/options.js';
export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    modules:{
        getAccounts,
        getOptions,
    }
})