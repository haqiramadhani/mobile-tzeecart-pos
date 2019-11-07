const initialState = {
  listCart: [],
  totalPrice: 0,
  totalItem: 0
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let exist = false;
      const newListAddQty = state.listCart.map(item => {
        if (item.id === action.data.id) {
          exist = true;
          return {...item, qty: item.qty + 1}
        }
        return item;
      });
      const newListCartAdd = (exist) ? newListAddQty : [...state.listCart, action.data];
      return {
        ...state,
        listCart: newListCartAdd,
        totalItem: state.totalItem + 1,
        totalPrice: state.totalPrice + action.data.price,
      };
    case 'PLUS_CART_QTY':
      const newListCartPlus = state.listCart.map(item => {
        if (item.id === action.data.id) return {...item, qty: item.qty + 1};
        return item;
      });
      return {
        ...state,
        listCart: newListCartPlus,
        totalItem: state.totalItem + 1,
        totalPrice: state.totalPrice + action.data.price,
      };
    case 'MINUS_CART_QTY':
      const newListCartMinus = state.listCart.map(item => {
        if (item.id === action.data.id) return {...item, qty: item.qty - 1};
        return item;
      });
      return {
        ...state,
        listCart: newListCartMinus,
        totalItem: state.totalItem - 1,
        totalPrice: state.totalPrice - action.data.price,
      };
    case 'CLEAR_LIST_CART':
      const newListCartClear = [];
      return {
        ...state,
        listCart: newListCartClear,
        totalItem: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export default cart;
