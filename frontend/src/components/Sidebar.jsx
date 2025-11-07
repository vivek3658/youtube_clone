import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
        <div className='sidebar-name'>
            <span className='sidebar-menu'>☰</span>
            <h1 className='sidebar-logo'>YouTube Clone</h1>
        </div>
        <ul className='sidebar-links'>
            <Link to="/">Home</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/subscriptions">Subscriptions</Link>
            <Link to="/library">Library</Link>
        </ul>
        <div className='sidebar-footer'>
            <Link to="/settings">Settings</Link>
            <Link to="/account">Account</Link>
        </div>
    </div>
  )
}

export default Sidebar