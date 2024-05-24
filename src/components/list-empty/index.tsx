import { Container, Message } from './styles'

export interface ListEmptyProps {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
