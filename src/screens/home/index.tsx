import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {apiManager} from '../../api';
import {RootStackParamList} from '../../navigation/config';
import {logout} from '../../redux/reducers/authenticationReducer';
import {FoodCell} from './components/foodCell/foodCell';
import {styles} from './style';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

export const Home = ({navigation}: Props) => {
  const [dataList, setDataList] = useState([]);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => logoutAction()} title="Logout" />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const logoutAction = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const getPopularCocktails = () => {
      const apiData = {
        method: 'get',
        endPoint: 'recipesList',
        params: {from: '0', size: '20', tags: 'under_30_minutes'},
      };
      apiManager(apiData)
        .then(response => {
          setDataList(response.results);
        })
        .catch(reject => {
          console.log('Error: ', reject);
        });
    };
    getPopularCocktails();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={dataList}
        renderItem={({item, index}) => FoodCell({details: item, index: index})}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
