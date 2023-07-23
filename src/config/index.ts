export const config = {
  BASE_API_URL: process.env.NODE_ENV === 'development' 
    ? process.env.BASE_API_URL_DEV as string
    : process.env.BASE_API_URL_URL as string
};
