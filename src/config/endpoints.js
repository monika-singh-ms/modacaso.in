// export const API_BASE_URL = process.env.API_BASE_URL;
// export const URL = process.env.URL;
// const environment = process.env.NODE_ENV || 'development';

// console.log('API_BASE_URL',API_BASE_URL,'URL',URL,environment)
// export const ENDPOINTS = {
//   // CONTACT_US_V1: API_BASE_URL + "/api/form/createForm",
//   CONTACT_US_V1: API_BASE_URL + "/contact-us"
// };

// endpoints.js
export const API_BASE_URL = process.env.API_BASE_URL;
export const URL = process.env.URL;
const environment = process.env.NODE_ENV || 'development';
export const MOG_IMAGE_PATH = 'https://cdn.moglix.com/';
const MOG_API = process.env.MOGLIX_API
export const MOGLIX_LINK = process.env.MOG_LINK;
export const GA_ID = process.env.GA_ID
// console.log('API_BASE_URL:', API_BASE_URL, 'URL:', URL, 'Environment:', environment);

export const ENDPOINTS = {
  CONTACT_US_V1: API_BASE_URL + "/contact-us",
  CAT_LIST:MOG_API+'/search/api/v1/brand/search?type=m&orderBy=popularity&orderWay=desc&pageIndex=1&pageSize=20&brand=officearray&type=brandSite&bucketReq=Y',
  PROD_LIST_PAGE_INDEX:MOG_API+'/search/api/v1/brand/search?type=m&orderBy=popularity&orderWay=desc&pageIndex=',
  PROD_LIST_REST:'&pageSize=20&brand=officearray&type=brandSite&bucketReq=Y'
};
