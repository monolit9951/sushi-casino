import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react'
import 'i18n/config'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { EXTERNAL_LINKS, NAV_LINKS } from '../../constants'

export const MainNavLink = ({ to, children, isWhite = false }: {
  to: string;
  children: React.ReactNode;
  isWhite?: boolean;
}) => {
  return (
    <Box
      as={NavLink}
      to={to}
      fontSize="0.83rem"
      transition="all 0.24s"
      fontWeight={400}
      letterSpacing=".35px"
      color={isWhite ? 'white' : '#343331'}
      fontFamily="Rubik"
      p="6px"
      _hover={{
        color: isWhite ? 'white' : 'gray.300',
      }}
      _activeLink={{
        color: isWhite ? 'white' : 'blue.100',
      }}
      textDecoration="none"
    >
      {children}
    </Box>
  )
}

export const ExternalLink = ({ href, children, isWhite = false }: {
  href: string;
  children: React.ReactNode;
  isWhite?: boolean;
}) => {
  return (
    <ChakraLink
      href={href}
      isExternal
      fontSize="0.83rem"
      transition="all 0.24s"
      fontWeight={400}
      letterSpacing=".35px"
      color={isWhite ? 'white' : '#343331'}
      fontFamily="Rubik"
      p="6px"
      _hover={{
        color: isWhite ? 'white' : 'gray.300',
      }}
      textDecoration="none"
    >
      {children}
    </ChakraLink>
  )
}

const NavBar = ({ isWhite = false }: { isWhite?: boolean }) => {
  const { t } = useTranslation()
  return (
    <Flex align="center" gap="24px" px="81.6px">
      {NAV_LINKS.map((route: string, idx: number) => (
        <MainNavLink to={route} key={`navbar.${idx}`} isWhite={isWhite}>
          {t(`navbar.${idx}`)}
        </MainNavLink>
      ))}
      {EXTERNAL_LINKS.map((route: string, idx: number) =>
        <ExternalLink href={route} isWhite={isWhite} key={`navbar.l${idx}`}>
          {t(`navbar.l${idx}`)}
        </ExternalLink>
      )}
    </Flex>
  )
}

export default NavBar
