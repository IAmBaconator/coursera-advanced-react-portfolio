import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";


/* TEMP References
* Chakra-UI: https://chakra-ui.com/docs/components/concepts/overview
* Formik: https://formik.org/docs/overview
* Yuk: https://github.com/jquense/yup
*/

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          {/* Landing Section */}
          {/* Projects Section */}
          {/* Contact Me Section */}
          {/* Footer */}
          {/* Alert */}
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
