import styled from "styled-components";
import { Link } from "../elements/Buttons";

const Article = ({ articleInfo, className }) => {
  return (
    <article className={className}>
      <img src={articleInfo.social_image} alt="cover"/>
      <div>
        <h3>{articleInfo.title}</h3>
        <Link href={articleInfo.url} target="_blank" rel="noopener noreferrer">Ver artículo</Link>
      </div>
    </article>
  );
}

export default styled(Article)`
  width: min(300px, 100%);
  border: solid 1px #e6e6e6e6;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #000000;
  padding: 1em;

  img{
    max-width: 100%;
    border: solid 1px #000000;
    border-radius: 10px 10px 0 0;
  }
  div{
    padding: 1em;
  }
`;