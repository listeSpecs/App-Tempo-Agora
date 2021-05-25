import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import {
  Bold, CityButton, Label, Row,
} from '../styles/base';
import NextSvg from '../../assets/icons/next.svg';
import { grey, lightGrey } from '../styles/colors';

const CityItem = ({
  city, address, weather, onPress,
}) => (
  <CityButton onPress={onPress}>
    <Row>
      <View style={{ alignSelf: 'center', paddingLeft: 4, paddingRight: 4 }}>
        <Bold color={grey} style={{ fontSize: 32 }}>
          {weather}
          °
        </Bold>
      </View>
      <View style={{
        flex: 1, alignSelf: 'center', paddingLeft: 8, paddingRight: 8,
      }}
      >
        <Bold color={grey}>{city}</Bold>
        <Label color={lightGrey}>{address}</Label>
      </View>
      <View style={{
        alignSelf: 'center', alignItems: 'flex-end', paddingLeft: 4, paddingRight: 4,
      }}
      >
        <NextSvg
          width={20}
          height={20}
          style={{ alignSelf: 'center' }}
          fill={lightGrey}
        />
      </View>
    </Row>
  </CityButton>
);

CityItem.propTypes = {
  city: PropTypes.string,
  address: PropTypes.string,
  weather: PropTypes.string,
  onPress: PropTypes.func,
};

CityItem.defaultProps = {
  city: null,
  address: null,
  weather: null,
  onPress: null,
};

export default CityItem;
