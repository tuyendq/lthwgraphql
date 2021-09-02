import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is an amazint Query Language.')
});

app.listen(8000, () => console.log('Running on server port localhost:8000/graphql'));