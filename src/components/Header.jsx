import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import user from "../images/userr.png";
import Search from "./Search";

const Header = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link to='/'>
          <div className='logo'>Movie App</div>
        </Link>
        <div className='input-container'>
          <Search />
        </div>
        <div className='user-image'>
          <img src={user} alt='user' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .header {
    background-color: var(--secondary-color);
    height: 72px;
    padding: 0px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    color: var(--font-primary);
    font-size: 20px;
    font-weight: 600;
  }
  .user-image {
    width: 38px;
    height: 38px;
  }
`;

export default Header;
