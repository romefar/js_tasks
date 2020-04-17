function maxContiguousSum (arr) {
    let sum = 0;
    let tmp = 0;
    for(let i = 0; i < arr.length; i++) {
       tmp += arr[i];
       sum = Math.max(sum, tmp);
       if(tmp < 0) tmp = 0;
    }
    return sum;
  }