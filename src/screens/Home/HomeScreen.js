import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import apiWeather from '../../api/apiWeather';
import { selectCidade } from '../../app/slices/cidadesSlice';
import Button from '../../components/Button';
import CityItem from '../../components/CityItem';
import {
  Container, Division, Label, Row, ScrollContainer, Title,
} from '../../styles/base';
import { lightGrey } from '../../styles/colors';

const HomeScreen = () => {
  const dataCity = useSelector(selectCidade);
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  console.log(dataCity);

  const getTime = () => {
    const date = new Date();

    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const onRefresh = async () => {
    setRefreshing(true);

    setTime(getTime());

    /*
    if (dataCity.data.length) {
      apiWeather(dataCity.data.Cidade, dataCity.data.Estado).then((resp) => setWeather(resp.results.condition_code));
    }
    */

    setRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 60000);

    return () => {
      clearInterval(interval);
    };
    /*
      if (dataCity.data.length) {
        apiWeather(dataCity.data.Cidade, dataCity.data.Estado).then((resp) => setWeather(resp.results.condition_code));
      }
    */
  }, [dataCity.data]);

  console.log(time);

  return (
    <ScrollContainer
      refreshControl={(
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    >
      <Container>
        <Title>Tempo Agora</Title>

        <Division />

        <Row>
          <Label color={lightGrey} style={{ marginRight: 5 }}>
            Ultima atualização:
          </Label>

          <Label color={lightGrey}>
            {time}
          </Label>
        </Row>

        <Division size="8" />

        {dataCity.data.length ? dataCity.data.map(({ Endereco, Cidade, Temperatura }) => (
          <>
            <CityItem address={Endereco} city={Cidade} weather={Temperatura} />

            <Division size="8" />
          </>
        )) : null}

        <Division size="14" />

        <Button type="add-city" onPress={() => navigation.navigate('NewCity')} />
      </Container>
    </ScrollContainer>
  );
};

export default HomeScreen;
