const initialState = {
  listProducts: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: action.payload.data.results,
      };
    case 'SEARCH_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'SEARCH_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'SEARCH_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: action.payload.data.results,
      };
    case 'POST_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'POST_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: action.payload.data.results,
      };
    case 'UPDATE_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'UPDATE_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'UPDATE_PRODUCT_FULFILLED':
      const updatedListProduct = state.listProducts;
      updatedListProduct.push(action.payload.data.results);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: action.payload.data.results,
      };
    case 'DELETE_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DELETE_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: action.payload.data.results,
      };
    default:
      return {
        ...state,
      }
  }
};

export default product;
