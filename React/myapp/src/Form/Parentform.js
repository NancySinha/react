import React from 'react'
import Childform from './childform'
class Parentform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: ""
        }
    }


    captureInput = this.captureInput.bind(this)
    sayHello = this.sayHello.bind(this)


    captureInput(e) {
        console.log(e.target.value)
        this.setState({
            nameValue: e.target.value
        })
    }

    sayHello() {
        alert(this.state.nameValue)
    }



    render() {
        return (
            <div>
                Parent Form
                <input type="text" onChange={this.captureInput} name="myname"></input>&nbsp;
                <button onClick={this.sayHello}>Hello </button>
                <hr></hr>
                <br></br>
                child form:
                <Childform
                    callHello={this.captureInput}></Childform>
            </div>
        )
    }
}
export default Parentform;