import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { DB } from './src/db'
import Navbar from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { EditScreen } from './src/screens/EditScreen'


async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [screenId, setScreenId] = useState(1);
  const [isReady, setIsReady] = useState(false)


  useEffect(() => {
    initDB()
  })

  const initDB = async () => {
    try {
      await DB.init()
      console.log('DB init OK!')
    } catch (error) {
      console.log(error)
    }
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  let content = <MainScreen />;

  if (screenId !== 1) {
    content = <EditScreen />;
  }

  return (
    <SafeAreaView>
      <Navbar title={'DataSaver'} />
      <View style={styles.container}>
        {content}
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  }
});
