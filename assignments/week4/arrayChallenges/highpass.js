function highPass(arr, cutoff) {
    var filteredArr=[]
    for (var i=0; i<arr.length; i++) {
        var newnum = arr[i]
        if (newnum>5) {
            filteredArr.push(newnum)
        }
    }
    return filteredArr;
}
var result = highPass([6,8,3,10,-2,5,9], 5)
console.log(result);