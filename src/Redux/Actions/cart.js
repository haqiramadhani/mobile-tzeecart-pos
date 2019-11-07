export const addToCart = data => {
  return {
    type: 'ADD_TO_CART',
    data,
  }
};

export const plusCartQty = data => {
  return {
    type: 'PLUS_CART_QTY',
    data,
  }
};

export const minusCartQty = data => {
  return {
    type: 'MINUS_CART_QTY',
    data,
  }
};

export const cleatListCart = () => {
  return {
    type: 'CLEAR_LIST_CART',
  }
};
