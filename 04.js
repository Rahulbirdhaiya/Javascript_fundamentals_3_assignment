function checkProperties(obj, propName) {
    if (obj.hasOwnProperty(propName)) {
        console.log(`The object has the '${propName}'`);
    } else {
        console.log(`The object doesn't have the '${propName}'`);
    }
}

const Student = {
    name: 'Rahul',
    age: 27,
    grade: 'A'
}

checkProperties(Student, 'name')
checkProperties(Student, 'gender')