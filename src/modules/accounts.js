import accountApi from '../api/accounts.js';
export const getAccounts = {
    state: {
        accounts: [],
        accountsLoadStatus: 0,
    },

    actions: {
        initAccounts( { commit } ){
            commit( 'setAccounts', null );
            commit( 'setAccountsLoadStatus', 0 );

        },
        loadAccounts( { commit } ){
            commit( 'setAccountsLoadStatus', 1 );

            accountApi.getAccounts()
                .then( function( response ) {
                    commit( 'setAccountsLoadStatus', 2 );
                    commit( 'setAccounts', response.data );
                })
                .catch( function( ){
                    commit( 'setAccounts', [] );
                    commit( 'setAccountsLoadStatus', 3 );
                });
        },


    },

    mutations: {
        setAccountsLoadStatus( state, status ){
            state.accountsLoadStatus = status;
        },

        setAccounts( state, status ){
            state.accounts = status;
        }
    },

    getters: {
        getAccountsLoadStatus( state ){
            return state.accountsLoadStatus;
        },
        getAccounts( state ){
            return state.accounts;
        }
    }
}