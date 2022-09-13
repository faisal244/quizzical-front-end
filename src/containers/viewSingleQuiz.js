import TableOfQuestions from "components/TableOfQuestions";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GETSINGLEQUIZ } from "graphql/queries";

export const ViewSingleQuizPage = () => {
	const { id } = useParams();

	const { data, loading, error } = useQuery(GETSINGLEQUIZ, {
		variables: { getQuizId: id },
	});

	// call the query, pass in the id

	console.log(data);

	// return <TableOfQuestions />;
	return (
		data && <div>{<TableOfQuestions quizData={data.getQuiz.questions} />}</div>
	);
};

export default ViewSingleQuizPage;
