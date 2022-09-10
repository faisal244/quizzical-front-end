import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import basicImage from "../images/scores.jpg";

export const Quiz = ({ quizData }) => {
  console.log(quizData);

  return (
    <div className="create-quiz-cards">
      {quizData.map((each) => {
        console.log(each.category);
        return (
          <Card style={{ width: "18rem" }} className="card-styles">
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
              <Card.Text>Type :{each.type}</Card.Text>
              <Button variant="primary">Save Quiz Into Dashboard</Button>
            </Card.Body>
          </Card>
        );
      })}
      ;
    </div>
  );
};
