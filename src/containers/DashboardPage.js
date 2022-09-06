import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();

  const createQuizPage = () => {
    console.log("clicked create quiz");
  };

  const viewHighScores = () => {
    console.log("high-score");
    navigate("/highscores");
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <div id="bannerimage">
          <h1 className="display-4">Hello Welcome To Your Ultimate Quiz!</h1>
          <p className="lead">
            This is an app used to help you test your knowledge and have fun
            whilst learning
          </p>

          <p>Click any of the buttons below to get started</p>
          <p className="lead"></p>

          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            marginTop="1.5rem"
            paddingTop="2.5rem"
          >
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
              Create A Quiz
            </Button>
            <Button variant="contained" onClick={viewHighScores}>
              View HighScores
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "success.main",
                color: "white",
                borderRadius: "2",
              }}
            >
              View Saved Quizes
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};
