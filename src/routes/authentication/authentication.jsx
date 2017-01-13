import * as React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { LOGIN_ROUTE, COUPONS_ROUTE } from '../../constants/Routes';

export class AuthenticatedComponent extends React.Component {

  componentWillMount() {
    this.checkAuth();
  }

  componentWillReceiveProps() {
    this.checkAuth();
  }

  checkAuth() {
    if (this.props.requiresLogin) {
      if (!this.props.token) {
        browserHistory.replace(LOGIN_ROUTE);
      }
    } else if (this.props.token) {
      browserHistory.replace(COUPONS_ROUTE);
    }
  }

  showComponent() {
    const hasToken: Boolean = !!this.props.token;

    return hasToken === this.props.requiresLogin;
  }

  render() {
    const ChildComponent = this.props.child;
    return this.showComponent() ? <ChildComponent {...this.props} /> : <div />;
  }
}

AuthenticatedComponent.propTypes = {
  child: React.PropTypes.any.isRequired,
  token: React.PropTypes.string.isRequired,
  requiresLogin: React.PropTypes.bool.isRequired,
};

const requireAuthentication = (childComponent, requiresLogin) => {
  const mapStateToProps = state => ({
    token: state.authentication.token,
    child: childComponent,
    requiresLogin,
  });

  return connect(mapStateToProps, null)(AuthenticatedComponent);
};

export default requireAuthentication;
