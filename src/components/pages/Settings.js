import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Settings extends Component {
    state = {
        ip: "",
    }
    // e is event in parameter
    // set title to whatever is typed into the event
    // e.target.name is the name in the html tag that has an onChange function
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault() // prevent form from submitting to actual file
        // call props method so you can pass up the method App
        // this.props.addTodo(this.state.title, this.state.position, this.state.mode)
        // this.setState({ title: "", position: "", mode: ""})
    }
    render() {
        return (
            <div>
                <h1>Settings</h1>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input 
                    type='text'
                    name='ip' 
                    placeholder='IP Address: '
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.ip} // value of text in input is the state's title
                    onChange={this.onChange} //  this.onChange is the name of the method/function in the class
                    />
                    <input
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{flex: '10', padding: '5px', width: "60px"}}
                    />
                </form>     
            </div>
            )
        }
    }

Settings.propTypes = {
    // settings: PropTypes.func.isRequired
}

