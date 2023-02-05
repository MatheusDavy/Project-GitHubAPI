import { ThemeProvider } from "styled-components";
import { Routers } from "./Router/routers";
import { GlobalStyle } from "./styles/global";


import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routers/>

      <GlobalStyle />   
    </ThemeProvider>
  )
}
