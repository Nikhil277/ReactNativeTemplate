import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../../navigation/config';
import {logoutUser} from '../../redux/actionCreators/authentication';
import {fetchFoodList} from '../../redux/actionCreators/foodListDetailActions';
import {RootState} from '../../redux/reducers';
import {FoodCell} from './components/foodCell/foodCell';
import {styles} from './style';
import {EndPointType} from '../../api/config';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

export const Home = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const foodData = useSelector(
    (state: RootState) => state.foodListingReducer.foodList,
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => logoutAction()} title="Logout" />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const logoutAction = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    getPopularCocktails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPopularCocktails = () => {
    let endpoint: EndPointType = 'recipesList';
    const apiData = {
      method: 'get',
      endPoint: endpoint,
      params: {from: '0', size: '20', tags: 'under_30_minutes'},
    };
    dispatch(fetchFoodList(apiData));
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={foodData}
        renderItem={({item, index}) => FoodCell({details: item, index: index})}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
