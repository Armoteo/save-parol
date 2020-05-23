import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const Card = ({ itemData }) => {
  return (
    <TouchableOpacity
      style={styles.cardWrap}
      activeOpacity={0.5}
    >
      <Text>Сайт: {itemData.name}</Text>
      <Text>Логин: {itemData.login}</Text>
      <Text>Пароль: {itemData.pass}</Text>
      <Text>Ссылка: {itemData.url}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardWrap: {
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1
  },
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