import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Nav = styled(Box)`
  gap: 20px;
  justify-content: space-between; ;
`;

export const NavLinkItem = styled(NavLink)`
  border-radius: 5px;
  padding: 5px 15px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
  background-color: #698f6e;
  display: block;
  text-align: center;

  &.active {
    background-color: #00704f;
  }
  :hover {
    background-color: #49644d;
  }
`;
