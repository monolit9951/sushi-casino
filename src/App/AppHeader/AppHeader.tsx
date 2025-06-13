import React, { useEffect, useRef, useState } from 'react'
import { Flex, useBreakpointValue, chakra, Container } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Place from './Place'
import Burger from './Burger'
import LanguageSelect from './LanguageSelect'
import { EXTERNAL_LINKS, NAV_LINKS } from '../../constants'
import NavBar, { ExternalLink } from './NavBar'
import casinoLogo from '../../assets/img/MainLogo.svg'

const MainNavLink = chakra(NavLink, {
  baseStyle: {
    fontSize: 16,
    transition: 'all 0.2s',
    fontWeight: 400,
    letterSpacing: '.35px',
    color: '#343330',
    fontFamily: 'Rubik',
    p: '6px',
    _hover: {
      color: 'gray.300',
    },
    _activeLink: {
      color: 'gray.600',
    },
  },
})

const AppHeader = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const isLargerScreen = useBreakpointValue({ base: false, lg: true })
  const burgerRef = useRef<HTMLDivElement | null>(null)

  // отображаем лого казино вместо сайта суши (только для одного адреса)
  const HIDE_LAYOUT_ROUTES = ['/roulette']
  const location = useLocation()
  const hideLayout = HIDE_LAYOUT_ROUTES.includes(location.pathname)

  const stickyStyle = {
    top: 0,
    zIndex: 1000,
    backgroundColor: hideLayout? '#1B1A1A' : 'white',
    borderBottom: hideLayout? '1px solid #1C1C1C' : '1px solid rgb(184, 185, 186)',
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (burgerRef.current && !burgerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <Container pos="fixed" as="header" maxWidth="100%" style={stickyStyle} ref={burgerRef}>
      <Flex
        align="center"
        justifyContent="space-between"
        w="100%"
        h="64px"
        px={{ base: 0, lg: '75px' }}
        py={{ base: 0, lg: '8px' }}
      >
          {/* <Logo /> */}

          <NavLink children={<img src={casinoLogo} alt='casinoLogo'/>} to={'/'} />
          {isLargerScreen ? (
            <>
              <NavBar />
              <Flex alignItems="center" gap="24px">
                <Place isLargerScreen={isLargerScreen}/>
                <LanguageSelect />
              </Flex>
            </>
          ) : (
            <>
              <MainNavLink to={!hideLayout? "/roulette" : "/"}>
                {t(!hideLayout? 'Roulette' : 'Rolls')} {/* Добавьте перевод для "Return" в ваших языковых файлах */}
              </MainNavLink>
              <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
            </>
          )}
      </Flex>
      {!isLargerScreen && isOpen && (
        <Flex flexDir="column" alignItems={'flex-end'}>
          {NAV_LINKS.map((route, idx) => (
            <MainNavLink to={route} key={`navbar.${idx}`}>
              {t(`navbar.${idx}`)}
            </MainNavLink>
          ))}
          <ExternalLink href={EXTERNAL_LINKS[1]} isExternal>
            {t(`navbar.l1`)}
          </ExternalLink>
          <Place isLargerScreen={isLargerScreen}/>

          {/*<Flex pb={2}>*/}
          {/*  <LanguageSelect text={'Select Language'} />*/}
          {/*</Flex>*/}
          {/*<Text>{LanguageSelect.name}</Text>*/}
        </Flex>
      )}

    </Container>
  )
}

export default AppHeader
