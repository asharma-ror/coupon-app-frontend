import * as React from 'react';

const InputField = props => (
  <div className={'form-group'}>
    <label htmlFor={'formGroupExampleInput'}>{props.placeholder}</label>
    <input disabled={props.disabled} type={'text'} className={'form-control'} {...props} />
  </div>
);

InputField.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
};

InputField.defaultProps = { disabled: false };

export default InputField;
