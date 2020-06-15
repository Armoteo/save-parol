import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Keyboard, Image } from 'react-native'
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
      viewData: false,
      modal: false,
      data: {},
      values: ['', '', '', ''],
      fields: ['Name', 'Login', 'Pass', 'Url'],
      dataCards: []
    }
  }

  componentDidMount() {
    const { cards } = this.props
    this.props.loadCards()
    this.setState({
      dataCards: cards
    })
  }

  componentDidUpdate(prevProps) {
    const { cards } = this.props
    const { dataCards } = this.state
    if (dataCards !== prevProps.cards) {
      this.props.loadCards()
      this.setState({
        dataCards: cards
      })
    }
  }

  toggleText = (text) => {
    if (text !== '') {
      this.setState({
        search: text,
        viewData: true
      })
    } else {
      this.setState({
        search: '',
        viewData: false
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

  clickSearch = () => {
    Keyboard.dismiss()
    this.setState({
      search: '',
      viewData: !this.state.viewData
    })
  }

  filterSearchItem = (array, searchName) => {
    let newArray = array.filter(el => {
      let name = el.name ? el.name.toLowerCase() : el.name
      return name ? name.indexOf(searchName.toLowerCase()) !== -1 : null;
    })
    return newArray
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
    this.props.deleteCard(id)
  }

  setModal = modalStatus => {
    this.setState({
      modal: modalStatus
    })
  }

  renderList = () => {
    const { search, dataCards } = this.state
    if (dataCards.length > 0) {
      let filterData = this.filterSearchItem(dataCards, search)
      if (filterData) {
        return <FlatList
          contentContainerStyle={{ paddingBottom: 320 }}
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
      } else {
        this.setState({
          viewData: false
        })
      }
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
    const { viewData } = this.state
    return viewData ? this.renderList() : this.renderImage()
  }

  render() {
    const { modal, data, values, search } = this.state
    return (
      <View>
        <EditModal
          modal={modal}
          setModal={this.setModal}
          data={data}
          values={values}
          setValues={this.toggleValues}
          updateCard={this.updateCard}
        />
        <Search toggleText={this.toggleText} clickSearch={this.clickSearch} value={search} />
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
  imagWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
    top: '20%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
})

