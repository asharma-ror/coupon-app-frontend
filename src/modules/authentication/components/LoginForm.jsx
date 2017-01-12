import * as React from 'react';
import './loginForm.css';

const LoginForm = () => (
  <form id={'login-form'} role={'form'} style={{ display: 'block' }}>
    <div className={'form-group'}>
      <input type={'text'} name={'username'} id={'username'} tabIndex={'-1'} className={'form-control'} placeholder={'Username'} value={''} />
    </div>
    <div className={'form-group'}>
      <input type={'password'} name={'password'} id={'password'} tabIndex={'-2'} className={'form-control'} placeholder={'Password'} />
    </div>
    <div className={'form-group text-center'}>
      <input type={'checkbox'} tabIndex={'-3'} className={''} name={'remember'} id={'remember'} />
      <label htmlFor={'remember'}> Remember Me</label>
    </div>
    <div className={'form-group'}>
      <div className={'row'}>
        <div className={'col-sm-6 col-sm-offset-3'}>
          <input type={'submit'} name={'login-submit'} tabIndex={'-4'} className={'form-control btn btn-login'} value={'Log In'} />
        </div>
      </div>
    </div>
    <div className={'form-group'}>
      <div className={'row'}>
        <div className={'col-lg-12'}>
          <div className={'text-center'}>
            <a tabIndex={'-5'} className={'forgot-password'}>Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default LoginForm;
