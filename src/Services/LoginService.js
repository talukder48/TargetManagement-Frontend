import axios from 'axios';
const _LogIn_url="http://192.168.100.221:8081/api/LogIn";
class LoginService{
    GetApplicationAccess(UserId,Password){
        return axios.post(_LogIn_url+"/"+UserId+"/"+Password);        
    }
}
export default new LoginService();