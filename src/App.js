import React from 'react';
import './App.css';
import Data from './Data'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      UserData: Data,
      input: ''
    }
    
  }

  CreateTable = () => {
    let {UserData,input} = this.state
    return UserData.filter(item =>item.first_name.includes(input)).map( (item ,index ) => {
        return (
          <tr>
            <td key={index} style={{textAlign:'center'}}>{item.id}</td>
            <td style={{textAlign:'left'}}>{item.first_name}</td>
            <td >{item.last_name}</td>
            <td>{item.ip_address}</td>
          </tr>
        )
    })
  }


    
  

  render(){
    return(
      <div>
        <label style={{fontSize:50}}>Table Filter</label>
        <hr style={{margin:20}}></hr>
        <div style={{margin: 25}}>
        <select onChange={(e)=> this.setState({input: e.target.value})}>
          {this.state.UserData.map(item => (
            <option>{item.first_name}</option>
          ))}
        </select>
        
        <input placeholder="Search." style={{margin:5,fontSize:20,borderRadius:10}} onChange={(e)=>this.setState({input: e.target.value})}/> Now filter =>  {this.state.input}
        
          <table className="hoverTable">
          <tr>
            <th style={{width:70}}>ID</th>
            <th style={{width:150, textAlign:'left'}}>first name</th>
            <th style={{width:150, textAlign:'left'}}>Last name</th>
            <th style={{width:200, textAlign: 'left'}}>ip address</th>
          </tr>
          {this.CreateTable()}
          </table>
        </div>
      </div>
    )
  }
}

