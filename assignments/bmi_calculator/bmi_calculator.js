// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if (mass<=0){
        return "INVALID INPUT"
    }
    else if (height<=0){
        return "INVALID INPUT"
    }
    else{
        BMI = mass/(height*height)
        return BMI
    }
    
    // Write your code here
}

module.exports = BMICalculator;
