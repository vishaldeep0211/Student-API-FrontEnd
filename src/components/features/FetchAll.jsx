//This is using react-redux and redux-thunk to fetch all the students

import React from 'react'
import Heading from '../page-elements/Heading'
import { v4 as uuidv4 } from 'uuid'
import LogOutButton from '../page-elements/LogOutButton'
import ax from '../services/AxiosService'
import { useDispatch, useSelector } from 'react-redux'

export default function FetchAll(props) {
  const dispatch = useDispatch()
  const studData = useSelector((state) => state.studReducer)

  React.useEffect(() => {
    dispatch(ax().getStudentData())
  }, [dispatch])

  return (
    <div>
      <LogOutButton key={uuidv4()} history={props.history} />
      <div className='container-div'>
        <Heading
          key={uuidv4()}
          headingType={'h1'}
          headingText={'Welcome to Student Portal'}
        />
        {studData.loading ? (
          <h3>Loading...</h3>
        ) : (
          <div key={uuidv4()} className='result-div'>
            <ol>
              {studData.data.map((dataItems) => (
                <li key={dataItems.rollNo}>
                  <h6>Roll No : {dataItems.rollNo}</h6>
                  <h6>
                    Name : {dataItems.firstname} {dataItems.lastname}
                  </h6>
                  <h6>Age : {dataItems.age}</h6>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}
