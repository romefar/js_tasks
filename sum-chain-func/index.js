function add(n){
    var sum = n;
    
    function func(a) {
      sum += a;  
      return func;
    }
  
    func.valueOf = function() {return sum; }
  
    return func; 
  }