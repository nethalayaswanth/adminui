import { useState } from 'react';
import {
  Portal,
  Box,
  useDisclosure,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import routes from '../routes';
import Card from '../components/Card.js/card';
import Upload from '../components/Upload'
import Section from '../views/Section';
import Details from '../components/Details.js';

export default function DashBoard(props) {
  const [files, setFiles] = useState([]);
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Box
      p={10}
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      width={'100%'}
      height={'100%'}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        maxWidth={'md'}
        width={'md'}
        flex={1}
      >
        <Section title="Media">
          <Upload />
        </Section>
        <Section title='Details' >
         <Details/>
        </Section>
        <Section title='Pricing'>

        </Section>
      </Box>
    </Box>
  );
}
