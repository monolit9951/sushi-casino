import { Flex, Image, Text } from '@chakra-ui/react'
import point from 'assets/icons/point.svg'
import { useTranslation } from 'react-i18next'

interface Props {
  isLargerScreen?: boolean
  isWhite?: boolean
}

const Place = ({ isLargerScreen, isWhite = false }: Props) => {
  const { t } = useTranslation()

  return (
    <Flex align="center" gap={2} p="6px">
      <Image
        display={{ base: 'none', lg: 'block' }}
        src={point}
        filter={isWhite ? 'brightness(0) saturate(100%) invert(1)' : 'none'}
      />
      <Text
        fontSize={isLargerScreen ? 16 : '0.83rem'}
        fontWeight={isLargerScreen ? 400 : 200}
        color={isWhite ? 'white' : '#343330'}
        fontFamily="Rubik"
      >
        {t('place')}
      </Text>
    </Flex>
  )
}

export default Place
