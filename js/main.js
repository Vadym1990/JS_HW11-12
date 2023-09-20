let arr1 = [1, 0, -2, -1, 58, -4];
let arr2 = [1, 2, 3];

function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}


console.log('Min(arr1): ' + getMin(arr1));
console.log('Max(arr1): ' + getMax(arr1));
console.log('Sum(arr2): ' + getSum(arr2));