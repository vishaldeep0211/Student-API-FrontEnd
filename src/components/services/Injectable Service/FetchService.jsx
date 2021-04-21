//This is an injectable service, which is using Context API underhood

import React from 'react'
import { createContext, useContext } from 'react'
import { getLocalStorage } from '../LocalStorage'

const DataContext = createContext()

export const useDatafetch = () => {
  return useContext(DataContext)
}

export const DataProvider = (props) => {
  const value = {
    FetchData: props.FetchData || FetchData,
  }

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  )
}

const FetchData = (url) => {
  console.log(url)
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: `Bearer ${getLocalStorage('authToken')}`,
    },
  })
}
