//This is a part of the injectable service, this Submit button will call
// the injectable service.

import React from 'react'
import { useDatafetch } from '../Injectable Service/FetchService'
import DisplayStudent from '../../page-elements/DisplayStudent'

export const SubmitButton = ({ ButtonTitle, RollNo }) => {
  const [studentData, setstudentData] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [isClicked, setisClicked] = React.useState(false)

  const data = useDatafetch()
  const fetchData = async () => {
    setisClicked(true)
    const res = await data.FetchData(
      `http://localhost:8080/rest/webapi/students/${RollNo}`
    )
    const studData = await res.json()

    setstudentData(studData)
    setLoading(false)
  }

  return (
    <div>
      <button type='submit' className='btn btn-primary' onClick={fetchData}>
        {ButtonTitle}
      </button>
      {isClicked && <DisplayStudent data={studentData} loading={loading} />}
    </div>
  )
}
