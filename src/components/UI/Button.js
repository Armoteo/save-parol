import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'
import PropTypes from 'prop-types'
import AppText from '../UI/AppText'
import { THEME } from '../../theme'

const Button = ({ children, color = THEME.WHITE_COLOR, colorText, onClick }) => {

  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper activeOpacity={0.7} onPress={() => onClick(children)}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppText style={{ ...styles.text, color: colorText }}>{children}</AppText>
      </View>
    </Wrapper>
  )
}
export default Button

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  text: {
    fontSize: 18
  }
})

Button.defaultProps = {
  color: '#000'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  colorText: PropTypes.string,
  onClick: PropTypes.func.isRequired
};