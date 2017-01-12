import * as React from 'react';
import './login.css';
import LoginForm from '../components/LoginForm';

const Login = () => (
  <div className={'body-bg'}>
    <div className={'login-field'}>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md-6 '}>
            <div className={'panel panel-login'}>
              <div className={'panel-heading'}>
                <div className={'row'}>
                  <div className={'col-xs-6 login'}>
                    <a className={'active'} id={'login-form-link'}>Login</a>
                  </div>
                </div>
                <hr />
              </div>
              <div className={'panel-body'}>
                <div className={'row'}>
                  <div className={'col-lg-12'}>
                    <LoginForm />
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

export default Login;
