function solution(operations) {
  let priorityQueue = [];
  const methods = new Map();
  const operationType = {
    insert: 'I',
    deleteMaxNumber: '1',
    deleteMinNumber: '-1',
  };
  const setPriorityQueue = (number) => priorityQueue.push(number);
  const deletePriorityQueue = (type) => {
    let targetNumber;

    if (type === operationType.deleteMaxNumber) {
      targetNumber = Math.max(...priorityQueue);
    }
    if (type === operationType.deleteMinNumber) {
      targetNumber = Math.min(...priorityQueue);
    }

    const index = priorityQueue.findIndex((el) => el === targetNumber);
    if (index !== -1) {
      const filteredQueue = priorityQueue.filter((el, idx) => idx !== index);
      priorityQueue = filteredQueue;
    }
  };

  methods.set(operationType.insert, (number) => setPriorityQueue(number));
  methods.set(operationType.deleteMinNumber, (type) => deletePriorityQueue(type));
  methods.set(operationType.deleteMaxNumber, (type) => deletePriorityQueue(type));

  operations.forEach((operation) => {
    const [type, number] = operation.split(' ');

    if (type === operationType.insert) {
      methods.get(type)(Number(number));
    } else {
      methods.get(number)(number);
    }
  });

  return priorityQueue.length === 0 ? [0, 0] : [Math.max(...priorityQueue), Math.min(...priorityQueue)];
}
