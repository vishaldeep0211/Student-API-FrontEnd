import React from 'react'
import Input from './components/page-elements/Input'
import Heading from './components/page-elements/Heading'
import auth from './components/services/auth'
import { setLocalStorage } from './components/services/LocalStorage'

export default function PortalHome(props) {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })

  const [err, seterr] = React.useState(false)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      }
    })
  }

  const handleClick = (e) => {
    console.log(user)

    auth()
      .login('/rest/webapi/login', user.email, user.password)
      .then((res) => {
        //console.log(res)
        if (res.status === 200) {
          setLocalStorage('authToken', res.data)
          props.history.push('/StudentHome')
        }
      })
      .catch((err) => {
        console.log(err.toJSON())
        seterr(true)
      })
  }

  return (
    <div>
      <div className='container-div'>
        {err && (
          <p style={{ textAlign: 'center', color: 'red' }}>
            Invalid LogIn Credential, Please Enter Again
          </p>
        )}
        <Heading
          headingType={'h1'}
          headingText={'Welcome to Student Home Portal'}
        />
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Enter Your Email'}
          handleChange={handleChange}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder={'Enter Your Password'}
          handleChange={handleChange}
        />
        <button className='btn btn-primary btn-lg' onClick={handleClick}>
          LogIn
        </button>
        <div className='signUp'>
          <Heading headingType={'h3'} headingText={'New Here, SignUp?'} />
        </div>
      </div>
    </div>
  )
}
