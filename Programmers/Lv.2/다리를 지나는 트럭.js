let bridge_length = 2;
let weight = 10;
let truck_weights = [7,4,5,6];


function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridgeQueue = new Array(bridge_length).fill(0);
  let truckWeight = Array.from(truck_weights);

  while(bridgeQueue.length > 0) {
    bridgeQueue.shift();
    time++;

    if (truckWeight.length > 0) {
      let sumWeight = bridge.reduce((prev, cur) => prev + cur, 0);
      
      if (sumWeight + truckWeight[0] <= weight) {
        let waitingTruck = truckWeight.shift();
        bridgeQueue.push(waitingTruck);
      } else {
        bridgeQueue.push(0);
      }
    }
  }
  return time;
}

solution(bridge_length, weight, truck_weights);