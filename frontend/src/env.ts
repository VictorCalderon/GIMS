// Environment variables for the frontend
const environment = process.env.REACT_APP_ENV;

let envApiUrl = '';

if (environment === 'production') {
  envApiUrl = `https://${process.env.REACT_APP_DOMAIN_PROD}`;
} else if (environment === 'staging') {
  envApiUrl = `https://${process.env.REACT_APP_DOMAIN_STAG}`;
} else {
  envApiUrl = `http://${process.env.REACT_APP_DOMAIN_DEV}`;
}

export const apiUrl = envApiUrl;
export const appName = process.env.REACT_APP_NAME;
export const appVersion = process.env.REACT_APP_VERSION;
export const appClient = process.env.REACT_APP_CLIENT;
