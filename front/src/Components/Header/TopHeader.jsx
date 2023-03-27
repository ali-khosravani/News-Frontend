import './TopHeader.css'

import React from 'react';

function TopHeader() {
    return ( 
        <div className='MainTopMenu w-100 '>
            <div className='container d-lg-flex align-items-center justify-content-end menu'>
                <a href='#'>اخبار</a>
                <a href='#'>فارس من</a>
                <a href='#'>فارس TV</a>
                <a href='#'>افکار سنجی</a>
                <a href='#'>دانشکده</a>
                <a href='#'>انتشارات</a>
                <a href='#'>توانا</a>
                <a href='#'>فارس نوجوان</a>
            </div>
        
        </div>
     );
}

export default TopHeader;