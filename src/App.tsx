import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Login } from './components/Login';

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
