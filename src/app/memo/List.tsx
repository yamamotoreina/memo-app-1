import { View, StyleSheet } from "react-native"
import { router, useNavigation } from 'expo-router'
import { useEffect } from "react"

import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import LogOutButton from "../../components/LogOutButton"

const handlePress = ():void => {
  router.push('/memo/Create')
}

//memoItemの構造化
const Index = (): JSX.Element => {
  const navigation = useNavigation ()
  useEffect( () => {  //useEffectで副作用を取り込んでいる
    navigation.setOptions({
      headerRight: () => { return <LogOutButton/> }
    })
  } , [] )
  
  return (
    <View style={styles.container}>

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleButton onPress={handlePress}>
        <Icon name='plus1' size={40} color="ffffff" />
      </CircleButton>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
})

export default Index
