import { View, TextInput, StyleSheet, Alert } from "react-native"
import {  useLocalSearchParams } from "expo-router"
import { useState, useEffect, JSX } from "react"
import { doc, getDoc } from "firebase/firestore"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { auth, db } from "../../config"
import useSaveMemo from "../../useSaveMemo"

//UIロジック
const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
 const { handlePress, isSaving } = useSaveMemo()

  const [bodyText, setBodyText] = useState("")
  useEffect(() => {
    if (auth.currentUser === null) {
      return
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef?.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error) => {
        console.log(error)
        Alert.alert(
          "更新に失敗しました",
          "パスを確認して、もう一度お試しください。"
        )
      })
  }, [])
  console.log("edit", id)
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => {
            setBodyText(text)
          }}
          autoFocus
        />
      </View>
      <CircleButton
        onPress={() => handlePress(bodyText, id)} //idで編集内容を取得
        disabled={isSaving} // ← 保存中は押せない
        style={{ top: "auto", bottom: 40 }}

      >
        <Icon name="check" size={40} color="ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32,
    paddingHorizontal: 27
  }
})

export default Edit
