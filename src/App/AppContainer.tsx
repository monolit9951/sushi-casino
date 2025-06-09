import AnimatedAppearance from '../components/AnimatedAppearance'
import { Box, Flex } from '@chakra-ui/react'
import AppHeader from './AppHeader'
import Routes from '../router/Routes'
import AppFooter from './AppFooter'
import Basket from 'modules/Basket'
import { BasketProvider } from '../contexts/BasketContext'
import PhoneCall from 'modules/PhoneCall/PhoneCall'
import { useLocation } from 'react-router-dom'

const AppContainer = () => {

  // && и хайд лейаут роутс применим ТОЛЬКО ДЛЯ СТРАНИЦЫ КАЗИНО (было добавлено ТОЛЬКО ДЛЯ КАЗИНО)
  const HIDE_LAYOUT_ROUTES = ['/casino']
  const location = useLocation()
  const hideLayout = HIDE_LAYOUT_ROUTES.includes(location.pathname)

  return (
    <AnimatedAppearance>
      <Flex flexDir="column" minH="100vh" pos="relative">
        <BasketProvider>
          {!hideLayout && <AppHeader />}
          <Box as="main" flex="1 0 auto">
            <Routes />
          </Box>
          {!hideLayout && <AppFooter />}
          {!hideLayout && (
            <>
              <Box
                w={{ base: '100%', lg: 'auto' }}
                pos="fixed"
                top={{ base: 'none', lg: '20' }}
                bottom={{ base: 0, lg: 'none' }}
                overflowX="scroll"
              />
              <Box pos="fixed" top={327} right={0}>
                <Basket />
              </Box>
              <Box pos="fixed" top={400} right={0}>
                <PhoneCall />
              </Box>
            </>
          )}
        </BasketProvider>
      </Flex>
    </AnimatedAppearance>
  )
}


export default AppContainer
