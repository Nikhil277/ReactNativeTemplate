export const initialFoodListingState = {
  isLoading: false,
  foodList: [],
  errorMessage: '',
};

export const foodListingReducer = (
  state = initialFoodListingState,
  action: any,
) => {
  switch (action.type) {
    case 'FETCH_FOOD_LIST':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        foodList: action.payload,
        errorMessage: '',
      };
    case 'FETCH_FAILIURE':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
