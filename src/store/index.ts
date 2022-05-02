import { createStore, Module } from "vuex";

type State = {
    data: Array<unknown>,
    pageInfo?: {
        hasNextPage: false,
        hasPreviousPage: false,
        page: number,
    },
    loading: boolean,
    error: null | Error,
};

const charactersModule: Module<State, unknown> = {
    state: () => ({
        data: [],
        pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            page: 1,
        },
        loading: false,
        error: null,
    }),
    mutations: {
        setPageInfo(state, payload) {
            state.pageInfo = payload;
        },
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
        async getCharacters({ commit }, data = {}) {
            const query = `/?${Object.keys(data)
                .map((key) => `${key}=${data[key]}`)
                .join("&")}`;

            commit('setLoading', true);
            fetch(`https://rickandmortyapi.com/api/character${query}`).then(response => {
                return response.json();
            }).then(data => {
                commit('setCharacters', data.results);
                commit('setPageInfo', {
                    hasNextPage: data.info.next !== null,
                    hasPreviousPage: data.info.prev !== null,
                    page: Number(data.info.next.split('page=')[1]) - 1,
                });
            }).catch(error => {
                commit('setError', error);
            });
            commit('setLoading', false);
        },
    },
};

const characterModule: Module<State, unknown> = {
    state: () => ({
        data: [],
        loading: false,
        error: null,
    }),
    mutations: {
        setCharacter(state, payload) {
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
        async getCharacter({ commit }, { id }) {
            commit('setLoading', true);
            fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => {
                return response.json();
            }).then(data => {
                commit('setCharacter', data);
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
        characterModule: Module<State, unknown>,
    }
};

export const store = createStore<Store>({
    modules: {
        charactersModule,
        characterModule,
    },
});
