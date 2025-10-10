import { JSX } from "react"
import {
  Text,
  StyleSheet,
  type ViewStyle,
  TouchableOpacity
} from "react-native"

interface Props {
  children: JSX.Element
  style?: ViewStyle
  onPress?: () => void
  disabled?: boolean
}
//?を付けた引数は値を渡しても渡さなくてもいい
const CircleButton = (props: Props): JSX.Element => {
  const { children, style, onPress, disabled = false } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.circleButton,
        style,
        disabled && { opacity: 0.5 } //無効時の見た目
      ]}
      activeOpacity={disabled ? 1 : 0.7} //無効時のエフェクトを消す
    >
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467fd3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 38
  }
})

export default CircleButton
