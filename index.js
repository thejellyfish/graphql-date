const { GraphQLScalarType, Kind } = require('graphql');

module.exports = new GraphQLScalarType({
  name: 'Date',
  serialize(value) {
    return value.getTime();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    // eslint-disable-next-line react/destructuring-assignment
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }

    // Invalid hard-coded value (not an integer)
    return null;
  },
});
