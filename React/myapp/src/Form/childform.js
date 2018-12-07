import React from 'react'

class Childform extends React.Component {
    render(){
return(
    <div>
        <input type="text" onChange={this.props.callHello}></input>
        
    </div>

)
    }
    
}
export default Childform