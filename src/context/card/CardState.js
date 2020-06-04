import React, { useReducer } from 'react'
import { CardContext } from './cardContext'
import { cardReducer } from './cardReducer'

export const CardState = ({ children }) => {

  const initialState = {
    cards: [
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
  }

  const [state, dispatch] = useReducer(cardReducer, initialState)

  return <CardContext.Provider
    value={{
      cards: state.cards
    }}
  >{children}
  </CardContext.Provider>
}