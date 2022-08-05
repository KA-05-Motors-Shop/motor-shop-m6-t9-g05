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
  border-radius: 4px;
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
  font-weight: ${({ theme }) => theme.fonts.fontWeight600};
  gap: 10px;
  :hover {
    cursor: pointer;
  }
`;
