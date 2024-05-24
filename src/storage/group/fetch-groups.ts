import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '../storage-config'

export async function fetchGroups(): Promise<string[]> {
  const groups = await AsyncStorage.getItem(GROUP_COLLECTION)
  return groups ? JSON.parse(groups) : []
}
