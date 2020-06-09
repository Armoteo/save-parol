import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import store from './src/store/index'

import { MainLayout } from './src/MainLayout'
import { ScreenState } from './src/context/screen/ScreenState'
import { bootstrap } from './src/bootstrap'


export default function App() {

  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }


  return (
    <Provider store={store}>
      <ScreenState>
        <MainLayout />
      </ScreenState>
    </Provider>

  );
}

