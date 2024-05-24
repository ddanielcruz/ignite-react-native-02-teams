import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GroupsScreen } from '@/screens/groups'
import { NewGroupScreen } from '@/screens/new-group'
import { PlayersScreen } from '@/screens/players'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={GroupsScreen} />
      <Screen name="new-group" component={NewGroupScreen} />
      <Screen name="players" component={PlayersScreen} />
    </Navigator>
  )
}
