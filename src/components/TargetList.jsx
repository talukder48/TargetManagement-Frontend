import React, { Component } from 'react';
import TargetService from '../Services/TargetService';

class TargetList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            targets:[]
        }
        this.addTargte=this.addTargte.bind(this);
        this.editTarget=this.editTarget.bind(this)
        this.DeleteTarget=this.DeleteTarget.bind(this)
    }
    editTarget(target_code) {
        this.props.history.push(`/Add-Target/${target_code}`);
        console.log(target_code);
    }
    DeleteTarget(target_code) {
        TargetService.DeleteByTargetCode(target_code).then((res)=>{
            console.log(target_code);
            this.setState({targets:this.state.targets.filter(target=>target.target_code !== target_code)});
        })
    }
    componentDidMount(){
        TargetService.getTarget().then((res) => {
            console.log(res.data);
            this.setState({targets: res.data})
        })
    }
    addTargte(){
        this.props.history.push('/Add-Target/-1');
    }

    render() {
        return (
            <div>
               <body className="Body">
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addTargte}>Add Target</button>
                </div>

                <div className="row">
                    <div className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Target Code</th>
                                <th>start date</th>
                                <th>end date</th>
                                <th>Target Name</th>
                                <th>Active</th>
                                <th>Target Remarks</th>
                                <th>Parent Target</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.targets.map(
                                target=>
                                    <tr key={target.target_code}>
                                    <td>{target.target_code}</td>   
                                    <td>{target.start_date}</td>
                                    <td>{target.end_date}</td>
                                    <td>{target.target_description}</td>
                                    <td>{target.active_flag}</td>
                                    <td>{target.target_remarks}</td>
                                    <td>{target.parent_code}</td>
                                    <td> <button className="btn btn-info" onClick={()=>this.editTarget(target.target_code)}>Update</button>
                                    <button className="btn btn-danger" style={{marginLeft:"10px"}}  variant="danger" onClick={()=> {if (window.confirm('Are you sure you wish to delete this item?'))this.DeleteTarget(target.target_code)}}>Remove</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </div>

                </div>
                </body>
            </div>
        );
    }
}

export default TargetList;