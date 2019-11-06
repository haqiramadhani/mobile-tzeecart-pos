const initialState = {
  resultsLogin: [],
  resultsRegister: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultsLogin: action.payload,
      };
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultsRegister: action.payload,
      };
    default:
      return {
        ...state,
      }
  }
};

export default auth;
