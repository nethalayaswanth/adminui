import { useState } from 'react';
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
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from '../components/Card.js/card';

export default function Section({ children, title }) {
  
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card mb="20px" align="center" borderRadius={'lg'} p="20px">
      <Text
        color={textColorPrimary}
        fontWeight="semibold"
        textAlign="start"
        fontSize="md"
        lineHeight={6}
        mt={{ base: '20px', '2xl': '50px' }}
      >
        {title}
      </Text>
      <Flex
        position="relative"
        justify={'center'}
        direction="column"
        marginTop={5}
      >
        {children}
      </Flex>
    </Card>
  );
}
