import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import AppText from '../UI/AppText'

const Input = ({value, placeholder, label, toggleText }) => {
  return (
    <View style={styles.block}>
      <AppText style={styles.text}>{label}</AppText>
      <TextInput
                style={styles.input}
                value={value}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder={placeholder}
                onChangeText={(text) => toggleText(text, label)}
            />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  block: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'

  },
  input: {
      width: '80%',
      padding: 3,
      borderStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: '#3949ab',
      fontSize: 18,
      marginTop: 10
  },
  text: {
      fontSize: 20
  }
});

Input.defaultProps = {
  value: '',
  label: 'Test',
  placeholder: 'input text'
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  toggleText: PropTypes.func.isRequired,
};