import React, { Component } from 'react';
import SettingItem from './SettingItem'
import PropTypes from 'prop-types'

class Settings extends Component {
    render() {
        return this.props.settings.map((setting) =>
        (<SettingItem 
            key={setting.id} 
            setting={setting} 
            saveSetting={this.props.saveSetting}
            postButton={this.props.postButton}
            setPixels={this.props.setPixels}
            />
            ),
        )
    }
}

Settings.propTypes = {
    settings: PropTypes.array.isRequired,
    saveSetting: PropTypes.func.isRequired,
    postButton: PropTypes.func.isRequired,
    setPixels: PropTypes.func.isRequired,
}
export default Settings;
