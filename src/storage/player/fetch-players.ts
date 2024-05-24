import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '../storage-config'
import { Player } from '../storage-types'

export async function fetchPlayers(group: string): Promise<Player[]> {
  const key = `${PLAYER_COLLECTION}/${group}`
  const players = await AsyncStorage.getItem(key)

  return players ? JSON.parse(players) : []
}
