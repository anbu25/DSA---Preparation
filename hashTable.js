class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  get (key) {
    return this.data.filter(item => item[0] === key)[1];
  }

  set (key, value) {
    const item = this.data.filter(item => item[0] === key);
    if (item) {
      item[1] = value;
    } else {
      this.data.push([key, value]);
    }
    return this.data.filter(item => item[0] === key);
  }
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
