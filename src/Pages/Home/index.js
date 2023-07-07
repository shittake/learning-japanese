import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                marginTop: 200
            }}
        >
            <Button variant="contained" component={Link} to="/hiragana">
                Learn and test your hiragana!
            </Button>
            <Button variant="contained" component={Link} to="/katakana">
                Learn and test your katakana!
            </Button>
        </div>
    )
}