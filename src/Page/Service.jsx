import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Page/Service.css';
const Service = () => {
  return (
    <>
    <div className='text-center'>
        <h1>Our Top Products</h1>
    </div>
   <div className=' text-center first'>
   <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/m1.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$15</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/k1.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$20</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/women.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$100</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 sec">
  <div class="col">
    <div class="card h-100">
      <img src="/kid.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$100</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/w1.avif" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$60</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/m2.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$10</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 third">
  <div class="col">
    <div class="card h-100">
      <img src="/k2.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$10</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/men.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$15</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/k3.jpg" class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$15</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
</div>








   </div>
    </>
  )
}

export default Service
