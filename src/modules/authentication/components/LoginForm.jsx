import * as React from 'react';
import './loginForm.css';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onLoginClick() {
    if (this.state.email && this.state.password) {
      this.props.callLogin(this.state.email, this.state.password);
    }
  }

  render() {
    return (
      <form style={{ display: 'block' }}>
        <div className={'form-group'}>
          <input
            type={'text'}
            className={'form-control'}
            placeholder={'Email'}
            value={this.state.email}
            onChange={e => this.onEmailChange(e)}
          />
        </div>
        <div className={'form-group'}>
          <input
            type={'password'}
            className={'form-control'}
            placeholder={'Password'}
            value={this.state.password}
            onChange={e => this.onPasswordChange(e)}
          />
        </div>
        <div className={'form-group text-center'}>
          <input type={'checkbox'} name={'remember'} />
          <label htmlFor={'remember'}> Remember Me</label>
        </div>
        <div className={'form-group'}>
          <div className={'row'}>
            <div className={'col-sm-6 col-sm-offset-3'}>
              <input
                type={'button'}
                disabled={this.props.isLoading}
                className={'form-control btn btn-login'}
                value={'Log In'}
                onClick={() => this.onLoginClick()}
              />
              { this.props.isLoading &&
                <div className={'loader'}>
                  <i className={'fa fa-circle-o-notch fa-spin fa-3x fa-fw loaderImage'} aria-hidden={'true'} />
                </div>
              }
            </div>
          </div>
        </div>
        <div className={'form-group'}>
          <div className={'row'}>
            <div className={'col-lg-12'}>
              <div className={'text-center'}>
                <a className={'forgot-password'}>Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
        { this.props.error !== '' &&
          <div className={'alert alert-danger'}>
            {this.props.error}
          </div>
        }
      </form>
    );
  }
}

LoginForm.propTypes = {
  callLogin: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
};

LoginForm.defaultProps = { error: '' };

export default LoginForm;
