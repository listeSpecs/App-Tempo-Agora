import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import apiCep from '../../api/apiCep';
import { setInCidade } from '../../app/slices/cidadesSlice';
import Button from '../../components/Button';
import {
  Container, Division, InputForm, Label, ScrollContainer, Title,
} from '../../styles/base';
import { lightGrey } from '../../styles/colors';
import { cep } from '../../util/masks';

const defaultValues = {
  Cep: '',
};

const NewCityScreen = () => {
  const [values, setValues] = useState(defaultValues);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const addCity = async () => {
    const resp = await apiCep(values.Cep);

    if (resp.erro) {
      return console.log('Tratar erro');
    }

    dispatch(setInCidade({
      Cidade: resp.localidade,
      Endereco: resp.logradouro,
      Cep: resp.cep,
      Estado: resp.uf,
    }));

    return navigation.navigate('Home');
  };

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
