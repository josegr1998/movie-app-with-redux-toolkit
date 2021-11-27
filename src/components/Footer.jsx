import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer'>
        <div>Movie App</div>
        <div>@2021 movie inc or its affiliates</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
    background: var(--secondary-color);
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-primary);
    flex-direction: column;
  }
`;

export default Footer;
