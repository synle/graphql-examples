// http://graphql.org/graphql-js/
// http://graphql.org/graphql-js/running-an-express-graphql-server/
// http://graphql.org/graphql-js/graphql-clients/
var express = require('express')
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql').graphql;
var buildSchema = require('graphql').buildSchema;

// Construct a schema, using GraphQL schema language
var schema = buildSchema([
    'type Query {',
        'hello: String',
    '}',
].join('\n'));


// The root provides a resolver function for each API endpoint
var root = {
  hello: function() {
    return 'Hello world!';
  },
};


// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then( function (response) {
  console.log(response);
});


// passing props
// var query = `query RollDice($dice: Int!, $sides: Int) {
//   rollDice(numDice: $dice, numSides: $sides)
// }`;
// xhr.send(JSON.stringify({
//   query: query,
//   variables: { dice: dice, sides: sides },
// }));
