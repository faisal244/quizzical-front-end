import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Quiz = ({ quizData }) => {
  console.log(quizData);

  return (
    <div>
      {quizData.map((each) => {
        console.log(each.category);
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{each.category}</Card.Title>
              <Card.Text>{each.question}</Card.Text>
              <Card.Text>{each.correct_answer}</Card.Text>
              <Card.Text>{each.incorrect_answers}</Card.Text>
              <Card.Text>{each.difficulty}</Card.Text>
              <Card.Text>{each.type}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
      ;
    </div>
  );
};
