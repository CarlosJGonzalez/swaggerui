import { SYSTEM_CONFIG } from '@/config.js';
const axios = require( 'axios' );
export default {

    getOptions: async function( data ){
        let allowed = [
            'id'
        ];

        let payload = {};

        for( let property in data ){
            if( allowed.includes( property )){
                payload[ property ] = data[ property ];
            }
        }
<<<<<<< HEAD
        let apiKey = encodeURIComponent(SYSTEM_CONFIG.API_KEY);
=======
        let apiKey = SYSTEM_CONFIG.API_KEY;
>>>>>>> 64800b47d942ac1d008094019ec4b8cf7fb7e686
        let url = SYSTEM_CONFIG.API_URL + SYSTEM_CONFIG.GET_OPTIONS + '/' + payload.id + '?apiKey=' + apiKey;
console.log( url );
        return await axios.get(
            url
        );
    }
} 