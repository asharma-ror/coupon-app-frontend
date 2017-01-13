import * as React from 'react';
import { Route } from 'react-router';
import {
  BASE_ROUTE,
  LOGIN_ROUTE,
  COUPONS_ROUTE,
} from './../constants/Routes';
import Login from '../modules/authentication/screens/Login';
import CouponList from '../modules/coupons/screens/CouponList';
import requireAuthentication from './authentication/authentication';

export default (
  <Route path={BASE_ROUTE}>
    <Route path={LOGIN_ROUTE} component={requireAuthentication(Login, false)} />
    <Route path={COUPONS_ROUTE} component={requireAuthentication(CouponList, true)} />
  </Route>
);
