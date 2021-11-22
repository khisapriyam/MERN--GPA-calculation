/**
 * gpa calculation
 */
function gpa(marks){

    let gpa;

    if(marks >=0 && marks <= 32){
        gpa = 0;
    }else if(marks >=33 && marks <=40){
        gpa = 1;
    }else if(marks >=41 && marks <=60){
        gpa = 2;
    }else if(marks >=61 && marks <=80){
        gpa = 3;
    }else if(marks >=81 && marks <=100){
        gpa = 4;
    }else{
        return "enter a valid number";
    }
    return gpa
}

/**
 * grade calculation
 */
 function grade(marks){

    let grade;
    
    if(marks >=0 && marks <= 32){
        grade = "F";
    }else if(marks >=33 && marks <=40){
        grade = "D";
    }else if(marks >=41 && marks <=60){
        grade = "C";
    }else if(marks >=61 && marks <=80){
        grade = "B";
    }else if(marks >=81 && marks <=100){
        grade = "A";
    }
    return grade;
}

/**
 * CGPA
 */
let cgpa = (bn,eng,math,ss) =>{

    let total_gpa = (bn + eng + math + ss);
    let cgpa = total_gpa/4;

    if(bn == 0 || eng == 0 || math == 0 ||ss ==0){
        return "You have failed";

    }else{
        return `your CGPA ${cgpa} and Grade = ${totalGrade(cgpa)}`;

    }
    
}

function totalGrade(cgpa){
    if(cgpa >=0 && cgpa <1){
        return "F";
    }else if(cgpa >=1 && cgpa <2){
        return "D";
    }else if(cgpa >=2 && cgpa <3){
        return "C";
    }else if(cgpa >=3 && cgpa <3.5){
        return "B";
    }else if(cgpa >=3.5 && cgpa <4){
        return "A";
    }


}

