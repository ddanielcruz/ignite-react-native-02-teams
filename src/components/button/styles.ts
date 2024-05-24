import styled from 'styled-components/native'

export type ButtonVariant = 'primary' | 'destructive'

type ButtonStyleProps = {
  variant: ButtonVariant
}

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, variant }) => {
    return variant === 'primary' ? theme.colors.green700 : theme.colors.red700
  }};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.white};
`
