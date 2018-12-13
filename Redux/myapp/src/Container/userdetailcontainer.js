import React from 'react'
import { connect } from 'react-redux'

class UserDetailContainer extends React.Component {

    render() {
        if(this.props.activeUser===null){
            return(<div>click on names to fetch details</div>)
        }
        else {
            return(
            <div> USer details From the Container!!
                <br></br>
                Name:{this.props.activeUser.first} &nbsp; {this.props.activeUser.last}
                <br></br>
                <br></br>
            
                <b>{this.props.activeUser.description}</b>
            </div>
        )
    }
}
}
function convertStoreToProps(store) {
    return {
        activeUser: store.clickeduser
    }
}
export default connect(convertStoreToProps)(UserDetailContainer);

