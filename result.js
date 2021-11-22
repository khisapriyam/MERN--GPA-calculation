// GPA, CGPA, GRADE function for result publishing

let name = prompt("Enter name");
let roll = prompt("Enter roll");

let bn = Number(prompt("Enter Bn Number"));
let eng = Number(prompt("Enter Eng Number"));
let math = Number(prompt("Enter Math Number"));
let ss = Number(prompt("Enter SS Number"));

console.log(`
    Student name : ${name}
    Student roll : ${roll}

    Subject     MARKS         GPA             GRADE
    Bangla      ${bn}       ${gpa(bn)}      ${grade(bn)}
    English     ${eng}      ${gpa(eng)}     ${grade(eng)}
    Maths       ${math}     ${gpa(math)}    ${grade(math)}
    SS          ${ss}       ${gpa(ss)}      ${grade(ss)}
----------------------------------------------------------------
                            CGPA = ${cgpa(gpa(bn),gpa(eng),gpa(math),gpa(ss))}


`)