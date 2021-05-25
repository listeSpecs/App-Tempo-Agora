import styled from 'styled-components';
import { brandColor, grey, lightGrey } from './colors';

export const ScrollContainer = styled.ScrollView`
flex-direction: ${({ horizontal }) => (
    horizontal ? 'row' : 'column'
  )};
`;

export const Container = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #000;
  font-weight: bold;
`;

export const Division = styled.View`
  margin-bottom:  ${({ size }) => (size || 4)}px;
  padding-bottom: ${({ size }) => (size || 4)}px;
`;

export const Label = styled.Text`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')}
  font-size: 16px;
  color: ${({ color }) => (color || '#000')}
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const CityButton = styled.TouchableOpacity`
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.4;
  shadow-radius: 2px;
  elevation: 3;
  border-color: ${brandColor};
  border-left-width: 8px;
  border-radius: 8px;
  padding: 18px 8px;
`;

export const ButtonForm = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${brandColor};
  border-radius: 8px;
  align-items: center;
`;

export const InputForm = styled.TextInput`
  background-color: #FFFFFF;
  border: 0 ${lightGrey};
  color: ${grey};
  font-weight: bold;
  border-bottom-width: 1px;
  flex: 1;
  font-size: 42px;
`;
