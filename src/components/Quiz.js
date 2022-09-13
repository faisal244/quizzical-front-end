import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import { ListOfQuestions } from "./ListOfQuestions";
import basicImage from "../images/scores.jpg";
import { useState } from "react";

export const Quiz = ({ quizData, title }) => {
  const [questionsList, setQuestionsList] = useState(false);
  const [hideQuestionsList, setHideQuestionsList] = useState(true);
  console.log(quizData);

  const hideQuestions = () => {
    console.log("hide questions");
    setHideQuestionsList(false);
  };

  const renderQuestions = () => {
    console.log("list");

    setQuestionsList(true);
  };

  return (
    <div className="create-quiz-cards">
      {quizData.slice(0, 1).map((each) => {
        console.log(each.category);
        console.log(each.type);
        console.log(each.difficulty);
        return (
          <Card style={{ width: "18rem" }} className="card-styles">
            <h1 className="quiz-title">{title}</h1>
            <Card.Img
              variant="top"
              src={basicImage}
              style={{ width: "18rem", height: "10rem" }}
            />
            <Card.Body>
              <Card.Title>Category:{each.category}</Card.Title>
              <Card.Title>Type:{each.type}</Card.Title>
              <Card.Title>Difficulty:{each.difficulty}</Card.Title>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ p: 1, mt: 2 }}
                onClick={renderQuestions}
              >
                View Your Questions
              </Button>

              {hideQuestionsList && (
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ p: 1, mt: 2 }}
                  onClick={hideQuestions}
                >
                  Close Your Questions
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      })}
      {questionsList ? <ListOfQuestions quizData={quizData} /> : ""}
    </div>
  );
};
