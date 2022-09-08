import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";

import { CREATEQUIZ } from "../graphql/mutations";

const allDifficulties = [
  {
    name: "easy",
    value: "easy",
  },
  {
    name: "medium",
    value: "medium",
  },
  {
    name: "hard",
    value: "hard",
  },
];

export const CreateQuizPage = () => {
  // state for all inputs
  const [categoryName, setCategoryName] = useState("");
  const [questionType, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState("");

  const [
    createQuiz,
    { data: quizData, loading: quizLoading, error: quizError },
  ] = useMutation(CREATEQUIZ);

  const URL = "https://opentdb.com/api_category.php";

  useEffect(() => {
    console.log("createQuiz");
    // call a function that makes azios request and sets all the states
    getResults();
  }, [URL]);

  const getResults = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        console.log(JSON.stringify(response));
        // once we get the results we set them to state variables
      })
      .catch((error) => console.error(`ERROR: ${error}`));
  };

  const handleCreateQuiz = () => {
    console.log(categoryName);
  };

  const generateQuiz = () => {
    const quizInput = {
      type: quizData.type,
      difficulty: quizData.difficulty,
      category: quizData.category,
      questions: quizData.question,
    };

    // quiz({
    //   variables: {
    //     quizInput,
    //   },
    // });
  };

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
    console.log(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    console.log(e.target.value);
  };
  const handleQuestionTypeChange = (e) => {
    setType(e.target.value);
    console.log("clicked on handleQuestionTypeChange");
  };
  const handleQuestionChange = (e) => {
    setQuestions(e.target.value);
    console.log("clicked on handleQuestionChange");
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        sx={{ p: 1, mt: 3, textAlign: "center" }}
      />

      <FormControl fullWidth sx={{ p: 1, mt: 3, textAlign: "center" }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select A Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryName}
          label="Category"
          onChange={handleCategoryChange}
        >
          {allDifficulties.map((difficulty) => (
            <MenuItem value={difficulty.value}>{difficulty.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select A Question Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={questionType}
          label="Question"
          onChange={handleQuestionTypeChange}
        >
          <MenuItem value={40}>Fourty</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
          <MenuItem value={60}>Sixty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select A Difficulty Level
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={difficulty}
          label="Difficulty"
          onChange={handleDifficultyChange}
        >
          <MenuItem value={70}>Seventy</MenuItem>
          <MenuItem value={80}>Eighty</MenuItem>
          <MenuItem value={90}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select The Number Of Questions
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={questions}
          label="Questions"
          onChange={handleQuestionChange}
        >
          <MenuItem value={100}>OneTen</MenuItem>
          <MenuItem value={120}>OneTwenty</MenuItem>
          <MenuItem value={130}>OneThirty</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="success"
          sx={{ p: 1, mt: 2 }}
          onClick={handleCreateQuiz}
        >
          Create A Quiz
        </Button>
      </FormControl>
    </div>
  );
};
