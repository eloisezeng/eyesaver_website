// function based component bc it's all markup
// type rfc tab

import React from 'react'

export default function Header() {
    return (
        <header style={headerstyle}>
            <h1>EYE SAVER</h1>
        </header>
    )
}

const headerstyle = {
    background: 'rgb(30, 200, 101)',
    color: 'black', // color of text
    textAlign: 'center',
    padding: '10px',
    marginBottom: '20px',
}