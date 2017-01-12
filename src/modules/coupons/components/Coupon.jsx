import * as React from 'react';

const Coupon = () => (
  <li className={'col-md-4 col-xs-12 col-sm-4'}>
    <a>
      <div className={'left-block'}>
        <span>Save 30%</span>
        <p>Lorem ipsum sit amet</p>
      </div>
      <div className={'pull-left right-b'}>
        <h5>Coupon Timeline</h5>
        <button className={'btn btn-primary'}>GIFT</button>
        <p>Lorem ipsum sit amet</p>
      </div>
    </a>
    <a className={'close-btn'}>x</a>
  </li>
);

export default Coupon;
