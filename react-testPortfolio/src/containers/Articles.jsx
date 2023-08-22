import { useContext } from "react";
import { Subtitle } from "../elements/Titles";
import { StyledText } from "../elements/StyledText";
import Container from "../elements/Container";
import Article from "../blocks/Article";
import { Row } from "../elements/Row";
import { ArticlesContext } from "../contexts/ArticlesContext";
import SwitcherDevTo from "../blocks/SwitcherDevTo";

const Articles = () => {
  let { articles } = useContext( ArticlesContext );

  return (
    <Container>
      <Subtitle>
        Mis posts en&nbsp;
        <StyledText>Dev.to</StyledText> 
      </Subtitle>
      <SwitcherDevTo />
      <Row>
        {
          articles.map((article) => <Article articleInfo={article} key={article.id}/>)
        }
      </Row>
    </Container>
  );
}

export default Articles;