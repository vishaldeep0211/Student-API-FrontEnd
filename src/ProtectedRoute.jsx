import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getLocalStorage } from './components/services/LocalStorage'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  var ls = getLocalStorage('authToken')
  //console.log(ls)

  return (
    <Route
      {...rest}
      render={(props) => {
        return ls === null ? (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }}
    />
  )
}
