import { SYSTEM_CONFIG } from '@/config.js';
const axios = require('axios');
export default{
    getAccounts: async function(){
        let id = SYSTEM_CONFIG.API_KEY;
        let url = SYSTEM_CONFIG.API_URL + SYSTEM_CONFIG.GET_GOOGLE_ACCOUNTS + '?apiKey=' + id;

        return await axios.get(
            url, {
                headers: {
                    "accept": "*/*"
                }
            }
        );
    }
}