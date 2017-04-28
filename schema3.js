// http://graphql.org/graphql-js/passing-arguments/
// {rollDice(numDice: 10, numSides: 6)}
var express = require('express')
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql').graphql;
var buildSchema = require('graphql').buildSchema;

// Construct a schema, using GraphQL schema language
var schema = buildSchema([
    'type Query {',
        'rollDice(numDice: Int!, numSides: Int): [Int]',
    '}',
].join('\n'));


// The root provides a resolver function for each API endpoint
var root = {
  rollDice: function (input) {
    var numDice = input.numDice;
    var numSides = input.numSides;
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
