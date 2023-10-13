import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
background-color: #3a3d4d;;
color: #fff,
padding: 10px
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-left: 10%;
  padding-right: 10%;
`;

const Logo = styled.div`
  img {
    width: 150px;
  }
`;

const Search = styled.div`
  width: 290px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 55px;
  background-color: #121319;
  input {
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: #51556b;
  }
  ,
  button {
    background-color: #252732;
    color: #fff;
    border: none;
    padding: 10px 15px;
    margin-left: 10px;
    border-radius: 55px;
  }
  button: hover {
    background-color: #121319;
    cursor: pointer;
  }
`;

const Actions = styled.div`
  button {
    background-color: #252732;
    color: #fff;
    border: none;
    padding: 10px 15px;
    margin-left: 10px;
    border-radius: 55px;
  }
  button: hover {
    background-color: #121319;
    cursor: pointer;
  }
`;

const CustomButton = styled.button``;

function Header() {
  return (
    <HeaderWrapper>
      <Navbar>
        <Logo className="logo">
          <img src="/LOGO.png" alt="logo" />
        </Logo>
        <Search className="search">
          <input type="text" placeholder="Buscar..." />
          <button className="search-btn">Search</button>
        </Search>
        <Actions className="actions">
          <CustomButton id="custom-btn" className="--btn">
            Sign in
          </CustomButton>
          <button className="btn">Sign up</button>
        </Actions>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;
