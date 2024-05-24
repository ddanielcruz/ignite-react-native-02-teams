import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { theme } from '@/styles/theme'
import { Loading } from '@/components/loading'
import { Routes } from '@/routes'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {hasLoadedFonts ? <Routes /> : <Loading />}
      <StatusBar style="light" />
    </ThemeProvider>
  )
}
