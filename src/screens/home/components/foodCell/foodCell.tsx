import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './style';

type Props = {
  details: any;
  index: number;
};

export const FoodCell = (props: Props) => {
  return (
    <TouchableOpacity>
      <FastImage
        style={styles.thumbnail}
        source={{uri: props.details.thumbnail_url}}
      />
    </TouchableOpacity>
  );
};
