import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import RestaurantIcon from '@material-ui/icons/Restaurant';

export const Nav = styled.nav`
  position: relative;
  background-color: rgba(0,0,0, 1);
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  background-color: rgba(33,33,33, .7);
  padding: 0 3rem;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  span {
    display: block;
    padding: 10px;
    font-size: 3rem;
    font-family: 'Vast Shadow', cursive;
    color: #e31500;
  }

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

  
  &:hover{
    color: #e31500;
  }
`;

export const Fork = styled(RestaurantIcon)`
  font-size: 3rem;
  margin-right: 10px;
`

export const Bars = styled(LocalPizzaIcon)`
display: block;
  font-size: 3rem;
  height: 3rem;
  transform: translate(-50%, -15%);
`;
