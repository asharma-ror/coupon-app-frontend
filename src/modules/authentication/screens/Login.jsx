import * as React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginAction';
import './login.css';
import LoginForm from '../components/LoginForm';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentWillMount() {
    this.props.login('test046@gmail.com', 'test046');
  }

  render() {
    return (
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
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});


export default connect(null, mapDispatchToProps)(Login);
