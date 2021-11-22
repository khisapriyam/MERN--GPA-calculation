// Create a BMI function for health

//BMI formula: weight(in Kg)/height(in Cm)^2
let bmiCal = (weight, height) =>{
    return `Your BMI is: ${weight/(height/100)**2}`;
}
console.log(bmiCal(70,170));