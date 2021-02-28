import axios from 'axios';

export default class AxiosService {

    baseUrl = "http://localhost:5000/"

    post = (url, data, header = false) => {
        return axios.post(`${this.baseUrl}${url}`, data, header)
    }
}