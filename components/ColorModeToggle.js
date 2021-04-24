import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ColorModeToggle(props) {
  const { ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      colorScheme="darkAlpha"
      icon={
        colorMode === 'light' ? 
        <SunIcon boxSize={5} color="white"/> 
        : <MoonIcon boxSize={5} color="white"/>
      }
      onClick={toggleColorMode}
      {...rest}
    />
  )
}
