require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnection } = require('./mongo/connect');
const port = process.env.PORT;
const { graphqlHTTP } = require('express-graphql');
const MovieSchema = require('./schema/schema');
const resolvers = require('./resolver/resolver');

dbConnection();
app.use(cors());
app.use(express.json());


app.use('/graphql', graphqlHTTP({
    schema: MovieSchema,
    graphiql: true,
    rootValue: resolvers
}))


app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(port, () => {
    console.log('Server in port:', port);
});