import {apiManager} from '../../api';
import {APIDataType} from '../../api/config';

const getFoodList = () => {
  return {
    type: 'FETCH_FOOD_LIST',
  };
};

const getFoodListSuccess = (data: any) => {
  return {
    type: 'FETCH_SUCCESS',
    payload: data,
  };
};

const getFoodListFailure = (errorMessage: string) => {
  return {
    type: 'FETCH_FAILIURE',
    payload: errorMessage,
  };
};

export const fetchFoodList = (apiData: APIDataType) => {
  return (dispatch: Function) => {
    dispatch(getFoodList());
    apiManager(apiData)
      .then(response => {
        dispatch(getFoodListSuccess(response.results));
      })
      .catch(reject => {
        dispatch(getFoodListFailure(reject.errorMessage));
      });
  };
};
