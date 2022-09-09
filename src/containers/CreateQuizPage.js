import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useMutation } from "@apollo/client";
import { CREATEQUIZ } from "../graphql/mutations";

const difficulties = [
  {
    name: "Easy",
    value: "easy",
  },
  {
    name: "Medium",
    value: "medium",
  },
  {
    name: "Hard",
    value: "hard",
  },
];

const types = [
  {
    value: "boolean",
    name: "True/False",
  },
  {
    value: "multiple",
    name: "Multiple Choice",
  },
];

const categories = [
  {
    value: "9",
    name: "General Knowledge",
  },
  {
    value: "10",
    name: "Entertainment: Books",
  },
  {
    value: "11",
    name: "Entertainment: Film",
  },
  {
    value: "12",
    name: "Entertainment: Music",
  },
  {
    value: "13",
    name: "Entertainment: Musicals & Theatres",
  },
  {
    value: "14",
    name: "Entertainment: Television",
  },
  {
    value: "15",
    name: "Entertainment: Video Games",
  },
  {
    value: "16",
    name: "Entertainment: Board Games",
  },
  {
    value: "17",
    name: "Science & Nature",
  },
  {
    value: "18",
    name: "Science: Computers",
  },
  {
    value: "19",
    name: "Science: Mathematics",
  },
  {
    value: "20",
    name: "Mythology",
  },
  {
    value: "21",
    name: "Sports",
  },
  {
    value: "22",
    name: "Geography",
  },
  {
    value: "23",
    name: "History",
  },
  {
    value: "24",
    name: "Politics",
  },
  {
    value: "25",
    name: "Art",
  },
  {
    value: "26",
    name: "Celebrities",
  },
  {
    value: "27",
    name: "Animals",
  },
  {
    value: "28",
    name: "Vehicles",
  },
  {
    value: "29",
    name: "Entertainment: Comics",
  },
  {
    value: "30",
    name: "Science: Gadgets",
  },
  {
    value: "31",
    name: "Entertainment: Japanese Anime & Manga",
  },
  {
    value: "32",
    name: "Entertainment: Cartoon & Animations",
  },
];

export const CreateQuizPage = () => {
  const [createQuiz, { data, loading, error }] = useMutation(CREATEQUIZ);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState("10");
  const [quizData, setQuizData] = useState();

  const getQuizData = async () => {
    const url = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=${type}`;

    const response = await fetch(url);

    const data = await response.json();

    setQuizData(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await getQuizData();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleQuestionTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestions(e.target.value);
  };

  const handleCreateQuiz = () => {
    const quizQuestions = quizData.results.map(
      ({ question, incorrect_answers, correct_answer }) => {
        return {
          question,
          incorrectAnswers: incorrect_answers,
          correctAnswer: correct_answer,
        };
      }
    );

    const { name: categoryName } = categories.find(
      (each) => each.value === category
    );

    const { name: difficultyName } = difficulties.find(
      (each) => each.value === difficulty
    );

    const { name: typeName } = types.find((each) => each.value === type);

    const createQuizInput = {
      title,
      category: categoryName,
      difficulty: difficultyName,
      type: typeName,
      questions: quizQuestions,
    };

    createQuiz({
      variables: { createQuizInput },
    });
  };

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ mx: 2 }}>
          <FormControl fullWidth sx={{ p: 1, mt: 3, textAlign: "center" }}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={handleTitleChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ p: 1, mt: 3, textAlign: "center" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ textAlign: "center" }}
            >
              Please Select A Category
            </InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <MenuItem
                  key={`category-${category.value}`}
                  value={category.value}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ textAlign: "center" }}
            >
              Please Select A Question Type
            </InputLabel>
            <Select
              value={type}
              label="Question"
              onChange={handleQuestionTypeChange}
            >
              {types.map((type) => (
                <MenuItem key={`type-${type.value}`} value={type.value}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ textAlign: "center" }}
            >
              Please Select A Difficulty Level
            </InputLabel>
            <Select
              value={difficulty}
              label="Difficulty"
              onChange={handleDifficultyChange}
            >
              {difficulties.map((difficulty) => (
                <MenuItem
                  key={`difficulty-${difficulty.value}`}
                  value={difficulty.value}
                >
                  {difficulty.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ textAlign: "center" }}
            >
              Please Select The Number Of Questions
            </InputLabel>
            <Select
              value={questions}
              label="Number of questions"
              onChange={handleQuestionChange}
            >
              {["10", "15", "20"].map((each) => (
                <MenuItem key={`questions-${each}`} value={each}>
                  {each}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ p: 1, mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ p: 1, mt: 2 }}
            >
              Create A Quiz
            </Button>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        {quizData ? <pre>{JSON.stringify(quizData, null, 2)}</pre> : "No Data"}
      </Box>
      {quizData && (
        <Box>
          <Button onClick={() => handleCreateQuiz()}>Create Quiz</Button>
          <Button onClick={() => getQuizData()}>Refetch Quiz</Button>
        </Box>
      )}
    </Container>
  );
};
