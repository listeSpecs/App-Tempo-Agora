import React, { useState } from 'react';
import { Text } from 'react-native';
import CityItem from '../../components/CityItem';
import {
  Container, Division, Label, ScrollContainer, Title,
} from '../../styles/base';
import { grey, lightGrey } from '../../styles/colors';

const HomeScreen = () => {
  const [listCities, setListCities] = useState(null);

  // remover ! do listCities

  return (
    <ScrollContainer>
      <Container>
        <Title>Tempo Agora</Title>

        <Division />

        <Label color={lightGrey}>Ultima atualização: Agora :D</Label>

        <Division size="8" />

        {!listCities ? <CityItem /> : null}

        <Division size="8" />

        <Label>Botao novo aqui</Label>
      </Container>
    </ScrollContainer>
  );
};

export default HomeScreen;
