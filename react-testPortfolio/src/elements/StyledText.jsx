import { styled } from "styled-components";

export const StyledText = styled.span`
  position: relative;
  display: inline-block;
  font-weight: bold;
  color: green;
  line-height: 1.3em;

  &::after{
    content: '';
    position: absolute;
    top: 1.2em;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: currentColor;
    border-radius: 5px;
  }
`;