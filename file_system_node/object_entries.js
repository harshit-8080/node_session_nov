const student = { 

    Fname:"harshit",
    Lname:"raj",
    age:25,
    address:"chapra",
    state:"bihar"

}
const employee = { 

    EmpId:"101",
    Name:"Manikesh"
}

const student_keys = Object.keys(student);
console.log(student_keys);

const student_values = Object.values(student);
console.log(student_values);

const arr = Object.entries(student);
console.log(arr);

const MObj = Object.assign({}, student,employee);
console.log(MObj);

