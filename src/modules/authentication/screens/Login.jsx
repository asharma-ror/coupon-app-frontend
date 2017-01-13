import * as React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginAction';
import './login.css';
import LoginForm from '../components/LoginForm';

const Login = props => (
  <div className={'body-bg'}>
    <div className={'login-field'}>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md-6 '}>
            <div className={'panel panel-login'}>
              <div className={'panel-heading'}>
                <div className={'row'}>
                  <div className={'col-xs-12 login'}>
                    <a className={'active'} id={'login-form-link'}>Login</a>
                  </div>
                </div>
                <hr />
              </div>
              <div className={'panel-body'}>
                <div className={'row'}>
                  <div className={'col-lg-12'}>
                    <LoginForm
                      {...props}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


Login.propTypes = {
  callLogin: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
};

Login.defaultProps = { error: '' };

const mapStateToProps = state => ({
  isLoading: state.authentication.isLoading,
  error: state.authentication.error,
});

const mapDispatchToProps = dispatch => ({
  callLogin: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
