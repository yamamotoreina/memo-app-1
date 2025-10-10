import { useState } from "react"
import { Alert } from "react-native"
import { auth, db } from "./config"
import { addDoc, setDoc, doc, collection, Timestamp } from "firebase/firestore"
import { router } from "expo-router"

export function useSaveMemo() {
  const [isSaving, setIsSaving] = useState(false)

  const handlePress = async (bodyText: string, id?: string) => {
    if (auth.currentUser === null) return
    if (isSaving) return // ← すでに保存中なら無視（連打防止）

    setIsSaving(true)
    try {
      const data = { bodyText, updatedAt: Timestamp.fromDate(new Date()) }

      if (id) {
        // 既存メモの更新
        const ref = doc(db, `users/${auth.currentUser.uid}/memos/${id}`)
        await setDoc(ref, data)
      } else {
        // 新規メモの作成
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        await addDoc(ref, data)
      }

      router.back() // 保存成功後に戻る
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Alert.alert("保存に失敗しました", "もう一度お試しください。")
    } finally {
      setIsSaving(false) // ← フラグを戻す
    }
  }

  return { handlePress, isSaving }
}

export default useSaveMemo
