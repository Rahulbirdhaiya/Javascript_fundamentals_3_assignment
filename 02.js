const student = {
    name: "John",
    age: 18,
    grade: "A",
};
  
function upgradeGrade(newGrade) {
    student.grade = newGrade;
}

upgradeGrade("B");
console.log(student);

upgradeGrade("A+");
console.log(student);