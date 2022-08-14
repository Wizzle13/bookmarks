const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        firstname: String
        lastname: String
        email: String
        bookmark: [Bookmark]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        bookmark(username: String): [Bookmark]
        bookmark(_id: ID!): Bookmark
      }
      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
        addbookmark(siteName: String!, website: String!, favicon: String!, target: String!): Bookmark
        addCatagory(caragoryName: String!): Catagory
      }
      type Auth {
        token: ID!
        user: User
      }
`;
module.exports = typeDefs;