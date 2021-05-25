import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import apiWeather from '../../api/apiWeather';
import { selectCidade, updateWeather } from '../../app/slices/cidadesSlice';
import Button from '../../components/Button';
import CityItem from '../../components/CityItem';
import Loading from '../../components/Loading';
import {
  Container, Division, Label, Row, ScrollContainer, Title,
} from '../../styles/base';
import { lightGrey } from '../../styles/colors';

const HomeScreen = () => {
  const dataCity = useSelector(selectCidade);
  const [time, setTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getTime = () => {
    const date = new Date();

    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const refresh = () => {
    setTime(getTime());

    return dataCity.data.length && dataCity.data.map(({ Cidade, Estado, Endereco }) => apiWeather(Cidade, Estado).then((resp) => dispatch(updateWeather({
      Endereco,
      Temperatura: resp.results.condition_code,
    }))));
  };

  const onRefresh = async () => {
    setIsLoading(true);

    refresh();

    setIsLoading(false);
  };

  useEffect(() => {
    refresh();

    const interval = setInterval(() => refresh(), 60000);

    return () => {
      clearInterval(interval);
    };
  }, [dataCity.data]);

  if (isLoading) {
    return (<Loading />);
  }

  return (
    <ScrollContainer
      refreshControl={(
        <RefreshControl
          refreshing={isLoading}
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

        {dataCity.data.length ? dataCity.data.map(({
          Endereco, Cidade, Temperatura, Estado, Cep,
        }) => (
          <View key={Endereco}>
            <CityItem
              address={Endereco}
              city={Cidade}
              weather={Temperatura}
              onPress={() => navigation.navigate('Details', {
                Endereco, Cidade, Estado, Cep,
              })}
            />

            <Division size="8" />
          </View>
        )) : null}

        <Division size="14" />

        <Button type="add-city" onPress={() => navigation.navigate('NewCity')} />
      </Container>
    </ScrollContainer>
  );
};

export default HomeScreen;
