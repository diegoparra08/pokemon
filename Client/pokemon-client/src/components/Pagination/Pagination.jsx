import React from 'react';
import { Button, Box } from '@mui/material';

const Pagination = ({ page, setPage, totalPokemons }) => {
    const pokemonsPerPage = 12; // Debe coincidir con el valor en Cards.jsx
    const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);
    const maxPageButtons = 10; // Número máximo de botones de página visibles

    const getPageNumbers = () => {
        const pageNumbers = [];
        const start = Math.max(1, page - Math.floor(maxPageButtons / 2));
        const end = Math.min(totalPages, start + maxPageButtons - 1);

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2, mb: 2}}>
            <Button onClick={handlePrev} disabled={page === 1}>Prev</Button>
            {pageNumbers.map(pageNumber => (
                <Button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    variant={page === pageNumber ? "contained" : "outlined"}
                    sx={{
                        bgcolor: page === pageNumber ? 'transparent' : 'primary.main',
                        color: page === pageNumber ? 'secondary.main' : 'common.white',
                        '&:hover': {
                            bgcolor: page === pageNumber ? 'primary.dark' : 'transparent',
                            color: page === pageNumber ? 'common.white' : 'secondary.dark',
                        },
                        mx: '1px',
                        borderWidth: 1,
                    }}
                >
                    {pageNumber}
                </Button>
            ))}
            <Button onClick={handleNext} disabled={page === totalPages}>Next</Button>
        </Box>
    );
};

export default Pagination;
