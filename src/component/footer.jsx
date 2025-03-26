import React from 'react'
import "./footer.css"
function footer() {
  return (
    <>
      <footer className='container'>
        <div className='d-flex footer-con justify-content-between mt-5'>
          <img src='img/md_logo.png' alt='logo' className='mb-4'  width="150px"/>
          <ul className='footer-links d-flex align-items-center'>
              <li><a href='/products' className='mx-auto'>Shop Now</a></li>
              <li><a href='/products'>All Product</a></li>
          </ul>
          <ul className='social-links d-flex align-items-center'>
            <li><a href=''><img src='img/in.png' alt='' /></a></li>
            <li><a href='https://www.instagram.com/md__thrift/'><img src='img/instagram.png' alt='' /></a></li>
            <li><a href=''><img src='img/github.png' alt=''/></a></li>
          </ul>
        </div>
        <hr></hr>
      </footer>
    </>
  )
}

export default footer
