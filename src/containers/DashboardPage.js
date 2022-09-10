import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Quiz } from "../components/Quiz";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();

  const createQuizPage = () => {
    navigate("/create-quiz");
  };

  const viewQuizPage = () => {
    console.log("viewquizclicked");
    //  in here i want to render the saved quizes from the DB in the card format
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <div id="bannerimage">
          <h1 className="display-4">Hello Welcome To Your Ultimate Quiz!</h1>
          <p className="lead">
            Please Choose If You Would Like To Keep The Quizes Below
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
              Create A New Quiz
            </Button>
            <Button
              variant="text"
              className="create-quiz"
              onClick={viewQuizPage}
              sx={{
                backgroundColor: "secondary.main",
                color: "white",
                borderRadius: "2",
              }}
            >
              View Yor Quizes
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};
