import * as React from 'react';
import { Route } from 'react-router';
import {
  BASE_ROUTE,
  LOGIN_ROUTE,
  COUPONS_ROUTE,
} from './../constants/Routes';
import Login from '../modules/authentication/screens/Login';
import CouponList from '../modules/coupons/screens/CouponList';

export default (
  <Route path={BASE_ROUTE}>
    <Route path={LOGIN_ROUTE} component={Login} />
    <Route path={COUPONS_ROUTE} component={CouponList} />
  </Route>
);
