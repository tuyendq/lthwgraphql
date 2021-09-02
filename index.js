import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql'

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is an amazint Query Language.')
});

const root = { hello: () => "Hi Money"};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8000, () => console.log('Running on server port localhost:8000/graphql'));