import React from 'react'
import { Link } from 'react-router-dom'

function MainHeader() {
    return (
        <>
            This is the Main Header
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </>
    )
}

export default MainHeader