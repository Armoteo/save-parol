import React from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import PropTypes from 'prop-types'
import Input from './UI/Input'
import AppText from './UI/AppText'
import Button from './UI/Button'
import { THEME } from '../theme'
import Card from './Card'


const EditModal = ({ modal, setModal, data, values, setValues, updateCard, onDelete }) => {
  const fields = ['Name', 'Login', 'Pass', 'Url']

  const btnEdit = () => {
    const dataArr = Object.values(data).slice(1)
    let newValuesSave = values.map((item, index) => {
      if (item === '') {
        return dataArr[index]
      } else {
        return values[index]
      }
    })
    newValuesSave = [data.id, ...newValuesSave]
    updateCard(newValuesSave)
    setValues()
    setModal(false)
  }

  const btnCancel = () => {
    setModal(false)
  }

  const renderComponent = () => {
    return fields.map((item, index) =>
      <Input
        key={index}
        label={item}
        placeholder={`Enter ${item.toLowerCase()}`}
        value={values[index]}
        toggleText={setValues} />
    )
  }

  return (
    <Modal
      visible={modal}
      animationType="slide"
      transparent={false}
    >
      <View style={styles.container}>
        <AppText style={styles.text}>Edit card id#{data.id}</AppText>
        <View style={styles.cardContainer}>
          <Card itemData={data} onDelete={onDelete} />
        </View>
        {renderComponent()}
        <View style={styles.containerButton}>
          <Button
            onClick={btnEdit}
            color={THEME.NAVBAR_COLOR}
            colorText={THEME.WHITE_COLOR}
          >Edit</Button>
          <Button
            onClick={btnCancel}
            color={THEME.DANGER_COLOR}
            colorText={THEME.WHITE_COLOR}
          >Cancel</Button>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: '#D9D9D9',
    height: '100%'
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
  cardContainer: {
    marginBottom: 35
  }
})

EditModal.propTypes = {
  setModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  values: PropTypes.array.isRequired,
  setValues: PropTypes.func.isRequired,
  updateCard: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditModal