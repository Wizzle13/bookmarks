const User = require('../models/User');

test('Create new user', () => {
    const newUser = new User('wizzle','chris','burton','wizzle13@gmail.com','123456');
    expect( newUser.username).toEqual(expect.any( String));
    expect( newUser.firstname).toEqual(expect.any( String));
    expect( newUser.lastname).toEqual(expect.any( String));
    expect( newUser.email).toEqual(expect.any( String));
    expect( newUser.password).toEqual(expect.any( String));
});