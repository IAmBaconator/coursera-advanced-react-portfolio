import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
