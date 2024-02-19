// models/user.js
let users = [];

const addUser = (username, password) => {
    const user = { username, password };
    users.push(user);
    return user;
};

const getUserByUsername = (username) => {
    return users.find((user) => user.username === username);
};

module.exports = {
    addUser,
    getUserByUsername,
};
