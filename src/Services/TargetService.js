
import axios from 'axios';
const TargetApiBaseUrl="http://192.168.100.221:8080/api/target/data";
const SaveApiBaseUrl="http://192.168.100.221:8080/api/target/save";
const SingleTargetUrl="http://192.168.100.221:8080/api/GetSingle";

class TargetService{
  getTarget(){
      return axios.get(TargetApiBaseUrl);
  }
  createTarget(Targets){
    return axios.post(SaveApiBaseUrl,Targets)
  }
  getSingleTarget(Targets){
    return axios.get(SingleTargetUrl+"/"+Targets);
  }
}
export default new TargetService();