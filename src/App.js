import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { BrowserRouter, Route,Routes,  Redirect } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import theme from './theme/theme';
import DashBoard from './layout/DashBoard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" height={'100%'}>
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<DashBoard />}>
              {/* <Route path="products" element={<Expenses />} />
              <Route path="invoices" element={<Invoices />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
