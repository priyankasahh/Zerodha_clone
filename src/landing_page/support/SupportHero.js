
import React from 'react';

function SupportHero() {
    return (  
      <section className='container-fluid' id='supportHero'>  
        <div className='container p-3' id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href=''>Track Ticket</a>
      </div>

      <div className='row p-5 m-3'>
        <div className='col-6 p-5'>
          <h2 className='fs-5'>Search for an answer or browse help topics to create a ticket</h2>
          <form>
            <input placeholder='Eg. How do i activate F&O , Why is my order getting rejected' /> <br/>
          </form>
          <a href=''> Track account opening</a> <br/>
          <a href=''> Track segment activation</a> <br/>
          <a href=''> Intraday margins</a> <br/>
          <a href=''> Kite user manual</a> <br/>
        </div>
        <div className='col-6 p-5'>
          <h2 className='fs-5'>Featured</h2>
         <ol>
          <li> <a href=''> BSE StAR mutual fund platform downtime</a> </li>
          <li> <a href=''> Rights Entitlements listing in October 2024</a></li>
         </ol>  
        </div>
       
      </div>
      </section>
    );
}

export default SupportHero;