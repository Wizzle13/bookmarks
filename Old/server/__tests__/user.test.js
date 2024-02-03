
        
    const { ApolloServer } = require('apollo-server-express');
    const { createTestClient } = require('apollo-server-testing');
    const { gql } = require('apollo-server-express');
    const { typeDefs, resolvers } = require('../schemas');
    const User = require('../models/User');
    
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    const { query, mutate } = createTestClient(server);
    
    describe('Create User Mutation', () => {
        it('creating a new user', async () => {
        const newUser = {
            username: 'wizzle',
            firstname: 'chris',
            lastname:'burton',
            email: 'wizzle13@gmail.com',
            password:'123456'
            
        };
    
        const CREATE_USER = gql`
            mutation createUser($user: CreateUserInput!) {
                createUser(input: $user) {
                    id
                    username
                    firstname
                    lastname
                    email
                }
            }
        `;
    
        const createUserRes = await mutate({
            mutation: CREATE_USER,
            variables: { user: newUser }
        });
    
        const createdUser = createUserRes.data.createUser;
    
        expect(createdUser).toMatchObject({
            id: expect.any(String),
            username: newUser.username,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email
        });
    
        const user = await User.findById(createdUser.id);
        expect(user).toMatchObject({
            id: createdUser.id,
            username: newUser.username,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email
        });
      });
    });