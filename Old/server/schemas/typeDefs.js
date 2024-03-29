const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        firstname: String
        lastname: String
        email: String
    }
    
    type Catagory {
      _id: ID
      catagoryName: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
      addCatagory(catagoryName: String!): Catagory
    }

    type Auth {
      token: ID!
      user: User
    }
`;
module.exports = typeDefs;