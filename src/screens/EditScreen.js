import React, { useState } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import AppText from '../components/UI/AppText'

import Input from '../components/UI/Input'

export class EditScreen extends React.Component {
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

  renderComponent = () => {
    const { values, fields } = this.state
    console.log(values)
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
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,

  },
  text: {
    fontSize: 22,
    alignSelf: 'center',
  }
})