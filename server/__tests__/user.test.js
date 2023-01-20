const User = require('../models/User');

test('Create new user', async () => {
    const newUser = {
        username: 'wizzle',
        firstname: 'chris',
        lastname:'burton',
        email: 'wizzle13@gmail.com',
        password:'123456'
    };

    const user = await User.create(newUser);

    expect(user).toMatchObject(newUser);
    
});