import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Keyboard, Image } from 'react-native'
import {DB} from './src/db'
import * as FileSystem from 'expo-file-system';

import Navbar from './src/components/Navbar'
import Search from './src/components/Search'
import Card from './src/components/Card'

const saveData = [
  {
    id: '1',
    name: 'Rozetka',
    login: 'victor7777',
    pass: 'victor7777',
    url: 'https://rozetka.com.ua/ua/'
  },
  {
    id: '2',
    name: 'Udemy',
    login: 'mephisto0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.com/'
  },
  {
    id: '3',
    name: 'Rozetka',
    login: 'victor7777',
    pass: 'victor7777',
    url: 'https://rozetka.com.ua/ua/'
  },
  {
    id: '4',
    name: 'Udemy',
    login: 'mephisto0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.com/'
  },
  {
    id: '5',
    name: 'Rozetka',
    login: 'victor7777',
    pass: 'victor7777',
    url: 'https://rozetka.com.ua/ua/'
  },
  {
    id: '6',
    name: 'Udemy',
    login: 'mephisto0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.com/'
  },
  {
    id: '7',
    name: 'Rozetka',
    login: 'victor7777',
    pass: 'victor7777',
    url: 'https://rozetka.com.ua/ua/'
  },
  {
    id: '8',
    name: 'Udemy',
    login: 'mephisto0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.com/'
  },
  {
    id: '9',
    name: 'Rozetka',
    login: 'victor7777',
    pass: 'victor7777',
    url: 'https://rozetka.com.ua/ua/'
  },
  {
    id: '10',
    name: 'Udemy',
    login: 'mephisto0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.com/'
  },
  {
    id: '11',
    name: 'Udemy',
    login: 'mephisto0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.com/'
  },
  {
    id: '12',
    name: 'Udemy',
    login: 'mephisto0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.com/'
  },
  {
    id: '13',
    name: '7777',
    login: '=0000',
    pass: 'mepfjri*655',
    url: 'https://www.udemy.77777/'
  }
]

export default function App() {
  const [data, setData] = useState(saveData)
  const [search, setSearch] = useState('')
  const [viewData, setViewData] = useState(false)

  useEffect(()=>{
    initDB()
  })

  const initDB = async ()=>{
    try{
     await DB.init()
     console.log('DB init OK!')
    }catch(error){
      console.log(error)
    }
    
  }

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
    let filterData = filterSearchItem(data, search)
    return <FlatList
      contentContainerStyle={{ paddingBottom: 250 }}
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
      <Image source={require('./assets/original.png')} style={styles.image} />
    </View>
  }

  const renderData = () => {
    return viewData ? renderList() : renderImage()
  }
  return (
    <SafeAreaView>
      <Navbar title={'DataSaver'} />
      <View style={styles.container}>
        <Search toggleText={toggleText} clickSearch={clickSearch} value={search} />
        {renderData()}
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
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
  }
});
