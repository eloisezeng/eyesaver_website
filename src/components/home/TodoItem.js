// type rce tab to create component w/ name of file
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    // we want to change the state in App .js, so we have to climb up components to reach the App component
    getStyle = () => {
        return {
            // backgroundColor: 'rgb(255, 255, 255, 0.5)',
            padding: '10px',
            position: 'relative'
            // borderBottom: '1px #ccc dotted',
        }
    }
    render() {
        const { id, title, position, mode} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <button onClick={this.props.delTodo.bind(this, id)} style={delbtnstyle}>X</button> 
                <button onClick={this.props.postTodo.bind(this, position, mode)} style={btnstyle}>
                    <h1>{ title }</h1> 
                    <p style={{fontSize: "12px"}}>Position: { position } Mode: { mode }</p>
                </button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    postTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnstyle = {
    backgroundColor: "#57df9f",
    color: "#333",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "18px",
    width: "90%",
    borderRadius: "14px",
    border: "1px solid #2db173",
}
const delbtnstyle =  {
    backgroundColor: '#ff0000',
    color: 'white',
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
