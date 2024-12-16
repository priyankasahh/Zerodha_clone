
import React from 'react';

function RightSection({
  imageURL,
  productNAme,
  productDescription,
  learnMore,

}) {
    return (  
      <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5 mt-5'>
          <h1>{productNAme}</h1>
          <p  className='text-muted'>{productDescription}</p>
          <div> 
          <a href={learnMore} style={{marginLeft:'50px', textDecoration:'none'}}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className='col-6'>
          <img src={imageURL} />
        </div>
      </div>
    </div>
    );
}

export default RightSection;