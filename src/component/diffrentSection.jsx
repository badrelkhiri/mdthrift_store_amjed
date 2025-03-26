import React from 'react'
import "./diffrentSection.css"
function diffrentSection(){
  return (
    <div className='container diffrent-con'>
      <h5 className='text-center black '>md thrift</h5>
      <h1 className='discover text-center'>Discover Unique Thrift Finds</h1>
      <h6 className='mb-5 text-center'>Affordable fashion that makes diffrence</h6>
      <div className='df-section d-flex justify-content-between w-100'>
        <div className='part-1 '>
          <div className='whyOurStroe card pt-4'>
            <div className='card-body w-body'>
              <p>Affordable</p>
              <h2 className='card-title why-title'>Why Choose Our Thrift Store?</h2>
              <p className='card-text '>Shop stylish pre-loved clothing without breaking the bank</p>
              <a className='h-btn btn btn-dark why-btn' href='/products'>Shop Now</a>              
            </div>
            <img src='img/saveMoney.jpg' className='card-img-bottom savemoney rounded-0'  />
          </div>
          <div className='bottom-p d-flex mt-3'>
            <div className='sustainable card '>
              <img src='img/md_logo.png' alt='logo' className='mb-4'  width="80px"/>
              <h4 className='card-title mb-1 black'>Sustainable Fashion for Everyone</h4>
              <p className='card-text mb-5'>Join the movement towards eco-friendly clothing.</p>
              <a className='btn btn-dark w-50 h-btn mb-4' href='/products'>Shop Now</a>
            </div>
            <div className='variety card '>
              <img src='img/md_logo.png' alt='logo' className='mb-4'  width="80px"/>
              <h4 className='card-title mb-1 black'>A Variety Like No Other</h4>
              <p className='card-text mb-5'>Find styles that suit every personality and occasion.</p>
              <a className='btn btn-dark w-50 h-btn  mb-4' href='/products'>Shop Now</a>
            </div>
          </div>
        </div>
        <div className='part-2 '>
          <div className='affordable mb-3'>
            <img src='img/streetwear1.jpeg' className='aff-pic' alt='model pic'  />                
            <div className='card-body '>
              <img src='img/md_logo.png' alt='logo' className='mb-4'  width="70px"/>
              <h3 className='card-title'>Affordable Prices for All</h3>
              <p>Quality thrift items that fit your budget.</p>
              <a className='btn btn-dark w-50 h-btn mt-4 mb-4' href='/products'>Shop Now</a>
            </div>
          </div>
          <div className='purpose pt-5 '>
            <div>
              <img src='img/md_logo.png' alt='logo' className='mb-4'  width="70px"/>
              <h1 className='black'>Shop with Purpose and Style</h1>
              <p>Transform your wardrobe sustainably while enjoying diverse fashion choices at unbeatable prices.</p>
              <a className='btn btn-dark h-btn mt-4 mb-4' href='/products'>Shop Now</a>
            </div>
            <img src='img/dc shoes.jpg' alt='dc pic' width="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default diffrentSection
