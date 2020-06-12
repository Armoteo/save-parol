import React, { useContext } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import AppText from '../components/UI/AppText'
import { THEME } from '../theme'
import { connect } from 'react-redux';
import {addCard} from '../store/actions/cardAction'

import Input from '../components/UI/Input'
import Button from '../components/UI/Button';
import { ScreenContext } from '../context/screen/screenContext';

 class EditScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: ['Name', 'Login', 'Pass', 'Url'],
      values: ['', '', '', '']
    }
  }

  toggleText = (text, label) => {
    const { values, fields } = this.state
    const index = fields.indexOf(label, 0)
    let newArrValues = values
    newArrValues[index] = text
    this.setState({
      values: newArrValues
    })
  }

  addButton = (textButton) => {
    const { changeScreen } = this.context
    const { values } = this.state
    const { addCard} = this.props
    if (textButton === 'Cancel') {
      changeScreen(1)
    } else {
      addCard(values);
      const newValues = ['', '', '', '']
      this.setState({values: newValues})
    }

  }

  renderComponent = () => {
    const { values, fields } = this.state
    return fields.map((item, index) =>
      <Input
        key={index}
        label={item}
        placeholder={`Enter ${item.toLowerCase()}`}
        value={values[index]}
        toggleText={this.toggleText} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>Data saving</AppText>
        {this.renderComponent()}
        <View style={styles.containerButton}>
          <Button
            onClick={this.addButton}
            color={THEME.NAVBAR_COLOR}
            colorText={THEME.WHITE_COLOR}
          >Add</Button>
          <Button
            onClick={this.addButton}
            color={THEME.DANGER_COLOR}
            colorText={THEME.WHITE_COLOR}
          >Cancel</Button>
        </View>
      </View>
    )
  }
}

EditScreen.contextType = ScreenContext;

const mapDispatchProps = dispatch => {
  return {
    addCard: (data) => dispatch(addCard(data))
  }
}

export default connect(null, mapDispatchProps)(EditScreen)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,

  },
  text: {
    fontSize: 22,
    alignSelf: 'center',
  },
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginTop: 10
  },
})
