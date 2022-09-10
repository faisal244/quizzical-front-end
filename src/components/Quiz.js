import Card from "react-bootstrap/Card";

export const Quiz = ({ quizData }) => {
  console.log(quizData);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          Your Category Is :
          {quizData.slice(0, 1).map((each) => {
            return <Card.Title>{each.category} </Card.Title>;
          })}
          <Card.Text>
            This is a list of your questions
            {quizData.map((each) => {
              return <li>{each.question} </li>;
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
