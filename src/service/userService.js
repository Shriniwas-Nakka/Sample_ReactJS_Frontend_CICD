import AxiosService from './axiosService';
const axiosService = new AxiosService();

export default class UserService {

    register = (data) => {
        return axiosService.post('user/add', data);
    }

}
