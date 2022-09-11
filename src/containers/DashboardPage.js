import Card from "react-bootstrap/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useQuery } from "@apollo/client";
import { GETMYQUIZES } from "../graphql/queries";
import { useNavigate } from "react-router-dom";
import { flexbox } from "@mui/system";

export const DashboardPage = () => {
  const { data, loading, error } = useQuery(GETMYQUIZES);

  const navigate = useNavigate();

  if (loading) return <p> "Loading..."</p>;
  if (error) return <p>`Error! ${error.message}`</p>;

  const createQuizPage = () => {
    navigate("/create-quiz");
  };

  const viewQuizPage = () => {
    //   console.log("viewquizclicked");
    //   //  in here i want to render the saved quizes from the DB in the card format
    //   console.log(data);
    //   console.log(data.getMyQuiz.quizzes.map((item) => item.category));
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
              View All Quizes
            </Button>
          </Stack>
        </div>
      </div>
      <div className="bg-light border">
        {data.getMyQuiz.quizzes.map((item) => (
          <Card style={{ width: "18rem", height: "10rem" }}>
            <Card.Body>
              <Card.Title className="m-4">Title:{item.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Category:{item.category}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Difficulty:{item.difficulty}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Type:{item.type}
              </Card.Subtitle>
              <Button
                sx={{
                  maxWidth: 200,
                  backgroundColor: "green",
                  color: "whitesmoke",
                  borderRadius: "2",
                }}
                // onClick={() => handleViewQuiz()}
              >
                ViewQuiz
              </Button>
              <Card.Link href="#">Delete Quiz</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
