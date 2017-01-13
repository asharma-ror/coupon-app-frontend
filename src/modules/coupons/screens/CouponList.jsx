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
import { logoutAction } from '../../authentication/actions/loginAction';

class CouponsList extends React.Component {

  componentWillMount() {
    this.props.getCoupons();

    console.log(this.props.coupons);
    console.log(this.props.isGettingCoupons);
    console.log(this.props.isDeletingCoupons);
    console.log(this.props.isCreatingCoupons);
  }

  render() {
    const {
      coupons,
      user,
      deleteCoupon,
      createCoupon,
      logout } = this.props;

    return (
      <div>
        <Header createCoupon={createCoupon} logout={logout} />
        <div className={'coupon-field'}>
          <div className={'container'}>
            <div className={'my-coupon'}>
              <h2> Coupons</h2>
              <ul className={'row'}>
                {
                  coupons.map(coupon => (
                    <Coupon
                      key={coupon.id}
                      coupon={coupon}
                      showDelete={(coupon.user_id === user.id)}
                      deleteCoupon={deleteCoupon}
                    />
                ))
                }
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
  logout: React.PropTypes.func.isRequired,
  coupons: React.PropTypes.array.isRequired,
  isGettingCoupons: React.PropTypes.bool.isRequired,
  isDeletingCoupons: React.PropTypes.bool.isRequired,
  isCreatingCoupons: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  coupons: state.coupons.coupons,
  isGettingCoupons: state.coupons.isGettingCoupons,
  isDeletingCoupons: state.coupons.isDeletingCoupons,
  isCreatingCoupons: state.coupons.isCreatingCoupons,
});

const mapDispatchToProps = dispatch => ({
  getCoupons: () => dispatch(getCouponsAction()),
  createCoupon: body => dispatch(createCouponAction(body)),
  deleteCoupon: id => dispatch(deleteCouponAction(id)),
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponsList);
