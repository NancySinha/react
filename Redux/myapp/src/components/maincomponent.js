import React from 'react';
import UserListContainer from '../Container/userlistconatiner'
import UserDetailContainer from '../Container/userdetailcontainer';

class MainComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div>User list <UserListContainer></UserListContainer></div>
                <hr></hr>
                <div> User Details (of the name clicked in the lsit)
                     <UserDetailContainer></UserDetailContainer>
                </div>
            </div>
        );
    }

}
export default MainComponent