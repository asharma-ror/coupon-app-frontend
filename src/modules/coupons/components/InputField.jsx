import * as React from 'react';

const InputField = props => (
  <div className={'form-group'}>
    <label htmlFor={'formGroupExampleInput'}>{props.placeholder}</label>
    <input type={'text'} className={'form-control'} {...props} />
  </div>
);

InputField.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
};

export default InputField;
