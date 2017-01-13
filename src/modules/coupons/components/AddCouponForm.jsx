import * as React from 'react';
import InputField from './InputField';
import linkState from '../../../utils/linkState';

class AddCouponForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amountOff: '',
      percentOff: '',
      duration: 'once',
      id: '',
      currency: 'usd',
      errorMessage: '',
    };
  }

  onInputChange(key, value) {
    this.setState({ key: value });
  }

  onSubmitAction() {
    if (this.state.amountOff !== '' && this.state.id !== '') {
      this.props.createCoupon({
        amount_off: this.state.amountOff,
        id: this.state.id,
        duration: this.state.duration,
        currency: this.state.currency,
      });
    } else if (this.state.percentOff !== '' && this.state.id !== '') {
      this.props.createCoupon({
        percent_off: this.state.percentOff,
        id: this.state.id,
        duration: this.state.duration,
      });
    } else {
      let errorMessage = '';
      if (this.state.percentOff === '' || this.state.amountOff === '') {
        errorMessage = 'Please Enter Percent off or Amount off!';
      } else {
        errorMessage = 'Please Enter coupon Code!';
      }

      this.setState({ errorMessage });
    }
  }

  render() {
    return (
      <form>
        <h5 style={{ color: '#fff' }}>Select either amount Off or percent off!</h5>
        <InputField
          {...linkState(this, 'amountOff')}
          placeholder={'Amount Off'}
          disabled={this.state.percentOff !== ''}
        />
        <InputField
          {...linkState(this, 'percentOff')}
          placeholder={'Percent Off'}
          disabled={this.state.amountOff !== ''}
        />
        <InputField
          {...linkState(this, 'id')}
          placeholder={'Coupon Code'}
        />
        { (this.props.errorInCreate !== '' || this.state.errorMessage !== '') &&
          <div className={'alert alert-danger'}>
            {this.props.errorInCreate}
            {this.state.errorMessage}
          </div>
        }
        <button
          type={'button'}
          disabled={this.props.isCreatingCoupons}
          className={'btn btn-default'}
          onClick={() => this.onSubmitAction()}
        >{this.props.isCreatingCoupons ? 'Loading...' : 'Submit'}</button>
        <button
          type={'button'}
          className={'btn btn-default'}
          onClick={this.props.closeForm}
        >Cancel</button>
      </form>
    );
  }
}

AddCouponForm.propTypes = {
  closeForm: React.PropTypes.func.isRequired,
  createCoupon: React.PropTypes.func.isRequired,
  errorInCreate: React.PropTypes.string,
  isCreatingCoupons: React.PropTypes.bool.isRequired,
};

AddCouponForm.defaultProps = {
  errorInCreate: '',
};

export default AddCouponForm;
