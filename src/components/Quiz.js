import Card from "react-bootstrap/Card";
import basicImage from "../images/scores.jpg";

export const Quiz = ({ quizData, title }) => {
  return (
    <div className="create-quiz-cards">
      {quizData.map((each) => {
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
              <Card.Text>Question :{each.question}</Card.Text>
              <Card.Text>Correct Answer: {each.correct_answer}</Card.Text>
              <Card.Text>Incorrect Answer :{each.incorrect_answers}</Card.Text>
              <Card.Text>Difficulty Level :{each.difficulty}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
