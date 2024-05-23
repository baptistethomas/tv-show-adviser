import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShopwApi{
    static async getPopularShows(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return response.data.results
    }
}