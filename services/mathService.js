exports.fibonacci = (n) => {
    const arr = [0, 1];
  
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  
    return arr.slice(0, n);
  };
  
 
  exports.prime = (numbers) => {
    const isPrime = (num) => {
      if (num < 2) return false;
  
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
  
      return true;
    };
  
    return numbers.filter(isPrime);
  };
  
 

  exports.hcf = (arr) => {
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };
  
    return arr.reduce((a, b) => gcd(a, b));
  };
  
 
exports.lcm = (arr) => {
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };
  
    const lcmTwo = (a, b) => (a * b) / gcd(a, b);
  
    return arr.reduce((a, b) => lcmTwo(a, b));
  };
  