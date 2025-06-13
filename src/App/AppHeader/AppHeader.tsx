import React, { useEffect, useRef, useState } from 'react'
import { Flex, useBreakpointValue, Container } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Place from './Place'
import Burger from './Burger'
import LanguageSelect from './LanguageSelect'
import { EXTERNAL_LINKS, NAV_LINKS } from '../../constants'
import NavBar, { ExternalLink, MainNavLink } from './NavBar'
import casinoLogo from '../../assets/img/MainLogo.svg'

const AppHeader = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const isLargerScreen = useBreakpointValue({ base: false, lg: true })
  const burgerRef = useRef<HTMLDivElement | null>(null)

  const HIDE_LAYOUT_ROUTES = ['/roulette']
  const location = useLocation()
  const hideLayout = HIDE_LAYOUT_ROUTES.includes(location.pathname)
  console.log('hideLayout:', hideLayout)

  const stickyStyle = {
    top: 0,
    zIndex: 1000,
    backgroundColor: hideLayout ? '#1B1A1A' : 'white',
    borderBottom: hideLayout ? '1px solid #1C1C1C' : '1px solid rgb(184, 185, 186)',
    color: hideLayout ? 'white' : '',
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
        <NavLink to="/">
          <img src={casinoLogo} alt="casinoLogo" />
        </NavLink>
        {isLargerScreen ? (
          <>
            <NavBar isWhite={hideLayout} />
            <Flex alignItems="center" gap="24px">
              <Place isLargerScreen={isLargerScreen} isWhite={hideLayout} />
              <LanguageSelect />
            </Flex>
          </>
        ) : (
          <>
            <MainNavLink to={!hideLayout ? "/roulette" : "/"} isWhite={hideLayout}>
              {t(!hideLayout ? 'Roulette' : 'Rolls')}
            </MainNavLink>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
      </Flex>

      {!isLargerScreen && isOpen && (
        <Flex flexDir="column" alignItems="flex-end">
          {NAV_LINKS.map((route, idx) => (
            <MainNavLink to={route} key={`navbar.${idx}`} isWhite={hideLayout}>
              {t(`navbar.${idx}`)}
            </MainNavLink>
          ))}
          <ExternalLink href={EXTERNAL_LINKS[1]} isWhite={hideLayout}>
            {t(`navbar.l1`)}
          </ExternalLink>
          <Place isLargerScreen={isLargerScreen} isWhite={hideLayout} />
        </Flex>
      )}
    </Container>
  )
}

export default AppHeader
