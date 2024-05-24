import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, ButtonIconVariant, Icon } from './styles'

export interface ButtonIconProps
  extends Omit<TouchableOpacityProps, 'children'> {
  variant?: ButtonIconVariant
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({
  variant = 'primary',
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <Container variant={variant} {...props}>
      <Icon name={icon} variant={variant} />
    </Container>
  )
}
