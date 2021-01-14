const axios = require('axios');
const https = require('https');

let getToken = async (url, credential) => {
   
    
        return axios.post(url, credential,{
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
              })
        } );        
    
};
module.exports = getToken;