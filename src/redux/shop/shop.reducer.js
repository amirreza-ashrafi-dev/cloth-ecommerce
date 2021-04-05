import ShopData from "./shop.data";

const INITIAL_STATE = {
  shopData: ShopData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
