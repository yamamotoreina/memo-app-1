import { Redirect, router } from "expo-router"
import { onAuthStateChanged } from "firebase/auth"
import { JSX, useEffect } from "react"

import { auth } from "../config"

const Index = (): JSX.Element => {
  useEffect(() => {   //ここでログイン状態を監視してリロードしてもログイン状態が保たれるようにする
    onAuthStateChanged(auth, (user) =>{
      if( user!== null ){
        router.replace('/memo/List')
      }
    })
  },[])

  return <Redirect href='auth/log_in'/>
}

export default Index
