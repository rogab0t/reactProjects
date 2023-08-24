import  { styled, css } from "styled-components";

const ButtonStyle = css`
  flex: 1;
  display: block;
  padding: 1.2rem;
  border: 0;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:active{
    opacity: 0.6;
  }
`;

export const Link = styled.a`
  ${ ButtonStyle }
  padding: 0;
  text-decoration: underline;
  color: #000000;
`;

export const PrimaryButton = styled.button`
  ${ ButtonStyle }
  background-color: #00bcd4;
  color: #ffffff;
`;

export const SecondaryButton = styled.button`
  ${ ButtonStyle }
  background-color: transparent;
  border: solid 1px CurrentColor;
  color: inherit;
`;

export const MailLink = styled.a`
  text-decoration: none;
  color: #000000;
`;