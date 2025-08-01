function fibonacci(seqNumber: number): number { 
    
    if (seqNumber === 0) {
        return 0;
    }

    if (seqNumber === 1) {
        return 1;
    }

    return fibonacci(seqNumber - 1) + fibonacci(seqNumber - 2);
    
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
