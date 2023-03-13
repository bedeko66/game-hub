import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'df75fedd7a6040668775558420a6a7a8'
    }
})