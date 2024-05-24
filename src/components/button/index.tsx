import { TouchableOpacityProps } from 'react-native'

import { Container, Content, ButtonVariant } from './styles'

export interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
  variant?: ButtonVariant
  children: string
}

export function Button({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <Container variant={variant} {...props}>
      <Content>{children}</Content>
    </Container>
  )
}
