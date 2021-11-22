
// Create a function that will return children, teenagers, young people, old people from the age


let identifyPeople = (age) => {
    if(age>0 && age<= 12){
        return "You are a child";
    }else if(age >= 13 && age <= 17){
        return "You are a teenager";
    }else if(age >= 18 && age <= 30){
        return "You are young";
    }else if(age >= 31 && age <= 100){
        return "You are old";
    }else {
        return "Please enter a valid number";
    }
}
console.log(identifyPeople(22));
