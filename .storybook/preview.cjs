import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import theme from "../src/styles/theme";

addDecorator(withThemes(ThemeProvider, [theme]));

