import { View, StyleSheet, TextInput, Alert } from "react-native"
import { router } from "expo-router"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { JSX, useState } from "react"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { db, auth } from "../../config"

//リトライ処理と保存中のボタンの無効化をするため再利用関数のため関数宣言に変更
async function handlePress(bodyText: string) {
  if (auth.currentUser === null) {
    return
  }

  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  //リトライ設定
  const retries = 3
  const delay = 1000

  for (let i = 0; i <= retries; i++) {
    try {
      const docRef = await addDoc(ref, {
        bodyText, //textInput
        updatedAt: Timestamp.fromDate(new Date()) //時刻
      })
      console.log("success", docRef.id)
      router.back()
      return //成功したので終了
    } catch (error: unknown) {
      if (i === retries) {
        console.error("最終的に失敗", error)
        Alert.alert(
          "保存に失敗しました",
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
const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState("")

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => {
            //bodyTextに入力された最初の文字列を state に保存する処理
            setBodyText(text)
          }}
          autoFocus //textInputに自動でフォーカスされてキーボードがすぐに表示される
        />
      </View>
      <CircleButton
        onPress={() => {
          handlePress(bodyText)
        }}
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
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create
