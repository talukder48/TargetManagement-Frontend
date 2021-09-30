import React, { Component } from 'react';
import TargetService from '../Services/TargetService';
class UpdateTargetComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            target_code		   : this.props.match.params.target_code,
            start_date         : '',
            end_date           : '',
            target_description : '',
            active_flag        : '',
            target_remarks     : '',
            parent_code        : ''            
        }
        this.TargetStartDateHandler=this.TargetStartDateHandler.bind(this);
        this.TargetEndDateHandler=this.TargetEndDateHandler.bind(this);
        this.RemarksHandler=this.RemarksHandler.bind(this);
        this.ActivationHandler=this.ActivationHandler.bind(this);
        this.ParentCodeHandler=this.ParentCodeHandler.bind(this);
        this.CodeHandler=this.CodeHandler.bind(this);
        this.TargetNameHandler=this.TargetNameHandler.bind(this);
        this.UpdateTargetComponent=this.UpdateTargetComponent.bind(this);
    }
    UpdateTargetComponent= (event)=>{
        event.preventDefault();
        let Targets={target_code: this.state.target_code,
                     start_date:this.state.start_date,
                     end_date:this.state.end_date,
                     target_description:this.state.target_description,
                     active_flag:this.state.active_flag,
                     target_remarks:this.state.target_remarks,
                     parent_code:this.state.parent_code};
        console.log(JSON.stringify(Targets));
        TargetService.createTarget(Targets).then(res=>{
            this.props.history.push('/')
        });

    }

    componentDidMount(){
        TargetService.getSingleTarget(this.state.target_code).then((res)=>{
            let Targets=res.data;
            this.setState({target_code: Targets.target_code,
                start_date:Targets.start_date,
                end_date:Targets.end_date,
                target_description:Targets.target_description,
                active_flag:Targets.active_flag,
                target_remarks:Targets.target_remarks,
                parent_code:Targets.parent_code});
        });
    }

    Cancel(){
        this.props.history.push('/')
    }
    TargetStartDateHandler=(event)=>{
        this.setState({start_date:event.target.value})
    }
    TargetEndDateHandler=(event)=>{
        this.setState({end_date:event.target.value})
    }
    RemarksHandler=(event)=>{
        this.setState({target_remarks:  event.target.value})
    }
    ActivationHandler=(event)=>{
        this.setState({ active_flag:  event.target.value})
    }
    ParentCodeHandler=(event)=>{
        this.setState({ parent_code:  event.target.value})
    }
    CodeHandler=(event)=>{
        this.setState({ target_code:  event.target.value})
    }
    TargetNameHandler=(event)=>{
        this.setState({ target_description:  event.target.value})
    }
 
    render() {
        return (
            <div>
               <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-2 ">
                            <h4 className="text-center">Add Target</h4>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Target Code</label>
                                        <input type="text" className="form-control" name="target_code" value={this.state.target_code} placeholder="Target Code" onChange={this.CodeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Target Name</label>
                                        <input type="text" className="form-control" name="target_description" value={this.state.target_description}  placeholder="Target Name" onChange={this.TargetNameHandler}/>                            
                                    </div>
                                    <div className="form-group">
                                        <label>Start Date</label>
                                        <input type="text" className="form-control" name="start_date" value={this.state.start_date}  placeholder="Start Date" onChange={this.TargetStartDateHandler}/>                            
                                    </div>
                                    <div className="form-group">  
                                        <label>End Date</label>
                                        <input type="text" className="form-control" name="end_date" value={this.state.end_date}  placeholder="End Date" onChange={this.TargetEndDateHandler}/>                            
                                    </div>
                                    <div className="form-group">

                                        <label>Activation Type</label>
                                        <input type="text" className="form-control" name="active_flag" value={this.state.active_flag}   onChange={this.ActivationHandler}/>                            
                                        </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <input type="text" className="form-control" name="target_remarks" value={this.state.target_remarks}  placeholder="Remarks" onChange={this.RemarksHandler}/>                            
                                    </div>
                                    <div className="form-group"> 
                                        <label>Parent Code</label>
                                        <input type="text" className="form-control" name="parent_code" value={this.state.parent_code}  placeholder="Parent Code" onChange={this.ParentCodeHandler}/>                            
                                    </div>
                                    <button className="btn btn-success" onClick={this.UpdateTargetComponent}>Save Target</button>
                                    <button className="btn btn-danger" onClick={this.Cancel.bind(this)} style={{marginLeft : "100px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default UpdateTargetComponent;