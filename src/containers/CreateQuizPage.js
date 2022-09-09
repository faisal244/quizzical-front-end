import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

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

const AllQuestionTypes = [
  {
    id: "boolean",
    name: "boolean",
  },
  {
    id: "multiple",
    name: "multiple",
  },
];

const allCategories = [
  {
    id: "9",
    name: "General Knowledge",
  },
  {
    id: "10",
    name: "Entertainment: Books",
  },
  {
    id: "11",
    name: "Entertainment: Film",
  },
  {
    id: "12",
    name: "Entertainment: Music",
  },
  {
    id: "13",
    name: "Entertainment: Musicals & Theatres",
  },
  {
    id: "14",
    name: "Entertainment: Television",
  },
  {
    id: "15",
    name: "Entertainment: Video Games",
  },
  {
    id: "16",
    name: "Entertainment: Board Games",
  },
  {
    id: "17",
    name: "Science & Nature",
  },
  {
    id: "18",
    name: "Science: Computers",
  },

  {
    id: "19",
    name: "Science: Mathematics",
  },
  {
    id: "20",
    name: "Mythology",
  },
  {
    id: "21",
    name: "Sports",
  },
  {
    id: "22",
    name: "Geography",
  },
  {
    id: "23",
    name: "History",
  },
  {
    id: "24",
    name: "Politics",
  },
  {
    id: "25",
    name: "Art",
  },
  {
    id: "26",
    name: "Celebrities",
  },
  {
    id: "27",
    name: "Animals",
  },
  {
    id: "28",
    name: "Vehicles",
  },
  {
    id: "29",
    name: "Entertainment: Comics",
  },
  {
    id: "30",
    name: "Science: Gadgets",
  },
  {
    id: "31",
    name: "Entertainment: Japanese Anime & Manga",
  },
  {
    id: "32",
    name: "Entertainment: Cartoon & Animations",
  },
];

export const CreateQuizPage = () => {
  const navigate = useNavigate();
  // state for all inputs
  const [categoryName, setCategoryName] = useState("");
  const [questionType, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const handleCreateQuiz = () => {
    console.log(categoryName);
    // on click button we  navigate view quiz page
    let urlValues = {
      catName: categoryName,
      questionType: questionType,
      difficulty: difficulty,
      questions: questions,
    };
    navigate("/viewquizpage", { state: urlValues });
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

    const regex = "^[1-9][0-9]?$|^50$";

    if (e.target.value.match(regex)) {
      setEmailMessage("matches regex");
    } else {
      setEmailMessage("regex does not match");
    }

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
          {allCategories.map((category) => (
            <MenuItem value={category.id}>{category.name}</MenuItem>
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
          {AllQuestionTypes.map((question) => (
            <MenuItem value={question.id}>{question.name}</MenuItem>
          ))}
          {/* <MenuItem value={40}>Fourty</MenuItem>
					<MenuItem value={50}>Fifty</MenuItem>
					<MenuItem value={60}>Sixty</MenuItem> */}
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
          {allDifficulties.map((difficulty) => (
            <MenuItem value={difficulty.value}>{difficulty.name}</MenuItem>
          ))}
          {/* <MenuItem value={70}>Seventy</MenuItem>
					<MenuItem value={80}>Eighty</MenuItem>
					<MenuItem value={90}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
        <InputLabel id="demo-simple-select-label" sx={{ textAlign: "center" }}>
          Please Select The Number Of Questions
        </InputLabel>
        <TextField
          id="outlined-basic"
          label="Number of questions"
          variant="outlined"
          sx={{ p: 1, mt: 3, textAlign: "center" }}
          onChange={handleQuestionChange}
        />
        <div>{emailMessage}</div>
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
