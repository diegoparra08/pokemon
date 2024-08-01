import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import logo from '../../images/logo.png'
import { Button } from "@mui/material";


export const NavBar = () => {

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                top: 0,
                left: 0, 
                bgcolor: 'primary.light',
                
            }}>
                <Button>
                <img
                    src={logo}
                    alt="Fourth"
                    style={{
                        width: '150px',
                        height: '150px',
                    }}
                />
                </Button>
               
            </Box>
        </>
    )

}