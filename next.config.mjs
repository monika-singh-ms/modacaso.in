
// next.config.mjs
import path from 'path';
import { config } from 'dotenv';
import pkg from 'lodash';
const { merge } = pkg;

config(); // Load environment variables from .env file

const __dirname = new URL('.', import.meta.url).pathname;

const mergedConfig = {
  development: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
      URL: "http://localhost:3000",
      // API_BASE_URL: 'https://globalinternal-qa.moglilabs.com',
      NEXT_PUBLIC_CLARITY_PROJECT_ID: 'mffsq2zxjb',
      GA_ID:'G-TK2E8M7TX9'
    },
    images: {
      domains: ['localhost', 'cdn.moglix.com'],
    },
    compress: true,
  },
  UAT: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'UAT', 'styles')],
    },
    env: {
      // URL: "https://uat.officearray.com/",
      // API_BASE_URL: 'https://globalinternal-qa.moglilabs.com',
      // NEXT_PUBLIC_CLARITY_PROJECT_ID: 'mffsq2zxjb',
      // MOGLIX_API:'https://search.moglix.com',
      // MOG_LINK:'https://www.moglix.com',
      // GA_ID:'G-TK2E8M7TX9'
    },
    images: {
      domains: ['localhost', 'cdn.moglix.com'],
    },
  },
  production: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'production', 'styles')],
    },
    env: {
      // URL: "https://www.officearray.com/",
      // API_BASE_URL: 'https://global-internal.zoglix.com',
      // NEXT_PUBLIC_CLARITY_PROJECT_ID: 'mffsq2zxjb',
      // MOGLIX_API:'https://search.moglix.com',
      // MOG_LINK:'https://www.moglix.com',
      // GA_ID:'G-TK2E8M7TX9'
    },
    images: {
      domains: ['cdn.moglix.com'],
    },
  },
};

const environment = process.env.NODE_ENV || 'development';
// console.log('Environment:', environment);
// console.log('Merged Config:', mergedConfig[environment]);

export default merge({}, mergedConfig[environment]);

