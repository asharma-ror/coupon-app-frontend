const BASE_URL = '';

let authorizationToken;

export const apiCall = (url, method, body) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: getHeaders(),
    body
  })
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => data)
}

const getHeaders = () => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data'
  }
  const token = authorizationToken
  return token ? {
    'Authorization': `Token ${token}`,
    ...headers
  } : headers
}

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const setAuthorizationToken = (token) => {
  authorizationToken = token
}

export const getApiCall = (url, body) => {
  return apiCall(url, 'GET', body)
}

export const postApiCall = (url, body) => {
  return apiCall(url, 'POST', formData)
}
