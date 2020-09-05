import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ConfigSettings extends Component {
    state = {
        ip: "",
        computer: "",
    }
    // autosave when user types something
    onChange = (e) => {
        e.preventDefault() 
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.saveConfigSetting(this.state.ip, this.state.computer)
          })
    }
    
    // let user input another computer if options aren't available
    showOther = () =>  {
        console.log("show other")
        console.log(this.state.computer)
        console.log(this.state.computer === "other")
        return {visibility: this.state.computer !== 
            "MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports)" | "windows rename" | "0"
            ? "visible" : "hidden",
                flex: '10', 
                padding: '5px',
                margin: '5px',
                width: '100px',
                height: '30px',
            }
    }

    render() {
        const { ip, computer } = this.props.config_settings
        return (
            <div>
                <details style={{margin: "5px"}}>
                    <summary>
                        IP Address
                    </summary>
                    <p>Go to Network</p>
                </details>
                <input 
                type='text'
                name="ip"
                style={styles}
                value={ip} // value of text in input is the state's title
                onChange={this.onChange} 
                />
                <details style={{margin: "5px"}}>
                    <summary>
                        Computer
                    </summary>
                    <p>Go to About</p>
                </details>
                <select 
                    name="computer" 
                    id="computer"
                    value={computer}
                    onChange={this.onChange}
                    style={styles}>
                    <option value="0"></option>
                    <option value="MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports)">
                        MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports)</option>
                    <option value="windows rename">windows rename</option>
                    <option value="">Other</option>
                </select> 
                {/* other option */}
                {/* <input 
                type='text'
                name="computer" 
                placeholder="computer"
                style={this.showOther()}
                value={this.state.computer} // value of text in input is the state's title
                onChange={this.onChange} 
                /> */}
            </div>
        )
    }
}

const styles = {
    flex: '10', 
    padding: '5px',
    margin: '5px',
    width: '100px',
    height: '30px',
}

ConfigSettings.propTypes = {
    config_settings: PropTypes.object.isRequired,
    saveConfigSetting: PropTypes.func.isRequired,
}