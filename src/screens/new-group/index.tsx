import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { createGroup } from '@/storage/group/create-group'

import { Container, Content, Icon } from './styles'
import { AppError } from '@/errors/app-error'

export function NewGroupScreen() {
  const navigation = useNavigation()
  const [group, setGroup] = useState('')

  async function handleCreate() {
    const groupName = group.trim()
    if (!groupName) {
      return Alert.alert('Nova Turma', 'Informe o nome da turma.')
    }

    try {
      await createGroup(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Nova Turma', error.message)
      }

      Alert.alert('Nova Turma', 'Não foi possível criar uma nova turma.')
      console.error(error)
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="cria a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />

        <Button style={{ marginTop: 20 }} onPress={handleCreate}>
          Criar
        </Button>
      </Content>
    </Container>
  )
}
