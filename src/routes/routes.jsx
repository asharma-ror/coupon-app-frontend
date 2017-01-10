import * as React from 'react';
import { Route } from 'react-router';
import {
  BASE_ROUTE,
  LOGIN_ROUTE,
  COUPONS_ROUTE,
} from './../constants/Routes';

export default (
  <Route path={BASE_ROUTE}>
    <Route path={LOGIN_ROUTE} component={() => (<div>Login page</div>)} />
    <Route path={COUPONS_ROUTE} component={() => (<div>Coupons Page</div>)} />
  </Route>
);
