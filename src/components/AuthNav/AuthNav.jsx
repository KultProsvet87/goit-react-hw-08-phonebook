import { Typography } from '@mui/material';
import { Nav } from './AuthNav.styled';
import { NavLinkItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav sx={{ display: 'flex' }}>
      <NavLinkItem to="/register">
        <Typography variant="button" color="#fff">
          Register
        </Typography>
      </NavLinkItem>
      <NavLinkItem to="/login">
        <Typography variant="button" color="#fff">
          Log In
        </Typography>
      </NavLinkItem>
    </Nav>
  );
};
