import {
  AspectRatio,
  Box,
  BoxProps,
  Container,
  forwardRef,
  Heading,
  Input,
  Stack,
  Text,
  Image,
  VStack,
  Flex,
  useColorModeValue,
  FormControl,
  InputGroup,
  InputLeftElement,
  FormLabel,
} from '@chakra-ui/react';

import { useCallback, useState } from 'react';


export default function Details() {
 
  return (
    <>
      <Flex
        minHeight={'7.5rem'}
        direction="column"
        position="relative"
        justify={'center'}
      >
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          
          
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        >
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>

              <InputGroup>
                <InputLeftElement children="₹" />
                <Input type="text" name="price" placeholder="0.00" />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Name</FormLabel>

              <InputGroup>
                <InputLeftElement children=''/>
                <Input type="name" name="name" placeholder="name" />
              </InputGroup>
            </FormControl>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
