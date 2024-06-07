/* global UIENV */
// let env = typeof UIENV !== 'undefined' ? UIENV : process.env; // UIENV comes when run through webpack

// let envURL = env.hasOwnProperty('REACT_APP_API_URL') && env.REACT_APP_API_URL !== '' ? env.REACT_APP_API_URL : false;

// const API_AUTH_URL = process.env.AIC_PM_APP_API_AUTH_URL || 'https://aicpmdev.strahlenstudios.com/api/';  //staging
// const API_BASE_URL = process.env.AIC_PM_APP_API_BASE_URL || 'https://aicpmdev.strahlenstudios.com/api/';  //staging

// LOCAL
// const API_AUTH_URL = process.env.REACT_APP_AIC_PM_API_AUTH_URL || 'https://localhost:7285/api/'; 
// const API_BASE_URL = process.env.REACT_APP_AIC_PM_API_BASE_URL || 'https://localhost:7285/api/';
// DEVELOPMENT
const API_AUTH_URL = process.env.REACT_APP_AIC_PM_API_AUTH_URL || 'https://aicpmdev.strahlenstudios.com/api/';
const API_BASE_URL = process.env.REACT_APP_AIC_PM_API_BASE_URL || 'https://aicpmdev.strahlenstudios.com/api/';

const googleAppId = "key here";
const facebookAppId = "key here";
let config = {
    // 'moduleURL': envURL || 'http://127.0.0.1:3000',
    'sample': API_BASE_URL + '/sample',
    'auth_sample': API_AUTH_URL + '/auth_sample',
};

let pagination_params = {
    page_size: process.env.REACT_APP_PAGE_SIZE || 500,
    page_No: process.env.REACT_APP_PAGE_NO || 1,
};


// config.env = env;
config.API_AUTH_URL = API_AUTH_URL;
config.API_BASE_URL = API_BASE_URL;
config.facebookAppId = facebookAppId;
config.googleAppId = googleAppId;
config.PAGINATION_PARAMS = pagination_params;
export default config;
