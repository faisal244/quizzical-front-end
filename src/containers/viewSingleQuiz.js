import TableOfQuestions from "components/TableOfQuestions";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GETSINGLEQUIZ } from "graphql/queries";
import { DELETEQUIZ } from "../graphql/mutations";

export const ViewSingleQuizPage = () => {
  const [
    deleteQuiz,
    { data: deletedData, loading: deletedLoading, error: deletedError },
  ] = useMutation(DELETEQUIZ);

  const { id } = useParams();

  const handleDeleteQuiz = async (event) => {
    event.preventDefault();
    const deletedQuiz = await deleteQuiz({ variables: { deleteQuizId: id } });
  };

  const { data, loading, error } = useQuery(GETSINGLEQUIZ, {
    variables: { getQuizId: id },
  });

  // call the query, pass in the id

  console.log(data);

  // return <TableOfQuestions />;
  return (
    data && (
      <div>
        {<TableOfQuestions quizData={data.getQuiz.questions} />}
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="error"
            sx={{ justifyContent: "center" }}
            onClick={handleDeleteQuiz}
          >
            Delete Quiz
          </Button>
        </Box>
      </div>
    )
  );
};

export default ViewSingleQuizPage;
