// @flow
import Config from 'react-native-config';
const domains = {
  live: Config.API_HOST_LIVE,
};

export const baseURL = domains.live;

const routes = {
  // generally used for cases where apis are grouped. Example : Users, feeds, movies etc
  feeds: 'feeds/',
  recipes: 'recipes/',
};
export const apiEndpoints = {
  feedsList: baseURL + routes.feeds + 'list',
  recipesList: baseURL + routes.recipes + 'list',
  recipesDetails: baseURL + routes.recipes + 'detail',
};

export type EndPointType = 'feedsList' | 'recipesList' | 'recipesDetails';

export type APIDataType = {
  params: any;
  method?: string;
  endPoint: EndPointType;
};
