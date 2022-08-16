import styled, { keyframes } from "styled-components";

const spinner = keyframes`
 to {
  transform: rotate(.5turn);
 }
`;

export const Spinner = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: #004dff;
  background: linear-gradient(currentColor 0 0) center/100% 4px,
    linear-gradient(currentColor 0 0) center/4px 100%,
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 7px),
      currentColor calc(100% - 6px)
    ),
    radial-gradient(circle 7px, currentColor 94%, #0000 0);
  background-repeat: no-repeat;
  animation: ${spinner} 1s infinite linear;
  position: relative;
  top: 50%;

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: inherit;
    transform: rotate(45deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.colors.grey8};
`;
