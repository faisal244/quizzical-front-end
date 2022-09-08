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
  mutation createQuiz($createQuizInput: createQuizInput) {
    type
    difficulty
    category
    questions {
      question
      incorrectAnswers
      correctAnswer
    }
  }
`;
