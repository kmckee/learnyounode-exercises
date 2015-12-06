function createUserValidator(validUsers) {
    return function(usersToValidate) {
        return usersToValidate.every(function(userToValidate) {
            return validUsers.some(function(goodUser) {
                return goodUser.id === userToValidate.id;
            });
        });
    };
}

module.exports = createUserValidator;
