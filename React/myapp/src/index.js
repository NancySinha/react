import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import Parent from './family/Parent';
import Alphabet from './alphabet/alphabet';
import Counter from './alphabet/counter/counter';
import Lifecycle from './lifecycle/lifecycle';
import RemoteAPIData from './Remote/api.Data';
import Parentform from './Form/Parentform'

ReactDOM.render(<div>
                <App></App>
                <hr></hr>
                <Parent nameson="Umesh" namedaughter="Uma">Shah</Parent>
                <hr></hr>
                <Parent nameson="Omkar" namedaughter="Omi">Mehta</Parent>
                <hr></hr>
                <Parent nameson="Priyam" namedaughter="Priya">Malhotra</Parent>
                <hr></hr>
                <Alphabet fcolor="red" bcolor="yellow">R</Alphabet>
                <Alphabet fcolor="yellow" bcolor="red">A</Alphabet>
                <Alphabet fcolor="green" bcolor="pink">I</Alphabet>
                <Alphabet fcolor="pink" bcolor="purple">N</Alphabet>
                <Alphabet fcolor="black" bcolor="white">B</Alphabet>
                <Alphabet fcolor="brown" bcolor="pink">O</Alphabet>
                <Alphabet fcolor="red" bcolor="yellow">W</Alphabet>
                <hr></hr>
                <Counter></Counter>
                <hr></hr>
           
                </div>,
                document.getElementById("root"))
                ReactDOM.render(<Lifecycle></Lifecycle>,document.getElementById("life"))
                ReactDOM.render(<RemoteAPIData></RemoteAPIData>,document.getElementById("remote"))
                ReactDOM.render(<Parentform></Parentform>,document.getElementById("form"))