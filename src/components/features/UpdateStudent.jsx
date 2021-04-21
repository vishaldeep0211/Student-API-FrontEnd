//This is using the Custom Hook to update the student data

import React from 'react'
import Student from '../page-elements/Student'
import Input from '../page-elements/Input'
import Button from '../page-elements/Button'
import Heading from '../page-elements/Heading'
import LogOutButton from '../page-elements/LogOutButton'
import { getLocalStorage } from '../services/LocalStorage'

export default function UpdateStudent(props) {
  const [studentData, setStudentData] = React.useState({
    rollNo: '',
    firstname: '',
    lastname: '',
    age: '',
  })

  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudentData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  const reqObj = {
    method: 'PUT',
    body: JSON.stringify(studentData),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getLocalStorage('authToken')}`,
    },
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
        <form style={{ margin: '0px 25px' }} onSubmit={handleSubmit}>
          <Input
            name={'rollNo'}
            placeholder={'Enter Roll Number'}
            handleChange={handleChange}
          />
          <Input
            name={'firstname'}
            placeholder={'Enter First Name'}
            handleChange={handleChange}
          />
          <Input
            name={'lastname'}
            placeholder={'Enter Last Name'}
            handleChange={handleChange}
          />
          <Input name={'age'} placeholder={'Age'} handleChange={handleChange} />
          <Button ButtonTitle={'Update Student'} />
        </form>
        {isSubmitted && (
          <Student
            key={studentData.rollNo}
            rollNo={studentData.rollNo}
            reqObj={reqObj}
          />
        )}
      </div>
    </div>
  )
}
