import React from 'react'
import './Items.css'
export default function Items() {
  return (
    <div className="i-con container">
        <h1 className='i-title fw-bold fs-700 text-center mb-5 '>
        Discover The latest Trends and Styles at our Clothing Store.
        </h1>
            <div className="row d-flex items-container">
                <div className="card itm" >
                    <img alt='' src="img/jean1.jpg" className="card-img-top itm-pic"/>
                    <div className="card-body">
                        <h5 className="card-title black">Baggy jean</h5>
                        <a href='/products' className='btn btn-black btn-lg btn-block'>Order Now</a>
                    </div>
                </div>

                <div className="card itm" >
                    <img alt='' src="img/jean2.jpg" className="card-img-top itm-pic" />
                    <div className="card-body">
                        <h5 className="card-title black">Baggy jean</h5>
                        <a href='/products' className='btn btn-black btn-lg btn-block'>Order Now</a>
                    </div>
                </div>

                <div className="card itm" >
                    <img alt='' src="img/jean3.jpg" className="card-img-top itm-pic" />
                    <div className="card-body">
                        <h5 className="card-title black">Baggy jean</h5>
                        <a href='/products' className='btn btn-black btn-lg btn-block'>Order Now</a>
                    </div>
                </div>
            </div>
            <a className='btn i-mbtn' href='./products'>All Products {">"}</a>
    </div>
  )
}
