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
      const newListProduct = state.listProducts.push(action.payload.data.results);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: newListProduct,
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
      const updatedListProducts = state.listProducts.map(product=>{
        if (product.id === action.payload.data.results.id) return action.payload.data.results;
        return product;
      });
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: updatedListProducts,
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
      const deletedListProducts = state.listProducts.filter(product=>product !== action.payload.data.results.id);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listProducts: deletedListProducts,
      };
    default:
      return {
        ...state,
      }
  }
};

export default product;
