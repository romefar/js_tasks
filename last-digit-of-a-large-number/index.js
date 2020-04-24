var lastDigit = function(a, b){  // a ^ b
  
    var a_len = a.length;
    var b_len = b.length;
    
    if((+a[0] === 0 && +b[0] === 0) && (a_len === 1 && b_len === 1))
      return 1;
    
    if(+b[0] === 0 && b_len === 1)
      return 1;
      
    var base = +a[a_len - 1];
    var exp = +((b_len < 2) ? b[b_len - 1] : b[b_len - 2] + b[b_len - 1]);
    
    var mod = (exp % 4 === 0) ? 4 : exp % 4;
  
    var res = Math.pow(base, mod) % 10;
    
    return res;
  }