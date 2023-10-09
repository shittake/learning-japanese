import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { hiraganaMapping, katakanaMapping } from "../../constants";

export const Test = ({isHiragana = true}) => {
  const mapping = (isHiragana) ? hiraganaMapping : katakanaMapping;
  const [textInput, setTextInput] = useState("");
  const [question, setQuestion] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [date, setDate] = useState(null);
  const [isTestStart, setIsTestStart] = useState(true);
  const [timeTaken, setTimeTaken] = useState(0);
  const lastQuestion = 10;
  const [error, setError] = useState(false);

  useEffect(() => {
    generateRandom();
    setDate(new Date());
  }, []);

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const onClick = () => {
    if (textInput === mapping[question]) {
      generateRandom();
      setTextInput("");
      setError(false);
      if (questionNumber === lastQuestion) {
        const timeTaken = new Date().getTime() - date.getTime();
        setIsTestStart(false);
        setTimeTaken(timeTaken);
      } else {
        setQuestionNumber(questionNumber + 1);
      }
    } else {
      setTextInput("");
      setError(true);
    }
  };

  const generateRandom = () => {
    const keys = Object.keys(mapping);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    setQuestion(randomKey);
  };

  return (
    <>
      {isTestStart ? (
        <>
          <Typography
            variant="h1"
            className="question-number"
          >{`${questionNumber}.`}</Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1">{question}</Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                id="outlined-basic"
                label="Answer"
                variant="outlined"
                onChange={handleTextInputChange}
                value={textInput}
                style={{ marginRight: "16px" }}
                error={error}
                helperText={error && "Wrong answer!"}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onClick();
                  }
                }}
              />
              <Button variant="contained" color="success" onClick={onClick}>
                Submit!
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3">{`Your total time taken is ${
            timeTaken / 1000
          } seconds!`}</Typography>
        </div>
      )}
    </>
  );
};
