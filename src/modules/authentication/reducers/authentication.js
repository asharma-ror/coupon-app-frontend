import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/loginAction'

export const authentication = ({state, action}) => {
	switch(action.type) {
		case LOGIN: 
			return {
				...state,
				isLoading: true
			}
		case LOGIN_SUCCESS: 
			return {
				...state,
				isLoading: false,
				token: action.data,
			}
		case LOGIN_FAILURE : 
			return {
				...state,
				isLoading: false
			}
		default: state;			
	}
}
