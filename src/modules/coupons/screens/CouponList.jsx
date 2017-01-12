import * as React from 'react';
import './couponList.css';
import Coupon from '../components/Coupon';
import Header from '../components/Header';

const CouponsList = () => (
  <div>
    <Header />
    <div className={'coupon-field'}>
      <div className={'container'}>
        <div className={'my-coupon'}>
          <h2> My Coupons</h2>
          <ul className={'row'}>
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
          </ul>
        </div>
        <hr />
        <div className={'my-coupon'}>
          <h2> Other Coupons</h2>
          <ul className={'row'}>
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CouponsList;
