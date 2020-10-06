import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  list-style: none;
  font-weight: 800;
  justify-content: space-around;
  font-size: 40px;
  color: white;
  margin-bottom: 30px;
  text-decoration: none;
  background-color: rgb(255, 153, 255);
`;

const Nav = () => {
  return (
    <NavStyle>
      <li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/MovieList">
          영화목록
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          영화등록
        </Link>
      </li>
    </NavStyle>
  );
};

export default Nav;
