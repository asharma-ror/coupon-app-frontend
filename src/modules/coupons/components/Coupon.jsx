import * as React from 'react';

const Coupon = ({ coupon, showDelete, deleteCoupon }) => {
  const { currency, id } = coupon;

  const offTitle = coupon.amount_off ? `${coupon.amount_off}${currency}` : `${coupon.percent_off}%`;

  return (
    <li className={'col-md-4 col-xs-12 col-sm-6'}>
      <div className={'main-white-bg'}>
        <div className={'left-block'}>
          <h4>Coupon Code :</h4>
          <span>{id}</span>
        </div>
        <div className={'space-block'}>
          <div className={'save-amount'}><h4>Save:</h4><p>{offTitle}</p></div>
          <div className={'pull-left right-b'}>
            <h4>{`Duration: ${coupon.duration}`}</h4>
            <h4>{`Redeemed: ${coupon.times_redeemed}`}</h4>
          </div>
        </div>
      </div>
      { showDelete && <button className={'close-btn'} onClick={() => deleteCoupon(coupon.id)}>x</button>}
    </li>
  );
};

Coupon.propTypes = {
  showDelete: React.PropTypes.bool.isRequired,
  coupon: React.PropTypes.object.isRequired,
  deleteCoupon: React.PropTypes.func.isRequired,
};

export default Coupon;
