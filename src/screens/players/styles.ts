import { SafeAreaView } from 'react-native-safe-area-context'
import { css, styled } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray700};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0 16px;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`
