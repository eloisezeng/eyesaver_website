import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SettingItem extends Component {
    state = {
        id: this.props.setting.id,
        x: this.props.setting.x,
        y: this.props.setting.y,
    }
   
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value}) // there is no ip: 123 in this state
    }

    onSubmit = (e) => {
        e.preventDefault() 
        this.props.saveSetting(this.state.id, this.state.x, this.state.y)
    }

    // show dropdown button if there is an image source
    showDropdown = () => {
        return {display: this.props.setting.img === "" ? "none" : "visible",
                width: "50%",
        }
    }
    
    // show label instead of dropdown of img if there is no image source
    showCaption = () => {
        return {display: this.props.setting.img === "" ? "visible" : "none",
                width: '50%',

            }
        }
    
    render() {
        const { name, label, img, mode} = this.props.setting
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                {/* <input 
                type='text'
                name={name} 
                placeholder={label + ":"}
                style={{flex: '10', padding: '5px'}}
                value={input} // value of text in input is the state's title
                onChange={this.onChange} 
                /> */}
                <details style={this.showDropdown()}>
                    <summary>
                        { label }
                    </summary>
                    <img  
                    src={ "images/" + img + ".png"}
                    alt="button screenshots" 
                    style={{width: '200%'}}
                    ></img>
                </details>
                <p style={this.showCaption()}>{ label }</p>
                <input 
                type='number'
                name="x"
                style={btnStyle}
                value={this.state.x}
                onChange={this.onChange}
                min="0" max="3000"
                placeholder="x-pixel"
                />
                <input 
                type='number'
                name="y"
                style={btnStyle}
                value={this.state.y}
                onChange={this.onChange}
                min="0" max="3000" 
                placeholder="y-pixel"
                />
                <button
                type='button'
                value='Test'
                style={btnStyle}
                onClick={this.props.postButton.bind(this, name, mode, "")}>Test
                </button>
                <input
                type='submit'
                value='Save'
                style={btnStyle}
                />
            </form>     
            )
        }
    }

const formStyle = {
    margin: '5px', 
}
const btnStyle = {
    padding: '2px', 
    width: "65px",
    margin: "2px",
}

SettingItem.propTypes = {
    // setting: PropTypes.object.isRequired,
    saveSetting: PropTypes.func.isRequired
}

