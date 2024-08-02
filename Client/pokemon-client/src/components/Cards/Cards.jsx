import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions/actions";

import { Box, Grid, Typography } from "@mui/material";
import { SingleCard } from "./SingleCard";



export const Cards = () => {

    const dispatch = useDispatch();

    const { allPokemons, loading, error } = useSelector(state => ({
        allPokemons: state.allPokemons,
        loading: state.loading,
        error: state.error,
    }));

    useEffect(() => {
        dispatch(getPokemons(1));
    }, [dispatch]);

    console.log(allPokemons);


    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : error ? (
                <Typography>Error: {error}</Typography>
            ) : allPokemons.length > 0 ? (
                <Grid container spacing={2}>
                    {allPokemons.map(pokemon => (
                        <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
                            <SingleCard pokemon={pokemon} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography>No results! Try reloading the page</Typography>
            )}
        </Box>
    );
}; 