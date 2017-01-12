export const GET_API_ACTION = 'GET_API_ACTION'
export const POST_API_ACTION = 'POST_API_ACTION'

export const getApiAction = (body) => {
  return {
    type: GET_API_ACTION,
    method: 'GET',
    ...body
  }
}

export const postApiAction = (body) => {
  return {
    type: POST_API_ACTION,
    method: 'POST',
    ...body
  }
}
