import * as React from 'react';
import AddCouponForm from './AddCouponForm';

const Header = () => (
  <header>
    <div className={'container'}>
      <div className={'logo pull-left'}>
        <h1>
          <a>LOGO</a>
        </h1>
      </div>
      <div className={'right-block pull-right'}>
        <ul className={'dropdown'}>
          <li className={'add-coupon'}>
            <a className={'btn btn-default dropdown-toggle'} type={'button'} id={'dropdownMenu1'} data-toggle={'dropdown'}>Add Coupon</a>
            <div className={'dropdown-menu custom-form'} role={'menu'} aria-labelledby={'dropdownMenu1'}>
              <AddCouponForm />
            </div>
          </li>
          <li>
            <a className={'btn btn-default'}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
