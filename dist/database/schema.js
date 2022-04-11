"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("@graphql-tools/schema");
const Schema = (0, apollo_server_express_1.gql) `
  type User {
    name: String
    email: String
  }
`;
exports.default = (0, schema_1.makeExecutableSchema)({
    typeDefs: [Schema]
});
//# sourceMappingURL=schema.js.map