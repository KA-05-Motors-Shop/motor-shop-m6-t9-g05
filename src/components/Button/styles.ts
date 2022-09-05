import { darken } from "polished";
import styled, { css } from "styled-components";

interface ContainerProps {
  width?: number;
  heigth?: number;
  big?: boolean;
  bgcolor?: string;
  color?: string;
  borderColor?: string;
}

export const ButtonContainer = styled.button<ContainerProps>`
  width: ${({ width }) => width}px;
  max-width: 332px;
  height: ${({ heigth }) => heigth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  border: 1.5px solid ${({ borderColor }) => borderColor};
  font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
  gap: 10px;

  ${({ big }) =>
    big
      ? css`
          padding: 12px 28px;
        `
      : css`
          padding: 12px 20px;
        `}
  ${({ big }) =>
    big
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 14px;
        `}

  &:hover {
    background-color: ${({ bgcolor, theme }) =>
      bgcolor === "transparent" ? theme.colors.grey6 : darken(0.09, bgcolor!)};
  }
`;
