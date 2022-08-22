import { ButtonHTMLAttributes, ReactNode } from "react";
import theme from "../../styles/theme";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: number;
  height?: number;
  big?: boolean;
  bgcolor?: string;
  color?: string;
  borderColor?: string;
}

export const Button = ({
  children,
  width = 100,
  height = 10,
  big = false,
  bgcolor = theme.colors.brand1,
  color = theme.colors.whiteFixed,
  borderColor = "transparent",
  ...rest
}: ButtonProps) => (
  <ButtonContainer
    big={big}
    bgcolor={bgcolor}
    color={color}
    borderColor={borderColor}
    width={width}
    heigth={height}
    {...rest}
  >
    {children}
  </ButtonContainer>
);

export default Button;
