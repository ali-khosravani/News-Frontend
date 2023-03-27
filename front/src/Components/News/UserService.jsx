import axios from "axios";

const URL_Users = "http://localhost:8081/api/v1/users";

class UserService{
    getUsers(){
        return axios.get(URL_Users);
    }
}

export default new UserService();