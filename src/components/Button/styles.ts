import styled, { css } from "styled-components";

interface ContainerProps {
  big?: boolean;
  bgcolor?: string;
  color?: string;
}

export const ButtonContainer = styled.button<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  border: 1.5px solid ${({ bgcolor }) => bgcolor};
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
  line-height: 0px;
  gap: 10px;
  :hover {
    cursor: pointer;
  }
`;
