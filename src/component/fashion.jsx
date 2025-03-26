import React from 'react'
import './fashion.css'
export default function fashion() {
  return (
    <div className='h-con container'>
        <div className='d-flex f-con'>
            <div className='f-first'>                
                <img src='img/streetwear girl.jpeg' className='f-pic'  alt=''/>
            </div>
            <div className='f-second '>
              <div>
                <img className='f-logo' src='img/md_logo.png' alt='logo' />
                <h1 className='h-title'>Discover Unique Fashion 
                  for Every Occasion 
                </h1>
                <p>
                  Welcome to our clothing store, where fashion meets individuality. with a rich history of curating 
                  stylish pieces , we pride ourselves on offering Unique selections that set you apart 
                </p>
                <a className='h-btn btn btn-dark' href='/products'>Shop Now</a>
              </div>
            </div>
        </div>
    </div>
  )
}

