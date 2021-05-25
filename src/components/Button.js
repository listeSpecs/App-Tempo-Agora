import PropTypes from 'prop-types';
import React from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import AddSvg from '../../assets/icons/add.svg';
import { ButtonForm, Division, Label } from '../styles/base';
import { errorColor, lightGrey } from '../styles/colors';

const Button = ({
  type, onPress, style, label,
}) => {
  if (type === 'add-city') {
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        <AddSvg
          width={40}
          height={40}
          style={{ alignSelf: 'center' }}
          fill={lightGrey}
        />

        <Division size="2" />

        <Label style={{ alignSelf: 'center' }} color={lightGrey}>INCLUIR NOVA CIDADE</Label>
      </TouchableOpacity>
    );
  }

  if (type === 'delete') {
    return (
      <ButtonForm backgroundColor={errorColor} onPress={onPress}>
        <Label color="#fff">{label}</Label>
      </ButtonForm>
    );
  }

  return (
    <ButtonForm onPress={onPress}>
      <Label color="#fff">{label}</Label>
    </ButtonForm>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

Button.defaultProps = {
  type: null,
  label: null,
  style: null,
};

export default Button;
