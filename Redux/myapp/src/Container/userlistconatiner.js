import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clickUserAction from '../Actions/userclickaction'

class UserListContainer extends React.Component {

    renderPropsReceived() {
        return this.props.myusers.map((u) => {
            return (
                <li key={u.id}
                    onClick={() => this.props.clickUserProp(u)}>
                    {u.first} &nbsp;{u.last}</li>
            )
        })
    }
    render() {
        return (
            <div>
                <br></br>
                {this.renderPropsReceived()}
            </div>
        );
    }
}



function convertStoreToProps(store) {
    return {
        myusers: store.users
    }
}

 function mapPropsToActionAndDispatchThem(dispatch) {
        return bindActionCreators({
            clickUserProp: clickUserAction
        }, dispatch)

    }



    export default connect(convertStoreToProps,mapPropsToActionAndDispatchThem)(UserListContainer)
