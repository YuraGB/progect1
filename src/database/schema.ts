import {gql} from "apollo-server-express";
import { makeExecutableSchema } from '@graphql-tools/schema';


const Schema = gql`
  type User {
    name: String
    email: String
  }
`;

export default makeExecutableSchema({
    typeDefs: [Schema]
});