import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import AppTextBold from './UI/AppTextBold'
import { FontAwesome5 } from '@expo/vector-icons';

import { THEME } from '../theme'

const Card = ({ itemData }) => {
  return (
    <TouchableOpacity
      style={styles.cardWrap}
      activeOpacity={0.5}
    >
      <AppTextBold style={styles.textCard}>Сайт: {itemData.name}</AppTextBold>
      <AppTextBold style={styles.textCard}>Логин: {itemData.login}</AppTextBold>
      <AppTextBold style={styles.textCard}>Пароль: {itemData.pass}</AppTextBold>
      <AppTextBold style={styles.textCard}>Ссылка: {itemData.url}</AppTextBold>
      <FontAwesome5 name="edit" size={24} style={styles.icon} />
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

Card.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })

};

export default Card