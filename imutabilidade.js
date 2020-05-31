const user = {
    name: 'Gustavo',
    lastName: 'Carrareto'
};

function getUserWithFullName(user)
{
    return
    {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

Console.log(userWithFullName);