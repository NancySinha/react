import React from 'react';
import Daughter from './Daughter';
import Son from './Son';


class Parent extends React.Component{
render() {
    return(
    <div>
     <div>
                We are parents!!!! <b>({this.props.children}) family. </b>
                <Daughter name={this.props.namedaughter}></Daughter>
                <Son name={this.props.nameson}></Son>
            </div> 
<Daughter></Daughter>
        <Son></Son>
</div>
);
}
}

export default Parent;