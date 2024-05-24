import { styled } from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
  padding: 24px;
`

// 55px is the height of the header
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 55px;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.green700,
  weight: 'fill',
}))`
  align-self: center;
`
