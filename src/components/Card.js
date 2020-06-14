import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import AppTextBold from './UI/AppTextBold'
import { FontAwesome5 } from '@expo/vector-icons';

import { THEME } from '../theme'

const Card = ({ itemData, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.cardWrap}
      activeOpacity={0.5}
    >
      <AppTextBold style={styles.textCard}>Сайт: {itemData.name}</AppTextBold>
      <AppTextBold style={styles.textCard}>Логин: {itemData.login}</AppTextBold>
      <AppTextBold style={styles.textCard}>Пароль: {itemData.pass}</AppTextBold>
      <AppTextBold style={styles.textCard}>Ссылка: {itemData.url}</AppTextBold>
      {onClick
        ? <FontAwesome5
          name="edit"
          size={24}
          style={styles.icon}
          onPress={() => onClick(itemData)}
        /> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardWrap: {
    position: 'relative',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    },
    borderRadius: 10,
    elevation: 8,
    width: '90%',
    alignSelf: 'center',
  },
  textCard: {
    fontFamily: 'roboto-regular',
    fontSize: 18
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: THEME.ICON_BLACK
  }
});

Card.defaultProps = {
  onClick: undefined,
  itemData: {
    name: '',
    login: '',
    pass: '',
    url: '',
  },
}

Card.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    login: PropTypes.string,
    pass: PropTypes.string,
    url: PropTypes.string,
  }),
  onClick: PropTypes.func

};

export default Card