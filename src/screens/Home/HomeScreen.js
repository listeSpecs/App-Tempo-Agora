import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import apiWeather from '../../api/apiWeather';
import { selectCidade } from '../../app/slices/cidadesSlice';
import Button from '../../components/Button';
import CityItem from '../../components/CityItem';
import {
  Container, Division, Label, ScrollContainer, Title,
} from '../../styles/base';
import { lightGrey } from '../../styles/colors';

const HomeScreen = () => {
  const dataCity = useSelector(selectCidade);
  const [weather, setWeather] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (dataCity.data) {
      apiWeather(dataCity.data.Cidade, dataCity.data.Estado).then((resp) => setWeather(resp.results.condition_code));
    }
  }, [dataCity.data]);

  return (
    <ScrollContainer>
      <Container>
        <Title>Tempo Agora</Title>

        <Division />

        <Label color={lightGrey}>Ultima atualização: Agora :D</Label>

        <Division size="8" />

        {dataCity.data ? <CityItem address={dataCity.data.Endereco} city={dataCity.data.Cidade} weather={weather} /> : null}

        <Division size="14" />

        <Button type="add-city" onPress={() => navigation.navigate('NewCity')} />
      </Container>
    </ScrollContainer>
  );
};

export default HomeScreen;
