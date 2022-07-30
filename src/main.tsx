import { createRoot } from "react-dom/client";
import AppProvider from "./providers";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyled from "./styles/global";
import theme from "./styles/theme";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>

    <GlobalStyled />
  </ThemeProvider>
);
