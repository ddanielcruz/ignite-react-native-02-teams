import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '../storage-config'
import { Player } from '../storage-types'
import { fetchPlayers } from './fetch-players'

export async function createPlayer(player: Player, group: string) {
  const players = await fetchPlayers(group)
  const hasPlayerWithSameName = players.some((p) => p.name === player.name)

  if (hasPlayerWithSameName) {
    throw new Error('Essa pessoa já está cadastrada em um time!')
  }

  players.push(player)

  const key = `${PLAYER_COLLECTION}/${group}`
  await AsyncStorage.setItem(key, JSON.stringify(players))
}
