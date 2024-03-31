const userMap = new Map();

function addUser(name, age, email) {
    const userDetails = {age, email}
    userMap.set(name, userDetails)
}

function updateUser(name, age, email) {
    if (userMap.has(name)) {
        const user = userMap.get(name)
        user.age = age;
        user.email = email;
    }
}

function deleteUser(name) {
    userMap.delete(name)
}

addUser('John', 25, "john@example.com");
addUser('peter', 30, 'peter@example.com');
console.log(userMap);

updateUser('peter', 32, 'newpeter@example.com');
console.log(userMap);

deleteUser('peter');
console.log(userMap);
// similarly we can add/remove any entries using the .set(), .delete().