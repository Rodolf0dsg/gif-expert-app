import axios from "axios";

export const giphtApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
    params: {
        lang: 'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY,
    }
});