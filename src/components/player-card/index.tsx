import { ButtonIcon } from '../button-icon'
import { Container, Icon, Name } from './styles'

export interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcon icon="close" variant="destructive" onPress={onRemove} />
    </Container>
  )
}