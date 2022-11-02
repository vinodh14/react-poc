const initialState = {
  isLoggedIn: false,
  user: null
};

const handleAuth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

export default handleAuth;