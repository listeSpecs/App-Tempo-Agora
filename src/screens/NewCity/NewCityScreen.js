import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch } from 'react-redux';
import apiCep from '../../api/apiCep';
import apiWeather from '../../api/apiWeather';
import { setInCidade } from '../../app/slices/cidadesSlice';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import {
  Container, Division, InputForm, Label, ScrollContainer, Title,
} from '../../styles/base';
import { lightGrey } from '../../styles/colors';
import { cep } from '../../util/masks';
import { replaceEspecials } from '../../util/stringFactory';

const defaultValues = {
  Cep: '',
};

const NewCityScreen = () => {
  const [values, setValues] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const addCity = async () => {
    setIsLoading(true);

    if (values.Cep.length !== 9) {
      setIsLoading(false);
      return Alert.alert(
        'Atenção',
        'Você não digitou seu CEP completo.',
      );
    }

    const respCep = await apiCep(replaceEspecials(values.Cep));

    if (respCep.erro) {
      setIsLoading(false);
      return Alert.alert(
        'Atenção',
        'CEP não encontrado.',
      );
    }

    const respWeather = await apiWeather(respCep.localidade, respCep.uf);

    dispatch(setInCidade({
      Cidade: respCep.localidade,
      Endereco: respCep.logradouro,
      Cep: respCep.cep,
      Estado: respCep.uf,
      Temperatura: respWeather.results.condition_code,
    }));

    setIsLoading(false);
    return navigation.navigate('Home');
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <ScrollContainer contentContainerStyle={{ flexGrow: 1 }}>
      <Container style={{ flex: 1 }}>

        <Title>Nova Cidade</Title>

        <Division size="24" />

        <View>
          <Label color={lightGrey}>Digite o Cep da cidade</Label>

          <InputForm
            value={values.Cep && cep(values.Cep)}
            onChangeText={(val) => setValues({
              ...values,
              Cep: val,
            })}
          />
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button
            onPress={addCity}
            label="Salvar"
          />
        </View>
      </Container>
    </ScrollContainer>
  );
};

export default NewCityScreen;
