import './App.css';
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';
import TargetList from './components/TargetList';
import addTargetComponent from './components/addTargetComponent';
import Login from './components/LoginPages/Login';
//import UpdateTargetComponent from './components/UpdateTargetComponent';

function App() {
  return (
    <div>
        <Router>       
            <div className="container"> 
                    <Switch>
                         <Route path="/" exact component={Login}></Route> 
                         <Route path="/Target" component={TargetList}></Route>      
                         <Route path="/Add-Target/:target_code" component={addTargetComponent}></Route>  
                         {/* <Route path="/Mod-Target/:target_code" component={UpdateTargetComponent}></Route> */}
                                                                           
                    </Switch>                      
            </div>
        </Router>
    </div>
  );
}

export default App;
