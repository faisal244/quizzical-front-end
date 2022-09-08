import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useMutation } from "@apollo/client";
import { useState } from "react";

import { CREATEQUIZ } from "../graphql/mutations";

export const CreateQuizPage = () => {
  const [createQuiz] = useMutation(CREATEQUIZ);
  // state for all inputs
  const [categoryName, setCategoryName] = useState("");
  const [questionType, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState("");

  const handleChange = (event) => {
    setCategoryName(event.target.value);
    console.log("clicked on input");
  };
  return (
    <div>
      <FormControl
        fullWidth
        onClick={handleChange}
        sx={{ p: 2, mt: 2, textAlign: "center" }}
      >
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select A Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryName}
          label="Category"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth onClick={handleChange} sx={{ p: 2, mt: 2 }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select A Question Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={questionType}
          label="Category"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth onClick={handleChange} sx={{ p: 2, mt: 2 }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select A Difficulty Level
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={difficulty}
          label="Category"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth onClick={handleChange} sx={{ p: 2, mt: 2 }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select The Number Of Questions
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={questions}
          label="Questions"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
