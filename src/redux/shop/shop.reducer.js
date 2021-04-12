import ActionType from "./shop.types";

const INITIAL_STATE = {
  shopData: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shopData: action.payload,
      };
    case ActionType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
