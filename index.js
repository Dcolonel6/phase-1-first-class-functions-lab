// Code your solution in this file!
const  returnFirstTwoDrivers  = function(listOfDrivers){
    return listOfDrivers.slice(0,2);
}
const returnLastTwoDrivers = function(listOfDrivers){
    return listOfDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor){
    return fare => fare * factor;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(listOfDrivers,callback){
    
    return callback(listOfDrivers);
}