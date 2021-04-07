import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID
    username: String
    token: String
  }
  extend type Query {
    login(username: String!, password: String!): User
  }
`;
