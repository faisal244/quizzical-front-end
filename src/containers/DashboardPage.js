import Card from "react-bootstrap/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useQuery, useMutation } from "@apollo/client";
import { GETMYQUIZES } from "../graphql/queries";
import { DELETEQUIZ } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const DashboardPage = () => {
  const [viewAllQuizzesBtn, setAllQuizzesButton] = useState(false);
  const [hideWelcomeMessage, setHideWelcomeMessage] = useState(false);

  const [
    deleteQuiz,
    { data: deletedData, loading: deletedLoading, error: deletedError },
  ] = useMutation(DELETEQUIZ);

  const { data, loading, error } = useQuery(GETMYQUIZES);

  const navigate = useNavigate();

  const createQuizPage = () => {
    navigate("/create-quiz");
  };

  const handleViewQuiz = (item) => {
    console.log(item);
    // on click of this function get the questions from this id using the query
  };

  const viewQuizes = () => {
    setAllQuizzesButton(true);
    setHideWelcomeMessage(true);
  };

  const handleDeleteQuiz = (id) => {
    console.log(id);
    const deletedQuiz = deleteQuiz({
      variables: { deleteQuizId: id },
    });
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <div id="bannerimage">
          {!hideWelcomeMessage && (
            <div>
              <h1 className="display-4">
                Hello QuizMaster Welcome To Your Ultimate Quiz!
              </h1>
              <p className="lead">
                Please Choose If You Would Like To Keep The Quizes Below
              </p>

              <p>Click any of the buttons below to get started</p>
              <p className="lead"></p>
            </div>
          )}
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
            {viewAllQuizzesBtn && (
              <div className="bg-light border">
                {data.getMyQuiz.quizzes.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      style={{ width: "18rem", height: "10rem" }}
                    >
                      <Card.Body>
                        <Card.Title className="m-4">
                          Title:{item.tile}
                        </Card.Title>
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
                          onClick={() => handleViewQuiz(item.id)}
                        >
                          ViewQuiz
                        </Button>
                        <Button
                          sx={{
                            maxWidth: 200,
                            backgroundColor: "green",
                            color: "whitesmoke",
                            borderRadius: "2",
                          }}
                          onClick={() => handleDeleteQuiz(item.id)}
                        >
                          Delete Quiz
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            )}
          </Stack>
        </div>
      </div>
    </div>
  );
};
