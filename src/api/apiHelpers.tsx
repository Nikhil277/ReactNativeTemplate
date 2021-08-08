//@flow

export const createFormDataParams = (apiParams: any) => {
  let params = new FormData();
  for (let key in apiParams) {
    params.append(key, apiParams[key]);
  }
  return params;
};
