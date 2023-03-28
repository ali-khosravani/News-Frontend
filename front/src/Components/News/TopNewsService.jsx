import axios from "axios";

const URL_TopNews = "http://localhost:8081/TopNews";

class TopNewsService{
    getTopNews(){
        return axios.get(URL_TopNews);
    }
}

export default new TopNewsService();