import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '../storage-config'
import { fetchPlayers } from './fetch-players'

export async function removePlayer(playerId: number, group: string) {
  const players = await fetchPlayers(group)
  const filteredPlayers = players.filter((player) => player.id !== playerId)

  const key = `${PLAYER_COLLECTION}/${group}`
  await AsyncStorage.setItem(key, JSON.stringify(filteredPlayers))
}
