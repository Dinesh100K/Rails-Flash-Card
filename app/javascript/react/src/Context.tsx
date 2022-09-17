import React, { createContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export const myContext = createContext({})

function Context(props: any) {
  const [userObject, setUserObject] = useState<any>()

  useEffect(() => {
    // console.log("axios:", `${process.env.REACT_APP_BASE_URL}/api/getuser`)
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/getuser`, {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        // console.log('data received : ', res.data)
        if (res.data) {
          setUserObject(res.data)
        }
      })
  }, [])

  return <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
}

export default Context
