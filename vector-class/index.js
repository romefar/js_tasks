class Vector {
    constructor(arr) {
      this.arr = arr;
      this.length = arr.length;
    }
    
    add(v) {
      if(this.length !== v.length) throw new Error();
      return new Vector(this.arr.map((item, i) => item + v.arr[i]));
    }
    
    subtract(v) {
      if(this.length !== v.length) throw new Error();
      return new Vector(this.arr.map((item, i) => item - v.arr[i]));
    }
    
    dot(v) {
      if(this.length !== v.length) throw new Error();
      return this.arr.reduce((cap, item, i) => cap += item * v.arr[i], 0);
    }
  
    norm(v) {
      return Math.sqrt(this.arr.reduce((cap, item) => cap += Math.pow(item, 2), 0));
    }
  
    toString(){
      return `(${this.arr.toString()})`;
    }
    
    equals(v) {
       if(this.arr.length !== v.length) return false;
       return this.arr.every((item, i) => item === v.arr[i]);
    }
  }
