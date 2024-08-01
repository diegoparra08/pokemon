import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import pikachu from '../../images/pikachu.jpg'

export const SingleCard = () => {

    return (
        <Card sx={{ width: '360px', height: '220px', boxShadow: 8 }} >
            <CardMedia component='img' image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' sx={{
                height: '140px',
                width: 'auto',
                objectFit: 'cover',
                justifyContent: 'center',
                mx: 'auto',
            }} />
            <CardContent sx={{ bgcolor: 'primary.main', display: "flex", gap: 2, p:1}}>
                <Box sx={{  flexGrow: 1, }}>
                    <Typography variant="h6">Nombre del Pokemon</Typography>
                    <Typography variant='p'>Genero: Masculino</Typography>
                </Box>
                <CardActions>
                    <Button sx={{ color: 'black', bgcolor: 'secondary.main', fontSize: '0.75rem' }}>View details</Button>
                </CardActions>
            </CardContent>



        </Card>
    );
};