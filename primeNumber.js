function primeNum(n) {
    if (n < 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(primeNum(1)); // true
console.log(primeNum(4)); // false
console.log(primeNum(5)); // true


//Asymptotic Notation -- O(n)-Big O Notation (linear time Complexity)  