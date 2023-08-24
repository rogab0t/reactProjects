import { useContext } from "react";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { Link } from "../elements/Buttons";

const ArticlesLink = () => {
  let { username, articles } = useContext(ArticlesContext);

  return (
    <Link href={`https://dev.to/${username}`} target="_blank">Lee mis {articles.length} artículos</Link>
  );
}

export default ArticlesLink;