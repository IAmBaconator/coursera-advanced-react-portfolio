'use client'

import { useColorMode as useChakraColorMode, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export function ColorModeProvider(props) {
  return <>{props.children}</>
}

export function useColorMode() {
  const { colorMode, setColorMode, toggleColorMode } = useChakraColorMode()
  return {
    colorMode,
    setColorMode,
    toggleColorMode,
  }
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <IconButton
        onClick={toggleColorMode}
        variant='ghost'
        aria-label='Toggle color mode'
        size='sm'
        ref={ref}
        {...props}
      >
        <ColorModeIcon />
      </IconButton>
    )
  }
)
