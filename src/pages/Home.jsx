import { Typography } from '@mui/material';
import { HomeContainer } from './HomeWelcom';

const HomePage = () => {
  return (
    <HomeContainer sx={{ mt: { xs: '5px', sm: '25px' } }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
        This is my student project. You can use it to store your contacts of
        your friends and colleagues!
      </Typography>
    </HomeContainer>
  );
};

export default HomePage;
