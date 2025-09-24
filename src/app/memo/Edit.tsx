import { View, TextInput, StyleSheet, Alert } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { useState, useEffect, JSX } from "react"
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { auth, db } from "../../config"

//リトライ処理と保存中のボタンの無効化をするため再利用関数のため関数宣言に変更
async function handlePress(id: string, bodyText: string) {
  if (auth.currentUser === null) {
    return
  }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  const retries = 3
  const delay = 1000

  for (let i = 0; i <= retries; i++) {
    try {
      const docRef = await setDoc(ref, {
        bodyText, //textInput
        updatedAt: Timestamp.fromDate(new Date()) //時刻
      })
      console.log("success", docRef)

      router.back()
      return //成功したので終了
    } catch (error: unknown) {
      if (i === retries) {
        console.error("最終的に失敗", error)
        Alert.alert(
          "更新に失敗しました",
          "パスを確認して、もう一度お試しください。"
        )
        return
      }
      console.warn(`Retrying...(${i + 1}/${retries})`)
      await new Promise((r) => setTimeout(r, delay * (i + 1))) //バックオフ
    }
  }
}

//UIロジック
const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
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
        onPress={() => {
          handlePress(id, bodyText)
        }}
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
