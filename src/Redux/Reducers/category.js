const initialState = {
  listCategories: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_CATEGORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listCategories: action.payload.data.results,
      };
    case 'POST_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'POST_CATEGORY_FULFILLED':
      const newListCategories = [...state.listCategories, action.payload.data.results];
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listCategories: newListCategories,
      };
    case 'UPDATE_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'UPDATE_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'UPDATE_CATEGORY_FULFILLED':
      const updatedListCategories = state.listCategories.map(category=>{
        if (category.id == action.payload.data.results.id) {return action.payload.data.results}
        return category;
      });
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listCategories: updatedListCategories,
      };
    case 'DELETE_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DELETE_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_CATEGORY_FULFILLED':
      const deletedListCategories = state.listCategories.filter(category=> category.id != action.payload.data.results.id);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listCategories: deletedListCategories,
      };
    default:
      return {
        ...state,
      }
  }
};

export default category;
