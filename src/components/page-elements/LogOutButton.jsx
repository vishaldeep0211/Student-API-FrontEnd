import React from 'react'
//import auth from '../services/auth'
import { deleteLocalStorage } from '../services/LocalStorage'

export default function LogOutButton({ history }) {
  return (
    <div>
      <button
        className='btn btn-primary btn-lg'
        onClick={() => {
          deleteLocalStorage('authToken')
          history.push('/')
        }}
      >
        LogOut
      </button>
    </div>
  )
}
