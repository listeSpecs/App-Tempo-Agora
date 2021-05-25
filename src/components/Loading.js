import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Center } from '../styles/base';
import { brandColor } from '../styles/colors';

const Loading = () => (
  <Center>
    <ActivityIndicator
      color={brandColor}
      size={55}
    />
  </Center>
);

export default Loading;
