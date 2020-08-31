import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: "",
        position: "",
        mode: "",
    }
    // e is event in parameter
    // set title to whatever is typed into the event
    // e.target.name is the name in the html tag that has an onChange function
    onChange = (e) => this.setState({ [e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault() // prevent form from submitting to actual file
        // call props method so you can pass up the method App
        this.props.addTodo(this.state.title, this.state.position, this.state.mode)
        this.setState({ title: "", position: "", mode: ""})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input 
                    type='text'
                    name='title' 
                    placeholder='Title: '
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title} // value of text in input is the state's title
                    onChange={this.onChange} //  this.onChange is the name of the method/function in the class
                    />
                </form>
                <form style={{flexFlow: "row wrap"}}>
                    <select 
                    name="position" 
                    id="position" 
                    value={this.state.position}
                    onChange={this.onChange}
                    style={{flex: '10', padding: '5px', width: "50%"}}>
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
                    style={{flex: '10', padding: '5px', width: "50%"}}>
                    <option>Mode</option>
                    <option value="default">default</option>
                    <option value="distracted">distracted</option>
                    </select>   
                </form>
                <input
                type='submit'
                value='Submit'
                className='btn'
                style={{flex: '10', padding: '5px', width: "60px"}}
                />
            </div>
            )
        }
    }

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
