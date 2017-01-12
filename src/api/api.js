/* global fetch:true*/
/* eslint no-undef: "error"*/
const BASE_URL = 'http://c435db48.ngrok.io:1337';
let authorizationToken;

const getHeaders = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const token = authorizationToken;

  return token ? {
    Authorization: `Token ${token}`,
    ...headers,
  } : headers;
};

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(new Error(response.statusText));
}

export const apiCall = (url, method, body) => (
  fetch(`${BASE_URL}${url}`, {
    method,
    headers: getHeaders(),
    body,
  })
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => data)
);

export const setAuthorizationToken = (token) => {
  authorizationToken = token;
};

export const getApiCall = (url, body) => apiCall(url, 'GET', body);

export const postApiCall = (url, body) => apiCall(url, 'POST', body);
