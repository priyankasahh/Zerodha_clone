import React from 'react';

function OpenAccount() {
    return (  
        <div className='container p-5 text-center mb-5'>
        <h1 className='mt-5'>Open a Zerodha account</h1>
        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <div className='d-flex justify-content-center'>
          <button style={{width:"25%"}} className='p-2 btn btn-primary fs-5 mb-5'>Sign up now</button>
        </div>
      </div>
    );
}

export default OpenAccount;