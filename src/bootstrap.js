import * as Font from 'expo-font'
import { DB } from './db'

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
    })
    await DB.init()
    console.log('DB init OK!')
  } catch (error) {
    console.log(error)
  }
}