import { gql } from "@apollo/client";

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
        type
        difficulty
        category
      }
    }
  }
`;

export const GETSINGLEQUIZ = gql`
  query GetQuiz($getQuizId: ID!) {
    getQuiz(id: $getQuizId) {
      id
      title
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

export const GETALLQUIZZES = gql`
  query GetQuizes {
    getQuizes {
      quizzes {
        id
        title
        category
      }
    }
  }
`;
