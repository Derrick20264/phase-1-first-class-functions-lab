// Code your solution in this file!
// 1. returnFirstTwoDrivers: anonymous function assigned to const
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers: anonymous function assigned to const
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers: array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier: higher-order function that returns a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler: doubles the fare using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler: triples the fare using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers: takes array and either returnFirstTwoDrivers or returnLastTwoDrivers function
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
