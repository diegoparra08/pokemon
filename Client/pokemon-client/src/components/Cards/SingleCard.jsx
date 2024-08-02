import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import pikachu from '../../images/pikachu.jpg'

export const SingleCard = ({ pokemon }) => {

    return (
        <Card sx={{ width: '360px', height: '220px', boxShadow: 8 }} >
            <CardMedia component='img' image={pokemon.image} sx={{
                height: '140px',
                width: 'auto',
                objectFit: 'cover',
                justifyContent: 'center',
                mx: 'auto',
            }} />
            <CardContent sx={{ bgcolor: 'primary.main', display: "flex", gap: 2, p: 1 }}>
                <Box sx={{ flexGrow: 1, }}>
                    <Typography variant="h6" sx={{fontWeight: 'bold' }}>{pokemon.name}</Typography>
                    <Box sx={{display: 'flex', gap: 2}}>
                        <Typography variant='body1' sx={{ fontWeight: 'semi-bold' }}>Height: {pokemon.height}</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'semi-bold' }}>Weight: {pokemon.weight}</Typography>
                    </Box>
                </Box>
                <CardActions>
                    <Button sx={{ color: 'black', bgcolor: 'secondary.main', fontSize: '0.75rem' }}>View details</Button>
                </CardActions>
            </CardContent>



        </Card>
    );
};