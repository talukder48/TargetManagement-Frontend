import React, { Component } from 'react';
import LoginService from '../../Services/LoginService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            UserID   : '',
            Password : '',    
        }
        this.SubmitLogIn=this.SubmitLogIn.bind(this);
    }
    UserIDHandler=(event)=>{
        this.setState({UserID:event.target.value})
    }
    PasswordHandler=(event)=>{
        this.setState({Password:event.target.value})
    }
    getTitle() { 
           return <h4 className="text-center">User LogIn</h4>
    }
    SubmitLogIn= (event)=>{
        event.preventDefault();         
            let UserId= this.state.UserID;
            let Password =this.state.Password;
        console.log((UserId+""+Password));
    LoginService.GetApplicationAccess(UserId,Password).then(res=>{
        this.props.history.push('/Target');
    })

    }
    render() {
        return (
            <div>
                 <div>
               <div className="container">
                    <div className="row" style={{align: "center"}}>
                        <div className="card col-md-6 offset-md-3 offset-md-2 ">
                            {this.getTitle() }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>User Id</label>
                                        <input type="text" className="form-control" name="UserID" value={this.state.UserID} placeholder="User Id " onChange={this.UserIDHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" className="form-control" name="Password" value={this.state.Password}  placeholder="Password " onChange={this.PasswordHandler}/>                            
                                    </div>
                                   
                                    <button className="btn btn-success" onClick={this.SubmitLogIn}>Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            </div>
        );
    }
}

export default Login;