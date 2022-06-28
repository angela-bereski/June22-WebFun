function fibonacciArray(n) {
    var fibArr = [0,1];
    for (var i=2; i<n; i++) {
        fibArr[i]=Number(fibArr[i-1])+Number(fibArr[i-2])
        fibArr.push()
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result)