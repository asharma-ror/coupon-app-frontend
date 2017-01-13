import * as React from 'react';
import AddCouponForm from './AddCouponForm';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openForm: false,
    };
  }

  closeForm() {
    this.setState({ openForm: false });
  }

  render() {
    return (
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
                <button
                  className={'btn btn-default dropdown-toggle'}
                  onClick={() => this.setState({ openForm: true })}
                >Add Coupon</button>
                { this.state.openForm &&
                  <div className={'dropdown-menu custom-form'} role={'menu'} aria-labelledby={'dropdownMenu1'}>
                    <AddCouponForm
                      createCoupon={this.props.createCoupon}
                      closeForm={() => this.closeForm()}
                      errorInCreate={this.props.errorInCreate}
                      isCreatingCoupons={this.props.isCreatingCoupons}
                    />
                  </div>
                }
              </li>
              <li>
                <button className={'btn btn-default'} onClick={this.props.logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  createCoupon: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
  errorInCreate: React.PropTypes.string,
  isCreatingCoupons: React.PropTypes.bool.isRequired,
};

Header.defaultProps = {
  errorInCreate: '',
};

export default Header;
