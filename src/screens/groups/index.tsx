import { useState, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { GroupCard } from '@/components/group-card'
import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { ListEmpty } from '@/components/list-empty'
import { Button } from '@/components/button'

import { Container } from './styles'
import { fetchGroups } from '@/storage/group/fetch-groups'

export function GroupsScreen() {
  const navigation = useNavigation()
  const [groups, setGroups] = useState<string[]>([])

  useFocusEffect(
    useCallback(() => {
      fetchGroups().then(setGroups)
    }, []),
  )

  const handleNewGroup = () => {
    navigation.navigate('new-group')
  }

  const handleOpenGroup = (groupName: string) => {
    navigation.navigate('players', { group: groupName })
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(group) => group}
        renderItem={({ item: group }) => {
          return (
            <GroupCard title={group} onPress={() => handleOpenGroup(group)} />
          )
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length ? undefined : { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada." />
        )}
      />

      <Button onPress={handleNewGroup}>Criar nova turma</Button>
    </Container>
  )
}
