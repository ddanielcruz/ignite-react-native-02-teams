import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@/errors/app-error'

import { GROUP_COLLECTION } from '../storage-config'
import { fetchGroups } from './fetch-groups'

export async function createGroup(newGroup: string) {
  const groups = await fetchGroups()
  const groupWithSameName = groups.find((group) => group === newGroup)

  if (groupWithSameName) {
    throw new AppError('Já existe uma turma com esse nome.')
  }

  await AsyncStorage.setItem(
    GROUP_COLLECTION,
    JSON.stringify([...groups, newGroup]),
  )
}
