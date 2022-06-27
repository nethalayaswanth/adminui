import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './global';
import { CardComponent } from './components/card';
export default extendTheme(globalStyles, CardComponent);
