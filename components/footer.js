import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} HarrisK. All Rights Reserved.
      Inspired by Takuya_Matsuyama
    </Box>
  )
}

export default Footer
