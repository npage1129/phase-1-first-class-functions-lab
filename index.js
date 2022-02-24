// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
 
   return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length -2, drivers.length);
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function fareCalculator(num1){
        return num1 * integer;
    }  
}
const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;
}
const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;
}
function selectDifferentDrivers(cb, array){
    if(cb === returnFirstTwoDrivers(array)){
        return returnFirstTwoDrivers(array)
    }else if(cb === returnLastTwoDrivers(array)){
        return returnLastTwoDrivers(array)
    }else{
        return 'Hello!'
    }
    }


    

