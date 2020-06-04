import React, { useState, useContext } from 'react'
import { StyleSheet, View, FlatList, Keyboard, Image } from 'react-native'
import { CardContext } from '../context/card/cardContext'
import Search from '../components/Search'
import Card from '../components/Card'

export const MainScreen = (props) => {
  const cardContext = useContext(CardContext)
  const [search, setSearch] = useState('')
  const [viewData, setViewData] = useState(false)
  

  const toggleText = (text) => {
    if (text !== '') {
      setSearch(text)
      setViewData(true)
    } else {
      setViewData(false)
      Keyboard.dismiss()
      setSearch('')
    }
  }

  const clickSearch = () => {
    Keyboard.dismiss()
    setSearch('')
    setViewData(!viewData)
  }

  const filterSearchItem = (array, searchName) => {
    return array.filter(el => {
      let name = el.name ? el.name.toLowerCase() : el.name
      return name ? name.indexOf(searchName.toLowerCase()) !== -1 : null;
    })
  }

  const renderList = () => {
    let filterData = filterSearchItem(cardContext.cards, search)
    return <FlatList
      contentContainerStyle={{ paddingBottom: 320 }}
      data={filterData}
      renderItem={({ item }) =>
        (<Card
          itemData={item}
        />)
      }
      keyExtractor={item => item.id}
    />
  }

  const renderImage = () => {
    return <View style={styles.imagWrap}>
      <Image source={require('../../assets/original.png')} style={styles.image} />
    </View>
  }

  const renderData = () => {
    return viewData ? renderList() : renderImage()
  }

  return (
    <View>
      <Search toggleText={toggleText} clickSearch={clickSearch} value={search} />
      {renderData()}
    </View>
  )
}

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