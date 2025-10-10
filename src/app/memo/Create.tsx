import { View, StyleSheet, TextInput } from "react-native"
import { JSX, useState } from "react"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import useSaveMemo from "../../useSaveMemo"


//UIロジック
const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState("")
  const { handlePress, isSaving } = useSaveMemo()

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
        onPress={() => handlePress(bodyText)}
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
