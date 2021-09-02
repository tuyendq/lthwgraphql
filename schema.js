import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String,
    friend: Friend
  },
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
  }
`);

export default schema;