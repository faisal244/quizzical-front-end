import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Mutation($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      success
    }
  }
`;

export const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      success
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const CREATEQUIZ = gql`
  mutation Mutation($createQuizInput: CreateQuizInput!) {
    createQuiz(createQuizInput: $createQuizInput) {
      id
      questions {
        question
        incorrectAnswers
        correctAnswer
      }
      category
      difficulty
      type
    }
  }
`;

export const DELETEQUIZ = gql`
  mutation Mutation($deleteQuizId: ID!) {
    deleteQuiz(id: $deleteQuizId) {
      id
      category
      difficulty
      type
    }
  }
`;
