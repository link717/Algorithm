/*
Design a HashMap without using any built-in hash table libraries.
Implement the MyHashMap class
*/

class MyHashMap {
  constructor() {
    this.data = new Array(1000001);
  }

  put(key, val) {
    this.data[key] = val;
  }

  get(key) {
    let val = this.data[key];
    return val !== undefined ? val : -1;
  }

  remove(key) {
    delete this.data[key];
  }
}
