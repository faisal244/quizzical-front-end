import { useQuery } from "@apollo/client";
import { GETSINGLEQUIZ } from "../graphql/queries";

export const SingleQuiz = () => {
  const { data, loading, error } = useQuery(GETSINGLEQUIZ);
  if (loading) return <p> "Loading..."</p>;
  if (error) return <p>`Error! ${error.message}`</p>;
  console.log(data);

  return (
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
            <Card.Link href="#">View Quiz</Card.Link>
            <Card.Link href="#">Delete Quiz</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
