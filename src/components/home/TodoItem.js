// type rce tab to create component w/ name of file
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    // we want to change the state in App .js, so we have to climb up components to reach the App component
    getStyle = () => {
        return {
            padding: '10px',
            position: 'relative'
        }
    }
    showvid_length = () => {
        return {visibility: this.props.todo.vid_length === "" ? "hidden" : "visible",
                fontSize: "12px"}
         
    }
    render() {
        const { id, title, position, mode, vid_length} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <button onClick={this.props.delTodo.bind(this, id)} style={delbtnstyle}>
                <i className="material-icons">delete</i>
                </button> 
                <button onClick={this.props.postButton.bind(this, position, mode, vid_length)} style={btnstyle}>
                    <h1>{ title }</h1> 
                    <p style={{fontSize: "12px"}}>
                        Position: { position } Mode: { mode } </p> 
                    <p style={this.showvid_length()}>Video Length: { vid_length }</p>
                </button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    postButton: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnstyle = {
    backgroundColor: "rgb(250, 169, 64)",
    color: "#333",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "18px",
    width: "90%",
    borderRadius: "14px",
    border: "2px solid #fcc544",
}
const delbtnstyle =  {
    backgroundColor: "rgb(0, 0, 0, 0)",
    color: "rgb(58, 55, 55)",
    fontSize: '30px',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    position: "absolute",
    top: "50%",
    right: "-3%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
}

export default TodoItem
