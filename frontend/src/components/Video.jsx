import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div className='video-card'>
        <img src="" alt="" className='video-thumbnail' />
        <div className='video-info'>
            <img src="" alt="" />
            <div className='video-text'>
               <h3 className='video-title'>Video Title</h3>
               <p className='video-channel'>Video Channel</p>
            </div>

        </div>
    </div>
  )
}

export default Video