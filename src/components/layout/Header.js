// function based component bc it's all markup
// type rfc tab

import React from 'react'

export default function header() {
    return (
        <header style={headerstyle}>
            <h1>Eye Saver</h1>
        </header>
    )
}

const headerstyle = {
    background: '#333',
    color: 'white', // color of text
    textAlign: 'center',
    padding: '10px'
}