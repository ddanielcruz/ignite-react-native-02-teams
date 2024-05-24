import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storage-config'
import { fetchGroups } from './fetch-groups'

export async function removeGroup(group: string) {
  const groups = await fetchGroups()
  const filteredGroups = groups.filter((g) => g !== group)

  await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups))

  const playersKey = `${PLAYER_COLLECTION}/${group}`
  await AsyncStorage.removeItem(playersKey)
}
