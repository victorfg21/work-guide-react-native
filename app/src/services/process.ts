import http from "../libs/api";
import { IProcessData } from "../types/processTypes"

class ProcessDataService {
    getAll() {
        return http.get<Array<IProcessData>>("/process");
    }
}


export default new ProcessDataService();