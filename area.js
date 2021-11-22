// Create a function that will return the area of a rectangle, square, triangle


let area =(type, length, width) => {
    if(type == "rectangle"){
        return length * width; 
    }else if(type == "square"){
        return length * length; 
    }else if(type == "triangle"){
        return 0.5 * length * width; 
    }else{
        return "it is something else";
    }   
}

console.log(area("square",20));
console.log(area("rectangle",20,10));
console.log(area("triangle",20,30));

