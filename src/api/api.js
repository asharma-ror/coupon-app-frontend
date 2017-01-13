/* global fetch:true*/
/* eslint no-undef: "error"*/
// const BASE_URL = 'https://stripe-coupon-api.herokuapp.com';
const BASE_URL = 'https://stripe-coupon-api.herokuapp.com';

let authorizationToken;

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const token = authorizationToken;

  return token ? {
    Authorization: `Bearer ${token}`,
    ...headers,
  } : headers;
};

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(response);
}

export const apiCall = (url, method, body) => (
  fetch(`${BASE_URL}${url}`, {
    method,
    headers: getHeaders(),
    body: JSON.stringify(body),
    mode: 'cors',
  })
    .then(statusHelper)
    .catch(error => error)
    .then(response => response.json())
    .then(data => data)
);

export const setAuthorizationToken = (token) => {
  authorizationToken = token;
};

export const getApiCall = (url, body) => apiCall(url, 'GET', body);

export const postApiCall = (url, body) => apiCall(url, 'POST', body);

export const deleteApiCall = (url, body) => apiCall(url, 'DELETE', body);
