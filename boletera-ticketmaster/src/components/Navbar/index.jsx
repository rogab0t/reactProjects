//import { useState } from "react";
import { Link } from "react-router-dom";
import { mainRoute } from '../../utils/constants';
import styled from 'styled-components';

const NavContainer = styled.div`
  box-sizing: border-box;
  height: 25vh;
  max-height: 155px;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: #242424;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  align-items: center;
  grid-template-areas:
  "logo search profile"
  ;
  padding: 20px 2rem;
  gap: 2rem;

  @media (max-width: 430px) {
    grid-template-rows: 4vh;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
     "logo profile"
     "search search"
    ;
    padding: 40px 1rem;
    gap: 1rem;
  }
`;


const Navbar = ({ onSearch }) => {
  //const [search, setSearch] = useState(localStorage.getItem("searchTermLocal") ?? "");
  
  const handleInputChange = (event) => {
    //setSearch(event.target.value);
    onSearch(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <NavContainer>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginRight: 'auto',
        gridArea: "logo",
      }}>
        <p style={{
          fontSize: 23,
          fontWeight: 'bold'
        }}>Mi boletera</p>
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        gridArea: "search",
      }}>
        <input 
          placeholder="Busca tu evento"
          value={localStorage.getItem("searchTermLocal")}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          style={{
            width: '100%',
            border: 'none',
            borderRadius: 4,
            padding: '6px 12px',
            fontSize: '16px',
          }}
        />
      </div>
      <Link to={mainRoute + "profile/my-info"} style={{
          color: "#fff",
          textDecoration: "none",
          width: 100,
          marginLeft: 'auto',
          border: "1px solid #fff",
          padding: "3px 9px",
          borderRadius: 12,
          cursor: "pointer",
          fontSize: 15,
          gridArea: "profile",
        }}>Mi perfil</Link>
    </NavContainer>
  );
};

export default Navbar;