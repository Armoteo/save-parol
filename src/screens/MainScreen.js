import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Keyboard, Image, Alert } from 'react-native'
import { connect } from 'react-redux';
import Search from '../components/Search'
import Card from '../components/Card'
import { loadCards, updateCard, deleteCard } from '../store/actions/cardAction'
import EditModal from '../components/EditModal'

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      modal: false,
      data: {},
      values: ['', '', '', ''],
      fields: ['Name', 'Login', 'Pass', 'Url'],
    }
  }

  componentDidMount() {
    this.props.loadCards()
  }

  toggleText = (text) => {
    if (text !== '') {
      this.setState({
        search: text,
      })
    } else {
      this.setState({
        search: '',
      })
      Keyboard.dismiss()
    }
  }

  toggleValues = (text, label) => {
    const { fields, values } = this.state
    let newArrValues = values
    if (text) {
      const index = fields.indexOf(label, 0)
      newArrValues[index] = text
    } else {
      newArrValues = ['', '', '', '']
    }
    this.setState({
      values: newArrValues
    })
  }

  filterSearchItem = (array, searchName) => {
    let newArray = array.filter(el => {
      let name = el.name ? el.name.toLowerCase() : el.name
      return name ? name.indexOf(searchName.toLowerCase()) !== -1 : null;
    })
    return newArray.sort(function (a, b) {
      let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return -1
      } else if (nameA > nameB) {
        return 1
      } else {
        return 0
      }
    })
  }

  clickEditBtn = (data) => {
    this.setState({
      data: data,
      modal: true
    })
  }

  updateCard = data => {
    this.props.updateCard(data)
  }

  onDelete = id => {
    Alert.alert(
      'Удаление элемента',
      'Вы уверены, что хотите удалить?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: async () => {
            this.props.deleteCard(id)
            this.setState({
              modal: false
            })
          },
        },
      ],
      { cancelable: false }
    )
  }

  setModal = modalStatus => {
    this.setState({
      modal: modalStatus
    })
  }

  renderList = () => {
    const { search } = this.state
    const { cards } = this.props
    if (cards.length > 0) {
      let filterData = this.filterSearchItem(cards, search)

      return <FlatList
        contentContainerStyle={{ paddingBottom: 220 }}
        data={filterData}
        renderItem={({ item }) =>
          (<Card
            itemData={item}
            onClick={this.clickEditBtn}
            onDelete={this.onDelete}
          />)
        }
        keyExtractor={item => item.id.toString()}
      />
    }
  }

  renderImage = () => {
    return <View style={styles.imagWrap}>
      <Image source={require(
        // @ts-ignore
        '../../assets/original.png')} style={styles.image} />
    </View>
  }

  renderData = () => {
    const { cards } = this.props
    return cards.length > 0 ? this.renderList() : this.renderImage()
  }

  render() {
    const { modal, data, values, search } = this.state
    return (
      <View style={styles.container}>
        <EditModal
          modal={modal}
          setModal={this.setModal}
          data={data}
          values={values}
          setValues={this.toggleValues}
          updateCard={this.updateCard}
          onDelete={this.onDelete}
        />
        <Search toggleText={this.toggleText} value={search} />
        {this.renderData()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.card.allCards
  }
}

const mapDispatchProps = dispatch => {
  return {
    loadCards: () => dispatch(loadCards()),
    updateCard: (data) => dispatch(updateCard(data)),
    deleteCard: (data) => dispatch(deleteCard(data)),
  }
}

export default connect(mapStateToProps, mapDispatchProps)(MainScreen)

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  imagWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
    top: '15%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
})

