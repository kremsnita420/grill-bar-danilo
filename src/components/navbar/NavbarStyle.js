import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

export const Nav = styled.nav`
  position: relative;
  background: #746711;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: fixed;
  top: 1rem;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-125%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(LocalPizzaIcon)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
