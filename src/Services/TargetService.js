
import axios from 'axios';
const TargetApiBaseUrl="http://192.168.100.221:8080/api/target/data";
const SaveApiBaseUrl="http://192.168.100.221:8080/api/target/save";
const SingleTargetUrl="http://192.168.100.221:8080/api/GetSingle";
const UpdateTargetUrl="http://192.168.100.221:8080/api/Update";
const DeleteTargetUrl="http://192.168.100.221:8080/api/Delete";
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
  updateTarget(Targets,target_cpde){
    return axios.put(UpdateTargetUrl+"/"+target_cpde,Targets);
  }

  DeleteByTargetCode(Target_code){
    return axios.delete(DeleteTargetUrl+"/"+Target_code);
  }

}
export default new TargetService();