import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import USerDetail from './usersetail';

class RemoteAPIData extends React.Component{
    constructor(props){
        super(props)
        this.state={
        users:[]
        }
        } 
    getRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((recieved)=>{
            console.log(recieved.data)
            this.setState({users:recieved.data })
            console.log(this.state.users)
        })
    }
    componentDidMount(){
        this.getRemoteData()

}
renderUSerDetail(){
    return this.state.users.map((user)=>{
        return(<USerDetail
            key={user.id}
            id={user.id}
            myname={user.name}
            myemail={user.email}>
        </USerDetail>)
    })
}
render(){
    return(
    <div>
        <hr></hr>
        <h1>Fetching Data!!!</h1>
        <table>
        <thead>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        </tr>
        </thead>
        <tbody>{ this.renderUSerDetail()}</tbody>
        </table> 
        </div > 
        
    );
}
}
export default RemoteAPIData

