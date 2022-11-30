// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

/*function returnFirstTwoDrivers(uno)  {
     
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

  return ['Antonia', 'Nuru']
}

 function returnLastTwoDrivers (dos) {

    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

    return ['Amari', 'Mo']
 }*/
 
function returnFirstTwoDrivers() {
  return drivers.slice(0, 2);
}
returnFirstTwoDrivers();

const returnLastTwoDrivers=function() {
  return drivers.slice(-2)
}

returnLastTwoDrivers();
 
const selectDifferentDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(moja) {
  return function(fare) {
  return fare * moja
}
}
const fareQuintupler=createFareMultiplier(4)

function fareDoubler () {

return createFareMultiplier(2)*fare
}

function fareTripler() {

  return createFareMultiplier(3)
}

function selectDifferentDrivers (drivers,driverChoice) {
  if (driverChoice === returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(drivers)
  }else if  (driverChoice === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
  }

}

selectDifferentDrivers (drivers ,returnFirstTwoDrivers)

selectDifferentDrivers (drivers ,returnLastTwoDrivers)