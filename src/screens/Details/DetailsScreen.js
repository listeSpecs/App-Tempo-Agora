import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOutCidade } from '../../app/slices/cidadesSlice';
import Button from '../../components/Button';
import {
  Bold,
  Container, Division, Row, ScrollContainer, Title, Window,
} from '../../styles/base';
import { grey, lightGrey } from '../../styles/colors';

const DetailsScreen = () => {
  const { params } = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const removeCity = () => {
    dispatch(setOutCidade({
      Endereco: params.Endereco,
    }));

    return navigation.navigate('Home');
  };

  return (
    <ScrollContainer contentContainerStyle={{ flexGrow: 1 }}>
      <Container style={{ flex: 1 }}>
        <Title>{params.Cidade}</Title>

        <Division size="24" />

        <Window>
          <Row style={{ justifyContent: 'space-between' }}>
            <Bold color={lightGrey} style={{ alignSelf: 'center' }}>CEP</Bold>
            <Bold color={grey} style={{ maxWidth: 200, textAlign: 'right' }}>{params.Cep}</Bold>
          </Row>

          <Division />

          <Row style={{ justifyContent: 'space-between' }}>
            <Bold color={lightGrey} style={{ alignSelf: 'center' }}>Endereço</Bold>
            <Bold style={{ maxWidth: 200, textAlign: 'right' }} color={grey}>{params.Endereco}</Bold>
          </Row>

          <Division />

          <Row style={{ justifyContent: 'space-between' }}>
            <Bold color={lightGrey} style={{ alignSelf: 'center' }}>UF</Bold>
            <Bold color={grey} style={{ maxWidth: 200, textAlign: 'right' }}>{params.Estado}</Bold>
          </Row>
        </Window>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button
            onPress={removeCity}
            type="delete"
            label="Excluir"
          />
        </View>
      </Container>
    </ScrollContainer>
  );
};

export default DetailsScreen;
