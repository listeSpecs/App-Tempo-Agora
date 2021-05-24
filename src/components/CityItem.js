import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CityButton, Label, Row } from '../styles/base';
import { brandColor, grey, lightGrey } from '../styles/colors';

const CityItem = () => {
  const a = 'b';

  return (
    <CityButton>
      <Row>
        <View style={{ alignSelf: 'center', paddingLeft: 4, paddingRight: 4 }}>
          <Label color={grey} style={{ fontSize: 32, fontWeight: 'bold' }}>21°</Label>
        </View>
        <View style={{
          flex: 1, alignSelf: 'center', paddingLeft: 8, paddingRight: 8,
        }}
        >
          <Label bold color={grey}>São Paulo</Label>
          <Label color={lightGrey}>Avenida Paulista</Label>
        </View>
        <View style={{
          alignSelf: 'center', alignItems: 'flex-end', paddingLeft: 4, paddingRight: 4,
        }}
        >
          <Label color={lightGrey}>Oi</Label>
        </View>
      </Row>
    </CityButton>
  );
};

export default CityItem;
