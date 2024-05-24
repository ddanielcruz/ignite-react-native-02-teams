import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { AppRoutes } from './app.routes'
import { View } from 'react-native'

export function Routes() {
  const { colors } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray700 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
