import Stack from "@mui/material/Stack";
import { TableOfQuestions } from "../components/createQuizPage/TableOfQuestions";
import Button from "@mui/material/Button";
import { useQuery, useMutation } from "@apollo/client";
import { GETMYQUIZES } from "../graphql/queries";
import { DELETEQUIZ } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const DashboardPage = () => {
  const [viewAllQuizzesBtn, setAllQuizzesButton] = useState(false);
  const [hideWelcomeMessage, setHideWelcomeMessage] = useState(false);
  const [quizView, setQuizView] = useState(false);

  const [
    deleteQuiz,
    { data: deletedData, loading: deletedLoading, error: deletedError },
  ] = useMutation(DELETEQUIZ);

  const { data, loading, error } = useQuery(GETMYQUIZES);

  const navigate = useNavigate();

  const createQuizPage = () => {
    navigate("/create-quiz");
  };

  const handleviewQuestionsAndAnswer = () => {
    console.log();
  };

  const viewQuizes = () => {
    setAllQuizzesButton(true);
    setHideWelcomeMessage(true);
    setQuizView(true);
  };

  const handleDeleteQuiz = (id) => {
    console.log(id);
    const deletedQuiz = deleteQuiz({
      variables: { deleteQuizId: id },
    });
  };
  return (
    <div id="bannerimage">
      <div className="jumbotron">
        {!hideWelcomeMessage && (
          <div>
            <h1 className="display-4">
              Hello <span class="wave">👋🏾</span> QuizMaster Welcome To Your
              Ultimate Quiz!
            </h1>
            <span className="click-display">
              Click any cards below to get started
            </span>
            <p className="lead"></p>
          </div>
        )}
      </div>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        marginTop="1.5rem"
        paddingTop="2.5rem"
      >
        {!hideWelcomeMessage && (
          <Button
            variant="text"
            className="create-quiz"
            onClick={createQuizPage}
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              borderRadius: "2",
            }}
          >
            Create A New Quiz
          </Button>
        )}
        {!hideWelcomeMessage && (
          <Button
            variant="text"
            className="create-quiz"
            onClick={viewQuizes}
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              borderRadius: "2",
            }}
          >
            View All Quizes
          </Button>
        )}
        {viewAllQuizzesBtn && <TableOfQuestions />}
      </Stack>
    </div>
  );
};
