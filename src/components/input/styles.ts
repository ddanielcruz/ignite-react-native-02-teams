import { styled } from 'styled-components/native'

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray300,
}))`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray700};

  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};

  border-radius: 6px;
  padding: 16px;
`
