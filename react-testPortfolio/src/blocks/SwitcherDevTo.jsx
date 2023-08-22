import { useContext } from "react";
import { styled } from "styled-components";
import { SecondaryButton } from "../elements/Buttons";
import { ArticlesContext } from "../contexts/ArticlesContext";

const SwitcherDevTo = ({ className }) => {
  let { username, setUser} = useContext(ArticlesContext);
  
  let switchUsername = () => {
    if (username === "rogab0t") {
      setUser("microsoft")
    } else {
      setUser("rogab0t")
    }
  }

  return (
    <p className={className}>
        {
          username === "rogab0t" 
          ? "Ver los de mi empresa:" 
          : `(${username}) Regresar a los míos:`
        }
        
        <SecondaryButton onClick={(e) => switchUsername()}>Ver</SecondaryButton>
    </p>
  );
}

export default styled(SwitcherDevTo)`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 2rem;
`;