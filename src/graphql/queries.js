import { gql } from "@apollo/client";

//getMyQuiz: QuizesResponse

export const GETMYQUIZES = gql`
  query GetMyQuiz {
    getMyQuiz {
      success
      quizzes {
        questions {
          question
          incorrectAnswers
          correctAnswer
        }
        id
        category
        difficulty
        type
      }
    }
  }
`;
