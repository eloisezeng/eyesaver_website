import React from 'react'

export default function Info() {
    return (
        <div style={{marginBottom: "60px"}}>
            <h1>Info</h1>
            <details>
                <summary><h2>Adding Buttons</h2></summary>
                <h3>Virtual Background Positions</h3>
                <img src="images/vb_positions.png" alt="Virtual Background Positions" style={{width: "100%"}}></img>
                <h3>Modes</h3>
                <ul> 
                    <li><strong>Default</strong> mode is for clicking your default virtual background. A common one is paying attention.
                    </li>
                    <li><strong>Action</strong> mode is for any actions like waving your hand or nodding. 
                    The computer clicks on your action virtual background and waits for a specified amount of time.
                    Then it clicks your default virtual background.
                    </li>
                    <li><strong>Distracted</strong> mode is for distractions. The computer  
                    clicks on your distracted virtual background and waits for a specified amount of time. 
                    Then it stops your video and clicks None (no virtual background). You open your video when you're ready to participate.
                    </li>
                    <li><strong>None</strong> mode is the mode for no background. You shouldn't need to use this unless you accidentally deleted the None Button.</li>
                </ul>
                <h3>Video Length</h3>
                <p>This box is very small. </p>
            </details>
            <details>
                <summary><h2>Mac OS</h2></summary>
                <h3>How to locate the Model (Model Identifier) </h3>
                <p>Select "About This Mac" under the Apple Menu on your computer 
                    and click "System Report". You should see the Model Identifier. 
                </p>
                <h3>How to find IP Address</h3>
                <p>Go to System Preferences. Open Network. You should see your IP address (192.168.X.X) 
                    under "Turn Wi-Fi Off"
                </p>
            </details>
            <details>
                <summary><h2>Windows OS</h2></summary>
                <h3>How to locate the Model </h3>
                <p>Open System Information. You should see the Model name next to System Model. 
                    (Hover over the three dots to see the full name.)
                </p>
                <h3>How to find IP Address</h3>
                <p>Search for Wifi-Settings. Click Hardware properties. You should see your IP address (192.168.X.X) 
                    next to IPv4 address.
                </p>
            </details>
        </div>
    )
}
