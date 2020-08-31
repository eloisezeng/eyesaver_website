import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <link rel="stylesheet" 
            href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <Link style={linkStyle} to="/">
                <i className="material-icons">home</i>
            </Link>
            <Link style={linkStyle} to="/settings">
                <i className="material-icons">settings</i>
            </Link>
            <Link style={linkStyle} to="/about">
                <i className="material-icons">help</i>
            </Link>
        </footer> 
    )
}

const linkStyle = {
    color: "black",
    paddingLeft: "10px",
    paddingRight: "10px",
    textDecoration: "none",
}

const footerStyle = {
    backgroundColor: "#89e4b9",
    border: "1px solid #2db173",
    textAlign: "center",
    padding: "5px 5px",
    bottom: "0",
    position: "fixed", /* might not work on mobile */
    width: "100%",
    borderRadius: "5px",
}