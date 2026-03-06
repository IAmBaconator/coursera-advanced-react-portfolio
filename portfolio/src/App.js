import { Provider } from "./components/ui/provider";
import { AlertProvider } from "./context/alertContext";

import Header from "./components/Header";


/* TEMP References
* Chakra-UI: https://chakra-ui.com/docs/components/concepts/overview
* Formik: https://formik.org/docs/overview
* Yuk: https://github.com/jquense/yup
*/

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
