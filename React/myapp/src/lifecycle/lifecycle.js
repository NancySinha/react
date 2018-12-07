import ReactDOM from 'react-dom';
import React from 'react';
class Lifecycle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dummyVariable:0
        }
            this.changeState =this.changeState.bind(this)
        
    }

componentWillMount(){
console.log("componenet Will Mount now")
console.log(this.state.dummyVariable)
this.setState({
    dummyVariable: this.state.dummyVariable+1
})
}

componentDidMount(){
console.log("componenet did Mount ")
console.log(this.state.dummyVariable)
}

componentWillUpdate(){
    console.log("componenet will update")
}
componentDidUpdate(){
    console.log("componenet did update")
}

changeState(){
    this.setState({ dummyVariable: this.state.dummyVariable+1
    })
    if(this.state.dummyVariable > 10){
        ReactDOM.unmountComponentAtNode(document.getElementById("life"))
    }
    
}
componentWillUnmount(){
    console.log(" thiscomponenet will Unmount from view")
}
render() { 
return ( 
<div>Exploring Componenet Lifecycle
    <br></br>
    <button onClick = {this.changeState}> Change State{this.state.dummyVariable}</button>
</div>
);
}
}
export default Lifecycle; 
 
