import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import PropTypes from 'prop-types'

export default class Connected extends Component {
    constructor(props) {
        super(props);
    this.state = {
        ip: this.props.config_settings.ip,
        computer: this.props.config_settings.computer,
      };
      this.handleScan = this.handleScan.bind(this);
    }
    handleScan(data) {
      if (data) {
        this.setState({
          ip: data.split('|')[0],
          computer: data.split('|')[1],
        }, () => {
            this.props.saveConfigSetting(this.state.ip, this.state.computer)
        })
        console.log(this.state)
      }
    }
    handleError(err) {
      console.error(err);
    }

    onChange = (e) => {
        e.preventDefault() 
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.saveConfigSetting(this.state.ip, this.state.computer)
          })
    }

    render() {
        const {ip, computer} = this.props.config_settings
        return (
            <div style={{margin: "5px"}}>
                <p>
                    Can't connect to your computer. Open your desktop app to load your buttons! 
                    Scan the qr code if the ip address or the computer model isn't updated.
                </p>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "50%", margin: "5px" }}
                />
                <p style={{display: 'none'}}>IP Address: </p> 
                <input 
                type='text'
                name="ip"
                placeholder="IP Address:"
                style={styles}
                value={ip}
                onChange={this.onChange} 
                /> 
                <p style={{display: 'none'}}>Computer Name</p>     
                <input 
                type='text'
                name="computer" 
                placeholder="Computer:"
                style={styles}
                value={computer} // value of text in input is the state's title
                onChange={this.onChange} 
                />
            </div>
        )
    }
}

const styles = {
    flex: '10', 
    padding: '5px',
    margin: '5px',
    width: '150px',
    height: '30px',
    display:'none',
}

Connected.propTypes = {
    config_settings: PropTypes.object.isRequired,
    saveConfigSetting: PropTypes.func.isRequired,
}
