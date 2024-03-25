import React from 'react'
import './Popup.css'
import profilePic from './images/photo.png'
import Meta from './images/meta.png'
import Linkedin from './images/linkedin.png'
import Twitter from './images/twitter.png'
import Lock from './images/Lock.png'

function Popup() {
  return (
    <>
        <div className='pop-main'>
            <div className='pop-outside'>
                <div className='pop-inside'>
                    <div className='left'>
                        <div className='profileImage'>
                            <div className='profileImageInner'><img src={profilePic} alt="" /></div>
                        </div>
                        <div className='icons'>
                            <img src={Meta} alt="" />
                            <img className='mid-icon' src={Linkedin} alt="" />
                            <img src={Twitter} alt="" />
                        </div>
                    </div>
                    <div className='right'>
                        <div>
                            <p className='first-text'>Ashok Kumar</p>
                            <p className='second-text'>Frontend Developer</p>
                        </div>
                        <div>
                            <p className='third-text'>Passionate frontend developer with expertise in HTML, CSS,JavaScript, and React.</p>
                        </div>
                        <div className='fourth-text-div'>
                            <div className='fourth-text-div-inside'>
                                <p className='fourth-text-div-p1'>243</p>
                                <p className='fourth-text-div-p2'>Followers</p>
                            </div>
                            <hr className='line' />
                            <div className='fourth-text-div-inside'>
                                <p className='fourth-text-div-p1'>324</p>
                                <p className='fourth-text-div-p2'>Following</p>
                            </div>
                            <hr className='line' />
                            <div className='fourth-text-div-inside'>
                                <p className='fourth-text-div-p1'>12</p>
                                <p className='fourth-text-div-p2'>Projects</p>
                            </div>
                        </div>
                        <div>
                            <button className='btn1'>Follow</button>
                            <button className='btn2'><img className='lock-image' src={Lock} alt="" />Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup