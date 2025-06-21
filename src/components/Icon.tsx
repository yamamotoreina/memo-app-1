import { createIconSetFromIcoMoon } from "@expo/vector-icons"
import { useFont } from "expo-font"

import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,
  'IcoMoon',
  'icomoon.ttf'
)
const Icon = (): JSX.Element => {
  return(
    <CustomIcon name="plus" size={40} color='red' />
  )
}

export default Icon
