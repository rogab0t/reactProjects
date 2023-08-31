import { styled } from "styled-components";
import myImage from "../assets/images/myImage.jpg";
import Container from "../elements/Container";
import { Title } from "../elements/Titles";
import { StyledText } from "../elements/StyledText"
import { CircleImage } from "../elements/CircleImage";
import { PrimaryButton, SecondaryButton } from "../elements/Buttons";
import { Row } from "../elements/Row";
import ArticlesLink from "../blocks/ArticlesLink";

const RowsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;

  div{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
  }
`;

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container>
        <RowsContainer>
          <div>
            <Title>
              Bienvenid@, soy
              <StyledText> Rodrigo Grau </StyledText>
              desarrollador Frontend
            </Title>
            <Row>
              <PrimaryButton onClick={() => {
                window.open('https://rogab0t.github.io/#projects', '_blank');
              }}>Mis proyectos</PrimaryButton>
              <SecondaryButton onClick={() => {
                window.open('./Resume_ESP.pdf', '_blank');
              }}>Descarga mi CV</SecondaryButton>
            </Row>
            <ArticlesLink />
          </div>
          <CircleImage src={"." + myImage} />
        </RowsContainer>
      </Container>
    </header>
  );
}

export default styled(Header)`
  background-color: white;
  color: black;
`;