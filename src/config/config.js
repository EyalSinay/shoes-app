const { REACT_APP_API_KEY: API_KEY } = process.env;

const FIX_CORS = "https://nameless-citadel-58066.herokuapp.com/";

const BASE_URL = `${FIX_CORS}https://${API_KEY}.mockapi.io/`;

export { BASE_URL };