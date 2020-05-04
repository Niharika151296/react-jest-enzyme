import React , {Component } from 'react';
import './listComponent.css';
import user from '../../services/user';
class ListComponent extends Component {

    constructor(props) {
        super(props);
        this.state ={
          users:[],
          msg:false,
          uname:'',
          status:'Loading'
           }
      }
       
      componentDidMount(){
       this.fetchUsers()      
      }

      fetchUsers = async () =>{
        const users = await user();      
        this.setState({status:'done',users})
      }

     welcome = () => {
        this.setState({msg:true})
    }

     
    handleChange = (e) => {
        this.setState({uname:e.target.value})
    }
 
    
 render(){
     let user;
      if(this.state.users.length>0)
      user = this.state.users.map(u=>
        (
        <div className="listView" key={u.id}>
          <div className="c2">Name: {u.employee_name}</div>
          <div className="salary">Salary: {u.employee_salary}</div>
          <div className="age"> Age: {u.employee_age}</div>
        </div>
        ))

    return(
        <>
           <button id="btn1" onClick={this.welcome}>Show Welcome Msg</button>
           <p className="welcome">{this.state.msg?"Welcome":" "}</p>
           <button id="btn2" disabled={!this.state.msg} >Show name</button>
           <br/>
           <input type="text" id="input1" onChange={(e)=>this.handleChange(e)}/>
           <p id="inputPara" className="inputPara">Name is : {this.state.uname}</p> 
           <div>{this.state.status}</div>
           {this.state.users&&<div>{user}</div>}
        </>
    )
  }
}


export default ListComponent