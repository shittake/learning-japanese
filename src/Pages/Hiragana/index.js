import React from 'react';
import hiraganaTable from '../../Images/Hiragana-Table.jpg';
import theme from '../../Constants';
import { ThemeProvider, Typography } from '@material-ui/core';
import { Button } from '@mui/material';

export const Hiragana = () => {
    return (
        <>
        <ThemeProvider theme = {theme}>
        <Typography variant = 'subtitle1'>Hiragana Page</Typography>
        <center><img src = {hiraganaTable} width = '600' height = '850' /></center>
        </ThemeProvider>

        <Button variant = 'contained' color = 'success'>Click here to start the test!</Button>
        </>

    )
}