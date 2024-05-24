import { useNavigation } from '@react-navigation/native'

import { BackButton, BackIcon, Container, Logo } from './styles'

export interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  const handleNavigateToHome = () => {
    // Another alternative is to use `popToTop`
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleNavigateToHome}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={require('../../assets/logo.png')} />
    </Container>
  )
}
