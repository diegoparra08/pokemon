import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemonById } from "../../redux/actions/actions";
import { Card, CardContent, CardMedia, Typography, CardHeader, Box } from "@mui/material";
import { useEffect } from "react";

import logo from '../../images/logo.png'

export const DetailCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { name, height, weight, abilities, image } = useSelector((state) => state.pokemonDetail);

    useEffect(() => {
        dispatch(getPokemonById(id));

        return () => {
            dispatch(clearDetail());
        };
    }, [id, dispatch]);

    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ width: '50%', height: 'auto', boxShadow: 8, my: 2, mx: 2}}>
            <CardHeader
                title={name}
                subheader={`Id: ${id}`}
                sx={{ backgroundColor: 'primary.main', color: 'common.white' }}
            />
            <Box sx={{display: 'flex'}}>
            <CardMedia
                component='img'
                image={image}
                sx={{ height: '100px', width:'auto', objectFit: 'cover' }}
            />
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography>Height: {height}</Typography>
                <Typography>Weight: {weight}</Typography>

                {abilities && abilities.length > 0 && (
                    <>
                        <Typography variant="h6">Abilities:</Typography>
                        {abilities.map((ability, index) => (
                            <Typography key={index}>- {ability.abilityName}</Typography>
                        ))}
                    </>
                )}
            </CardContent>
            </Box>
        </Card>

        <Box
                component="img"
                src={logo}
                sx={{ width: '30%', height: '20%', objectFit: 'cover' }}
            />
                
        </Box>
        
    );
};
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { clearDetail, getPokemonById } from "../../redux/actions/actions";
// import { Card, CardContent, CardMedia, Typography, CardHeader, Box } from "@mui/material";
// import { useEffect } from "react";
// import logo from '../../images/logo.png';

// export const DetailCard = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { name, height, weight, abilities, image } = useSelector((state) => state.pokemonDetail);

//     useEffect(() => {
//         dispatch(getPokemonById(id));

//         return () => {
//             dispatch(clearDetail());
//         };
//     }, [id, dispatch]);

//     return (
//         <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
//             {/* Tarjeta con contenido a la derecha */}
//             <Card sx={{ width: '50%', height: 'auto', boxShadow: 8, display: 'flex', flexDirection: 'column' }}>
//                 <CardHeader
//                     title={name}
//                     subheader={`Id: ${id}`}
//                     sx={{ backgroundColor: 'primary.main', color: 'common.white' }}
//                 />
//                 <CardMedia
//                     component='img'
//                     image={image}
//                     sx={{ height: '200px', width: '100%', objectFit: 'cover' }}
//                 />
//                 <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <Typography>Height: {height}</Typography>
//                     <Typography>Weight: {weight}</Typography>
//                     {abilities && abilities.length > 0 && (
//                         <>
//                             <Typography variant="h6">Abilities:</Typography>
//                             {abilities.map((ability, index) => (
//                                 <Typography key={index}>- {ability.abilityName}</Typography>
//                             ))}
//                         </>
//                     )}
//                 </CardContent>
//             </Card>

//             {/* Imagen grande a la izquierda */}
//             <Box
//                 component="img"
//                 src={logo}
//                 sx={{ width: '50%', height: '100%', objectFit: 'cover' }}
//             />
//         </Box>
//     );
// };
