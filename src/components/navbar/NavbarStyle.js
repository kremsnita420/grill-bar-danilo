import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

export const Nav = styled.nav`
  position: relative;
  background-color: rgb(0,0,0,1);
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  font-family: 'Style Script', cursive;
  letter-spacing: 6px;
  background-color: rgb(0,0,0,1);
  top: 10px;
  position: absolute;
  padding: 0 2.5rem;
  border-radius: .75rem;
  color: #fff;
  font-size: clamp(1rem, 3vw, 2rem);
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 3;
  text-align: center;
  display: block;


  span {
    display: block;
    font-size: clamp(3rem, 6vw, 5rem);
    font-family: 'Vast Shadow', cursive;
    color: #e31837;
  }

`

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  z-index: 100;
  top: 1rem;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {

    transform: translate(-125%, 100%);
    font-weight: bold;
  }

  
  &:hover{
    color: #e31837;
  }
`


export const Bars = styled(LocalPizzaIcon)`
display: block;
  font-size: 3rem;
  transform: translate(-50%, -15%);
`;
