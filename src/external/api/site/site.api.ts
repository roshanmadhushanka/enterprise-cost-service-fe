import axios from 'axios';
import {HttpMethod} from '../api.type';
import {Site} from '../../../store/site/site.type';

const BASE_URL = 'http://localhost:4000/sites';

class SiteApi {

    static async getAllSites(): Promise<Site[]> {
        const config =  {
            url: BASE_URL,
            method: HttpMethod.Get
        };
        const response = await axios(config);
        return response.data;
    }
}

export default SiteApi;