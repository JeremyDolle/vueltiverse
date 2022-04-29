import { createStore, Module } from "vuex";

type State = {
    data: Array<unknown>,
    loading: boolean,
    error: null | Error,
};

const charactersModule: Module<State, unknown> = {
    state: () => ({
        data: [],
        loading: false,
        error: null,
    }),
    mutations: {
        setCharacters(state, payload) {
            state.data = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        setError(state, payload) {
            state.error = payload;
        },
    },
    actions: {
        async getCharacters({ commit }) {
            commit('setLoading', true);
            fetch('https://rickandmortyapi.com/api/character').then(response => {
                return response.json();
            }).then(data => {
                commit('setCharacters', data.results);
            }).catch(error => {
                commit('setError', error);
            });
            commit('setLoading', false);
        },
    },
};

type Store = {
    state: {
        charactersModule: Module<State, unknown>,
    }
};

export const store = createStore<Store>({
    modules: {
        charactersModule,
    },
});
