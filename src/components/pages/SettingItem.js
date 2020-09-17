import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SettingItem extends Component {
    state = {
        id: this.props.setting.id,
        x: this.props.setting.x,
        y: this.props.setting.y,
    }
   
    // autosave when user types something
    onChange = (e) => {
        e.preventDefault() 
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.saveSetting(this.state.id, this.state.x, this.state.y)
          })
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
                fontSize: '20px',
            }
        }
    
    render() {
        const { name, label, img, mode} = this.props.setting
        return (
            <form style={formStyle}>
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
                min="0" max="5000"
                placeholder="x-pixel"
                />
                <input 
                type='number'
                name="y"
                style={btnStyle}
                value={this.state.y}
                onChange={this.onChange}
                min="0" max="5000" 
                placeholder="y-pixel"
                />
                <button
                type='button'
                value='Set'
                style={btnStyle}
                onClick={this.props.setPixels.bind(this, name)}>Set
                </button>
                <button
                type='button'
                value='Test'
                style={btnStyle}
                disabled={!(this.state.x && this.state.y)}
                onClick={this.props.postButton.bind(this, name, mode, "")}>Test
                </button>
            </form>     
            )
        }
    }

const formStyle = {
    margin: '5px', 
    fontSize: '20px',
}
const btnStyle = {
    padding: '10px', 
    width: "65px",
    margin: "5px",
    height: "35px",
    fontSize: '18px',
}

SettingItem.propTypes = {
    setting: PropTypes.object.isRequired,
    saveSetting: PropTypes.func.isRequired,
    postButton: PropTypes.func.isRequired,
    setPixels: PropTypes.func.isRequired,
}

