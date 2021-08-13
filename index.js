const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducerF = function(accumulator, currentValue){return accumulator + currentValue}

const totalBatteries = batteryBatches.reduce(reducerF);



//const batteryFunction = (accumulator, currentValue) => batteryBatches.reduce{return const totalBatteries = (accumulator + currentValue)};

// const totalBatteries = (accumulator, currentValue) => parseInt(accumulator + currentValue)
// console.log(batteryBatches.reduce(totalBatteries))
