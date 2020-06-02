import React from "react"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"

const App = (Components) => (
  <ThemeProvider >
    <CSSReset />
    <ColorModeProvider>
      <Components/>
    </ColorModeProvider>
  </ThemeProvider>
)

export default App
