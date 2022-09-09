import { FlipCardScore } from "../components/FlipCardScore";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CREATEQUIZ } from "../graphql/mutations";
import axios from "axios";
import { useMutation } from "@apollo/client";

export const ViewQuizPage = () => {
  const location = useLocation();

  const [
    createQuiz,
    { data: quizData, loading: quizLoading, error: quizError },
  ] = useMutation(CREATEQUIZ);

  useEffect(() => {
    const categoryName = location.state.catName;
    const difficulty = location.state.difficulty;
    const questions = location.state.questions;
    const localType = location.state.questionType;
    // CONSTRUCT THE URL

    const URL = `https://opentdb.com/api.php?amount=${questions}&category=${categoryName}&difficulty=${difficulty}&type=${localType}`;

    // MAKE API CALL


    const getResults = () => {
      axios
        .get(`${URL}`)
        .then((response) => {
          console.log(JSON.stringify(response));
          // once we get the results we set them to state variables
        })
        .catch((error) => console.error(`ERROR: ${error}`));
    };
    // ONCE RESPONSE IS RETURNED
    // SEND THE RESPONSE TO BACKEND
// const responseData={
//   type:
//   difficulty:
//   category:
//   questions:{}
// }
    // call a function that makes azios request and sets all the states
    createQuiz({
      // variables: {responseData},
    });
  }, []);

  return (
    <div className="high-scores-card">
      <div className="arrow-img">
        <FlipCardScore />
      </div>
    </div>
  );
};
