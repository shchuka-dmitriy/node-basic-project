const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = env === 'production' ? 3000 : 9634;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  STATIC_IMAGES_PATH: '/staticImages/',
  BASE_URL: `http://${ serverIP }:${ serverPort }/api/v1/`,
  HOME_URL: `http://${ serverIP }:3000`,
  ACCESS_TOKEN: 'accessToken',
  TABLET: 'tablet',
  NOTEBOOK: 'notebook',
  PHONE: 'phone',
};