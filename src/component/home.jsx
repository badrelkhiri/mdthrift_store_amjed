import React from 'react'
import './home.css'
export default function Home() {
  return (
    <div className='h-con container'>
        <div className=' d-flex justify-content-evenly home-in'>
            <div className='brand'>
              <div>
                <h1 className='h-title'>Discover Your Style 
                  With Our Latest 
                  Collection
                </h1>
                <p>
                Welcome to our clothing store, where fashion meets affordability. Explore our collection of best-selling items and seasonal promotions designed just for you!
                </p>
                <a className='h-btn btn btn-dark' href='/products'>Shop Now</a>
              </div>
            </div>
            <div className=''>
                <img src='img/streetwear.jpg' className='HomeImg' alt=''/>
            </div>
        </div>
    </div>
  )
}

