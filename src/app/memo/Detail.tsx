import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
  return(
    <View>
      <Header />
      <View>
        <Text>買い物リスト</Text>
        <Text>2025年10月22日 10:00</Text>
      </View>
      <ScrollView>
        <Text>
          買い物リスト
          書体やレイアウトなどを把握するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  )
}

// const styles = StyleSheet.create({

// })

export default Detail
