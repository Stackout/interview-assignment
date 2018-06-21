import React from 'react'

export default ({address}) => (
  
    <div>
        <h5>Address</h5>
        <p>
        {address.street}<br />
        {address.city} {address.state}, {address.postalCode}
        </p>
    </div>
   
);
