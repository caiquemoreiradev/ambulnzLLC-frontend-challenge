import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import GlobalStyle from "./styles/GlobalStyles"
import { theme } from "./styles/theme"
import CartProvider from "./contexts/useCart"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Router } from "./router"

const queryClient = new QueryClient()

function App() {

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <GlobalStyle />
          <Router />
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
