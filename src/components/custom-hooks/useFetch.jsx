import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url, reqObj) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  const getData = useCallback(async () => {
    const response = await fetch(url, reqObj)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }, [url, reqObj])

  useEffect(() => {
    getData()
  }, [url, getData])

  return { loading, data }
}
