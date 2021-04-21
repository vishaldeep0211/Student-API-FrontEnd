import React from 'react'
import { useFetch } from '../custom-hooks/useFetch'
import DisplayStudent from './DisplayStudent'

export default function Student({ rollNo, reqObj }) {
  const url = 'http://localhost:8080/rest/webapi/students/' + rollNo

  const { loading, data } = useFetch(url, reqObj)

  return <DisplayStudent data={data} loading={loading} />
}
