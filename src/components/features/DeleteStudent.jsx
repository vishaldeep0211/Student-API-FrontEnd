//This is using Custom Hook to delete the student data

import React from 'react'
import Student from '../page-elements/Student'
import Heading from '../page-elements/Heading'
import Input from '../page-elements/Input'
import Button from '../page-elements/Button'
import LogOutButton from '../page-elements/LogOutButton'
import { getLocalStorage } from '../services/LocalStorage'

export default function DeleteStudent(props) {
  const [rollNo, setRollNo] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const reqObj = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: `Bearer ${getLocalStorage('authToken')}`,
    },
  }

  const handleChange = (e) => {
    const enteredRollNo = e.target.value
    setRollNo(enteredRollNo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div>
      <LogOutButton key={1} history={props.history} />
      <div className='container-div'>
        <Heading headingType={'h1'} headingText={'Welcome to Student Portal'} />
        <form onSubmit={handleSubmit}>
          <Input
            name={'rollNo'}
            placeholder={'Enter Roll Number'}
            handleChange={handleChange}
          />
          <Button ButtonTitle={'Delete Student'} />
        </form>
        {isSubmitted && (
          <Student key={rollNo} rollNo={rollNo} reqObj={reqObj} />
        )}
      </div>
    </div>
  )
}
