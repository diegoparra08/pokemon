import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/actions";
import { Box, Grid, Typography } from "@mui/material";
import SingleCard from "./SingleCard";
import Pagination from "../Pagination/Pagination";

export const Cards = () => {
    const dispatch = useDispatch();
    const { allPokemons, loading, error } = useSelector(state => ({
        allPokemons: state.allPokemons,
        loading: state.loading,
        error: state.error,
    }));

    const [page, setPage] = useState(1);
    const pokemonsPerPage = 12;

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    const indexOfLastPokemon = page * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : error ? (
                <Typography>Error: {error}</Typography>
            ) : allPokemons.length > 0 ? (
                <>
                    <Pagination page={page} setPage={setPage} totalPokemons={allPokemons.length} />
                    <Grid container spacing={2}>
                        {currentPokemons.map(pokemon => (
                            <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
                                <SingleCard pokemon={pokemon} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            ) : (
                <Typography>No results! Try reloading the page</Typography>
            )}
        </Box>
    );
};
