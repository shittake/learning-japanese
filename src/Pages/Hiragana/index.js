import React from 'react';
import hiraganaTable from '../../Images/Hiragana-Table.jpg';
import theme from '../../Constants';
import { ThemeProvider, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Hiragana = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/hiragana-test");
    }

    return (
        <>
        <ThemeProvider theme = {theme}>
        <Typography variant = 'subtitle1'>Hiragana Page</Typography>
        <center><img src = {hiraganaTable} width = '600' height = '850' /></center>
        </ThemeProvider>

        <Button variant = 'contained' color = 'success' onClick = {handleClick}>Click here to start the test!</Button>
        </>

    )
}