import React from "react";
import { theme } from "../../constants";
import { ThemeProvider, Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { hiraganaMapping } from "../../constants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const Hiragana = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hiragana-test");
  };
  const rows = [];
  let currentRow = [];
  const keys = Object.keys(hiraganaMapping);

  for (let i = 0; i < keys.length; i++) {
    const item = keys[i];
    currentRow.push(
      <Card key={i}>
        <CardContent>
          <Typography variant="h3" component="div">
            {item}
          </Typography>
          <Typography variant="h5" style={{textAlign: "center"}}>
            {hiraganaMapping[item]}
          </Typography>
        </CardContent>
      </Card>
    );

    if ((i + 1) % 5 === 0 || i === keys.length - 1) {
      rows.push(
        <div key={i} style={{ display: "flex", flexWrap: "wrap" }}>
          {currentRow}
        </div>
      );
      currentRow = [];
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">Hiragana Page</Typography>
        {rows.map((row, rowIndex) => (
          <Typography variant="h3" key={rowIndex}>
            {row}
          </Typography>
        ))}
      </ThemeProvider>

      <Button variant="contained" color="success" onClick={handleClick} style={{ marginTop: '60px', marginBottom: "60px" }}>
        Click here to start the test!
      </Button>
    </div>
  );
};
