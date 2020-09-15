import React from 'react'

export default function Info() {
    return (
        <div>
            <h1>Info</h1>
            <h3>Virtual Background Positions</h3>
            <img src="images/vb_positions.png" alt="Virtual Background Positions" style={{width: "100%"}}></img>
            <h3>How to locate the Model Identifier (Model ID) </h3>
            <p>Select "About This Mac" under the Apple Menu on your computer 
                and click "System Report". You should see the Model Identifier. 
            </p>
            <h3>How to find IP Address</h3>
            <p>Go to System Preferences. Open Network. You should see your IP address (192.168.X.X) 
                under "Turn Wi-Fi Off"
            </p>
        </div>
    )
}
