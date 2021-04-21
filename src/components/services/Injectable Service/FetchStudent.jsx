//This is using the injectable services to retrieve the data of a Student

import React from 'react'
import Input from '../../page-elements/Input'
import { SubmitButton } from '../Injectable Service/SubmitButton'
import Heading from '../../page-elements/Heading'
import { DataProvider } from '../Injectable Service/FetchService'
import LogOutButton from '../../page-elements/LogOutButton'

export default function FetchStudent(props) {
  const [rollNo, setRollNo] = React.useState('')

  const handleChange = (e) => {
    const enteredRollNo = e.target.value
    setRollNo(enteredRollNo)
  }

  return (
    <div>
      <LogOutButton key={rollNo} history={props.history} />
      <div className='container-div'>
        <Heading headingType={'h1'} headingText={'Welcome to Student Portal'} />

        <Input
          name={'rollNo'}
          placeholder={'Enter Roll Number'}
          handleChange={handleChange}
        />
        <DataProvider>
          <SubmitButton ButtonTitle={'Fetch Student'} RollNo={rollNo} />
        </DataProvider>
      </div>
    </div>
  )
}
