import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { ScreenContext } from './context/screen/screenContext'
import Navbar from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { EditScreen } from './screens/EditScreen'
import { DB } from './db'

export const MainLayout = () => {
  const { screenId, changeScreen } = useContext(ScreenContext)

  return (<SafeAreaView>
    <Navbar title={'DataSaver'} editOpen={changeScreen} idScreen={screenId} />
    <View style={styles.container}>
      {screenId === 1 ? <MainScreen /> : <EditScreen />}
    </View>
  </SafeAreaView >)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  }
});
