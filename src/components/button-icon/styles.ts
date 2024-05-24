import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconVariant = 'primary' | 'destructive'

type ButtonIconStyleProps = {
  variant: ButtonIconVariant
}

export const Container = styled.TouchableOpacity<ButtonIconStyleProps>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === 'primary' ? theme.colors.green700 : theme.colors.red,
  }),
)``
