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
    };
  }

  onInputChange(key, value) {
    this.setState({ key: value });
  }

  onSubmitAction() {
    if (this.state.amountOff !== '' || this.state.id !== '') {
      this.props.createCoupon({
        amount_off: this.state.amountOff,
        id: this.state.id,
        duration: this.state.duration,
        currency: this.state.currency,
      });
    }
  }

  render() {
    return (
      <form>
        <InputField
          {...linkState(this, 'amountOff')}
          placeholder={'Amount Off'}
        />
        <InputField
          {...linkState(this, 'percentOff')}
          placeholder={'Percent Off'}
        />
        <InputField
          {...linkState(this, 'id')}
          placeholder={'Coupon Code'}
        />
        <button type={'button'} className={'btn btn-default'} onClick={() => this.onSubmitAction()}>Submit</button>
        <button type={'button'} className={'btn btn-default'} onClick={this.props.closeForm}>Cancel</button>
      </form>
    );
  }
}

AddCouponForm.propTypes = {
  closeForm: React.PropTypes.func.isRequired,
  createCoupon: React.PropTypes.func.isRequired,
};

export default AddCouponForm;
