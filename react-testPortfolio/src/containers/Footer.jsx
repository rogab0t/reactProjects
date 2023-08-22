import Container from "../elements/Container";
import { Column } from "../elements/Colum";
import { styled } from "styled-components";
import { Subtitle } from "../elements/Titles";
import { MailLink } from "../elements/Buttons";

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <Container>
        <Column>
          <Subtitle>contacto</Subtitle>
          <Column>
            <p>
              Rodrigo Grau Moreno /&nbsp;
              <MailLink href="mailto:grau.gau99@gmail.com"> 
                grau.gau99@gmail.com
              </MailLink>
            </p>
            <br></br>
            <p>rogab0t&copy; 2023</p>
          </Column>
        </Column>
      </Container>
    </footer>
  );
}

export default styled(Footer)`
  background-color: white;
  color: black;
`;