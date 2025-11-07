import React from 'react'
import Sidebar from '../components/Sidebar'
import './Home.css'
import Video from '../components/Video'

const Home = () => {
  return (
    <div className='home-main'>
        <div id='sidebar'>
        <Sidebar />
        </div>
        <div className='header-section'>
            <div className='search-section'>
                <input type="text" id='search-bar' />
                <button id='search-button'>🔍︎</button>
            </div>
            <div className='content-section'>
                <Video />
            </div>
        </div>
    </div>
  )
}

export default Home