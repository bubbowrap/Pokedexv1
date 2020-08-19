import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        generations: [
            {id: 1, name: 'Kanto', offset: 0, max: 151},
            {id: 2, name: 'Johto', offset: 151, max: 100},
            {id: 3, name: 'Hoenn', offset: 251, max: 135},
            {id: 4, name: 'Sinnoh', offset: 386, max: 107},
            {id: 5, name: 'Unova', offset: 493, max: 156},
        ],
    }
});