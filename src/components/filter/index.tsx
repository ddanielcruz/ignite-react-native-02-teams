import { TouchableOpacityProps } from 'react-native'

import { Container, FilterStyleProps, Title } from './styles'

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, ...props }: FilterProps) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
