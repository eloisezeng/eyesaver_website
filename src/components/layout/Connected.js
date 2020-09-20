import React, { Component } from 'react'
// import QrReader from 'react-qr-reader'
import PropTypes from 'prop-types'

export default class Connected extends Component {
    constructor(props) {
        super(props);
    this.state = {
        ip: this.props.config_settings.ip,
        computer: this.props.config_settings.computer,
      };
      this.handleScan = this.handleScan.bind(this);
    } // FIX THIS: QR code reader
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
            <div style={{marginBottom: "20%"}}>
                <p style={{fontSize: "30px"}}>
                    Can't connect to your computer. Open your desktop app to load your buttons. 
                    Or if necessary, update the ip address or your computer's model identifier. 
                    See the Info page for detailed instructions
                    {/* Scan the qr code if the ip address or the computer model isn't updated. */}
                </p>
                {/* // FIX THIS
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "50%", margin: "5px"}}
                /> */}
                <p style={{display: 'visible', fontSize: "30px"}}>IP Address: </p> 
                <input 
                type='text'
                name="ip"
                placeholder="IP Address:"
                style={styles}
                value={ip}
                onChange={this.onChange} 
                /> 
                <p style={{display: 'visible', fontSize: "30px"}}>Model of Computer</p>     
                <input 
                type='text'
                name="computer" 
                placeholder="Model:"
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
    width: '100%',
    height: '50px',
    display:'visible',
    fontSize: '20px',
}

Connected.propTypes = {
    config_settings: PropTypes.object.isRequired,
    saveConfigSetting: PropTypes.func.isRequired,
}
