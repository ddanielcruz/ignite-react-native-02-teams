import { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { ButtonIcon } from '@/components/button-icon'
import { Input } from '@/components/input'
import { Filter } from '@/components/filter'
import { PlayerCard } from '@/components/player-card'
import { ListEmpty } from '@/components/list-empty'
import { Button } from '@/components/button'
import { Player } from '@/storage/storage-types'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { fetchPlayers } from '@/storage/player/fetch-players'
import { createPlayer } from '@/storage/player/create-player'
import { AppError } from '@/errors/app-error'
import { removePlayer } from '@/storage/player/remove-player'
import { removeGroup } from '@/storage/group/remove-group'

const TEAMS = ['Time A', 'Time B']

interface PlayersScreenProps {
  route: {
    params: {
      group: string
    }
  }
}

export function PlayersScreen({ route }: PlayersScreenProps) {
  const navigation = useNavigation()

  const [team, setTeam] = useState(TEAMS[0])
  const [playerName, setPlayerName] = useState('')
  const [players, setPlayers] = useState<Player[]>([])

  const teamPlayers = players.filter((player: Player) => player.team === team)
  const { group } = route.params

  useEffect(() => {
    fetchPlayers(group).then(setPlayers)
  }, [group])

  async function handleCreatePlayer() {
    const name = playerName.trim()
    if (!name) {
      return Alert.alert('Novo participante', 'Digite o nome do participante.')
    }

    try {
      const player: Player = { id: Date.now(), name, team }
      await createPlayer(player, group)

      setPlayers((prevState) => [...prevState, player])
      setPlayerName('')
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Novo participante', error.message)
      }

      Alert.alert(
        'Novo participante',
        'Não foi possível adicionar o participante.',
      )
      console.error(error)
    }
  }

  async function handleRemovePlayer(id: number) {
    try {
      await removePlayer(id, group)
      setPlayers((prevState) => prevState.filter((player) => player.id !== id))
    } catch (error) {
      Alert.alert(
        'Remover participante',
        'Não foi possível remover o participante.',
      )
      console.error(error)
    }
  }

  async function handleRemoveGroup() {
    try {
      await removeGroup(group)
    } catch (error) {
      Alert.alert('Remover turma', 'Não foi possível remover a turma.')
      console.error(error)
    }

    navigation.navigate('groups')
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          value={playerName}
          onChangeText={setPlayerName}
        />

        <ButtonIcon icon="add" onPress={handleCreatePlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={TEAMS}
          keyExtractor={(teamName) => teamName}
          renderItem={({ item: teamName }) => (
            <Filter
              title={teamName}
              active={teamName === team}
              onPress={() => setTeam(teamName)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{teamPlayers.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={teamPlayers}
        keyExtractor={(player: Player) => String(player.id)}
        renderItem={({ item: player }) => (
          <PlayerCard
            name={player.name}
            onRemove={() => handleRemovePlayer(player.id)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          teamPlayers.length === 0 && { flex: 1 },
        ]}
      />

      <Button variant="destructive" onPress={handleRemoveGroup}>
        Remover turma
      </Button>
    </Container>
  )
}
