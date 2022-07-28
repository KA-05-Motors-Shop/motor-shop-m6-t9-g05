import { ButtonHTMLAttributes, ReactNode } from "react";
import theme from "../../styles/theme";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  big?: boolean;
  bgcolor?: string;
  color?: string;
}
export const Button = ({
  children,
  big = false,
  bgcolor = theme.colors.brand1,
  color = theme.colors.whiteFixed,
  ...rest
}: ButtonProps) => (
  <ButtonContainer big={big} bgcolor={bgcolor} color={color} {...rest}>
    {children}
  </ButtonContainer>
);

export default Button;
