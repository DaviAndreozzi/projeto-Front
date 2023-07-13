import React from "react";
import { Router } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styled";
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
};

export default App;
