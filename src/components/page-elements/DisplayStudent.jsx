import React from 'react'
import isEmpty from '../services/isObj'

export default function DisplayStudent({ data, loading }) {
  if (loading) {
    return (
      <div className='result-div'>
        <h3>Loading....</h3>
      </div>
    )
  }

  if (isEmpty(data)) {
    return (
      <div className='result-div'>
        <h3 style={{ textAlign: 'center' }}>No Record Found</h3>
      </div>
    )
  }

  return (
    <div className='result-div'>
      <h6>Roll No : {data.rollNo}</h6>
      <h6>
        Name : {data.firstname} {data.lastname}
      </h6>
      <h6>Age : {data.age}</h6>
    </div>
  )
}
