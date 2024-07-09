function sum_to_n_a(n: number) {
    let sum = 0
	for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}

function sum_to_n_b(n: number) {
    let sum = 0;
    let i: number = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}

function sum_to_n_c(n: number) {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_c(n - 1)
}