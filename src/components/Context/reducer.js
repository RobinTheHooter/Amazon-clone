export const initialState = {
  cart: [],
  product: [],
};

// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_DATA_LAYER":
      return {
        ...state,
        product: [action.item],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      }

      return {
        ...state,
        cart: newCart,
      };
      
    default:
      return state;
  }
};

export default reducer;
