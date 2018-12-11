import React from 'react';
import UserListContainer from '../Container/userlistconatiner'

class MainComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div>User list <UserListContainer></UserListContainer></div>
                <hr></hr>
                 <div> User Details (of the name clicked in the lsit)</div>
            </div>
        );
    }

}
export default MainComponent