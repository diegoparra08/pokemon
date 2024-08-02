import { NavBar } from "../components/NavBar/NavBar";
import { Link } from "react-router-dom"

import { Button, Box, Container, Typography } from '@mui/material';

import pokebola from '../images/pokebola.png';
import logo from '../images/logo.png'


export const Home = () => {

  return (
   
    <Container>
      <Box
      sx={{
        position: 'relative',
        width: 500,
        height: 500,
        borderRadius: '50%',
        bgcolor: 'background.default',
        backgroundImage: `url(${pokebola})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 6
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '125%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: '10%', 
            width: 290,
            height: 40,
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'lightgrey', 
            },
          }}
        >
          Button 1
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '125%',
          transform: 'translate(-50%, 50%)',
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: '10%',
            width: 290,
            height: 40,
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'lightgrey',
            },
          }}
        >
          Button 2
        </Button>
      </Box>
      <Box
        sx={{
          color: 'primary.main',
          position: 'absolute',
          top: '50%',
          left: '140%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          component={Link} to="/all"
          sx={{
            
            borderRadius: '10%',
            width: 330,
            height: 40,
            backgrondColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'lightgrey',
            },
          }}
        >
          View all Pokemon cards
        </Button>
      </Box>
      
    </Box>
    <Box
        sx={{
          position: 'absolute',
          bottom: 5,
          right: 100,
          width: 300,
          height: 150,
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: 2,
        }}
      >
        <img
          src={logo}
          alt="Fourth"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', 
          }}
        />
      </Box>

</Container>
  );
}