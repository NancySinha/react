import React from 'react';
class USerDetail extends React.Component {
    state = {}
    render() {
        return (
            <tr>
                <td >{this.props.id}</td>
                <td>{this.props.myname}</td>
                <td>{this.props.myemail}</td>
            </tr>
        );
    }
}

export default USerDetail;