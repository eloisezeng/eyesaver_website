import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class AddTodo extends Component {
    state = {
        title: "",
        position: "",
        mode: "",
        vid_length: "",
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value})
    onSubmit = (e) => {
        e.preventDefault() // prevent form from submitting to actual file
        // call props method so you can pass up the method App
        this.props.addTodo(
            this.state.title, 
            this.state.position, 
            this.state.mode,
            this.state.vid_length)
        this.setState({ title: "", position: "", mode: "", vid_length: ""})
    }
    render() {
        return (
            <div style={{position: "relative"}}>
                <form onSubmit={this.onSubmit} style={{display: 'flex', position: "fixed", bottom: '0', marginBottom: '20%'}}>
                    <input 
                    type='text'
                    name='title' 
                    placeholder='Title: '
                    style={inputStyle}
                    value={this.state.title} // value of text in input is the state's title
                    onChange={this.onChange} //  this.onChange is the name of the method/function in the class
                    />
                    <select 
                    name="position" 
                    value={this.state.position}
                    onChange={this.onChange}
                    style={inputStyle}>
                    <option>Position</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    </select>
            
                    <select 
                    name="mode" 
                    id="mode"
                    value={this.state.mode}
                    onChange={this.onChange}
                    style={inputStyle}>
                    <option>Mode</option>
                    <option value="default">default</option>
                    <option value="action">action</option>
                    <option value="distracted">distracted</option>
                    <option value="none">none</option>
                    </select> 

                    <input 
                    type="number" 
                    id="vid_length" 
                    name="vid_length" 
                    min="1" max="30"
                    value={this.state.vid_length}
                    onChange={this.onChange}
                    placeholder="Video Length"
                    style={inputStyle}>
                    </input>
                    <input
                    type='submit'
                    value='Add'
                    className='btn'
                    style={inputStyle}
                    />
                </form>
                <footer style={footerStyle}>
                    <link rel="stylesheet" 
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                    <Link style={linkStyle} to="/home">
                        <i style={{fontSize:"50px"}} className="material-icons">home</i>
                    </Link>
                    <Link style={linkStyle} to="/settings">
                        <i style={{fontSize:"50px"}} className="material-icons">settings</i>
                    </Link>
                    <Link style={linkStyle} to="/info">
                        <i style={{fontSize:"50px"}} className="material-icons">info</i>
                    </Link>
                    <Link style={linkStyle} to="/about">
                        <i style={{fontSize:"50px"}} className="material-icons">help</i>
                    </Link>
                </footer> 
            </div>
            )
        }
    }
    
const linkStyle = {
    color: "black",
    paddingLeft: "10px",
    paddingRight: "10px",
    margin: "15px",
}

const footerStyle = {
    backgroundColor: "#89e4b9",
    border: "1px solid #2db173",
    textAlign: "center",
    padding: "5px 5px",
    bottom: "0",
    position: "fixed", /* might not work on mobile */
    width: "100%",
    height: "10%",
}

const inputStyle = {
    height: '40px', 
    width: '80px',
    padding: '5px', 
    fontSize: '16px',
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
