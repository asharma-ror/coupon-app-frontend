import * as React from 'react';
import { connect } from 'react-redux';
import './couponList.css';
import Coupon from '../components/Coupon';
import Header from '../components/Header';
import {
  getCouponsAction,
  deleteCouponAction,
  createCouponAction,
} from '../actions/couponActions';

class CouponsList extends React.Component {

  componentWillMount() {
    this.props.getCoupons();

    console.log(this.props.createCoupon);
    console.log(this.props.deleteCoupon);
    console.log(this.props.coupons);
    console.log(this.props.isGettingCoupons);
    console.log(this.props.isDeletingCoupons);
    console.log(this.props.isCreatingCoupons);
  }

  render() {
    // const { coupons, ...props } = this.props;

    return (
      <div>
        <Header />
        <div className={'coupon-field'}>
          <div className={'container'}>
            <div className={'my-coupon'}>
              <h2> Coupons</h2>
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
  }
}

CouponsList.propTypes = {
  getCoupons: React.PropTypes.func.isRequired,
  createCoupon: React.PropTypes.func.isRequired,
  deleteCoupon: React.PropTypes.func.isRequired,
  coupons: React.PropTypes.array.isRequired,
  isGettingCoupons: React.PropTypes.bool.isRequired,
  isDeletingCoupons: React.PropTypes.bool.isRequired,
  isCreatingCoupons: React.PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  coupons: state.coupons.coupons,
  isGettingCoupons: state.coupons.isGettingCoupons,
  isDeletingCoupons: state.coupons.isDeletingCoupons,
  isCreatingCoupons: state.coupons.isCreatingCoupons,
});

const mapDispatchToProps = dispatch => ({
  getCoupons: () => dispatch(getCouponsAction()),
  createCoupon: id => dispatch(createCouponAction({ id })),
  deleteCoupon: id => dispatch(deleteCouponAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponsList);
