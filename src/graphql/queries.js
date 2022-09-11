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


export const GETSINGLEQUIZ = gql`
  query GetQuiz($getQuizId: ID!) {
    getQuiz(id: $getQuizId) {
      id
      questions {
        correctAnswer
        incorrectAnswers
        question
      }
      category
      difficulty
      type
    }
  }
`;

