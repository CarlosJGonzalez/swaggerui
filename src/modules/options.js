import optionsApi from '@/api/options.js';
export const getOptions = {
    state: {
        options: [],
        optionsLoadStatus: 0,
        errMsg:null,
    },

    actions: {
        initOptions( {commit } ){
            commit( 'setOptions', null );
            commit( 'setOptionsLoadStatus', 0 );
            commit( 'setErrorMsg', null );
        },

        loadOptions( { commit }, data ){
            commit( 'setOptionsLoadStatus', 1 );

            optionsApi.getOptions( data )
                .then( function( response ) {
                    commit( 'setOptionsLoadStatus', 2 );
                    commit( 'setOptions', response.data );
                })
                .catch( function( error ){
                    commit( 'setOptions', [] );
                    commit( 'setOptionsLoadStatus', 3 );
                    commit( 'setErrorMsg', error );
                });
        }

    },

    mutations: {
        setErrorMsg( state, status ){
            state.errMsg = status;
        },

        setOptionsLoadStatus( state, status ){
            state.optionsLoadStatus = status;
        },

        setOptions( state, status ){
            state.options = status;
        }
    },

    getters: {
        getErrMsg( state ){
            return state.errMsg;
        },

        getOptionsLoadStatus( state ){
            return state.optionsLoadStatus;
        },

        getOptions( state ){
            return state.options;
        }
    }

}