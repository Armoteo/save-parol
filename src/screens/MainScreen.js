import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Keyboard, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../components/Search'
import Card from '../components/Card'
import { loadCards } from '../store/actions/cardAction'
import EditModal from '../components/EditModal'

const MainScreen = () => {
  const [search, setSearch] = useState('')
  const [viewData, setViewData] = useState(false)
  const [modal, setModal] = useState(false)
  const [data, setData] = useState({})
  const [values, setValues] = useState([])

  const dispatch = useDispatch()
  const cards = useSelector(state => state.card.allCards)

  useEffect(() => {
    dispatch(loadCards())
  }, [dispatch])

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

  const clickEditBtn = (data) => {
    setData(data)
    setModal(true)
  }

  const renderList = () => {
    if (cards) {
      let filterData = filterSearchItem(cards, search)
      if (filterData.length > 0) {
        return <FlatList
          contentContainerStyle={{ paddingBottom: 320 }}
          data={filterData}
          renderItem={({ item }) =>
            (<Card
              itemData={item}
              onClick={clickEditBtn}
            />)
          }
          keyExtractor={item => item.id.toString()}
        />
      } else {
        alert('not found data')
        setViewData(false)
      }
    } else {
      alert('Data not found')
    }
  }

  const renderImage = () => {
    return <View style={styles.imagWrap}>
      <Image source={require(
        // @ts-ignore
        '../../assets/original.png')} style={styles.image} />
    </View>
  }

  const renderData = () => {
    return viewData ? renderList() : renderImage()
  }

  return (
    <View>
      <EditModal
        modal={modal}
        setModal={setModal}
        data={data}
        values={values}
        setValues={setValues}
      />
      <Search toggleText={toggleText} clickSearch={clickSearch} value={search} />
      {renderData()}
    </View>
  )
}

export default MainScreen

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