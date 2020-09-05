import React, { Component } from 'react'

export default class Connected extends Component {
    render() {
        const { connected } = this.props
        return (
            <div style={{margin: "10px"}}>
                <p style={{display: connected === false? 'visible': "none"}}>
                    Can't connect to your computer. Open the computer app to load your buttons! 
                    </p>
            </div>
        )
    }
}
