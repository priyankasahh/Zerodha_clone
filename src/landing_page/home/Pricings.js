import React from 'react';



function Pricings() {
    return ( 
            <div className='container '>
                 <div className='row'>
                 <div className='col-4 mb-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                 </div>
                 <div className='col-2'></div>
                 <div className='col-6 '>
                    <div className='row text-center'>
                        <div className='col border p-2'>
                            <h1 className='mb-3'> ₹0</h1>
                            <p> Free account
                            opening</p>
                        </div>
                        <div className='col border p-2'>
                            <h1 mb-3>₹ 0</h1>
                            <p> Free equity delivery
                            and direct mutual funds</p>
                        </div>
                        <div className='col border p-2'>
                            <h1 mb-3> ₹20</h1>
                            <p>Intraday and
                            F&O</p>
                        </div>

                    </div>
                 </div>

                </div>  

            </div>
     );
}

export default Pricings ;