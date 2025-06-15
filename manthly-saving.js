function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number' || livingCost < 0) {
        return "invalid input";
    }

    let totalSavings = 0;

    for (let i = 0; i < payments.length; i++) {
        if (typeof payments[i] !== 'number') {
            return "invalid input";
        }

        if (payments[i] >= 3000) {
            totalSavings += (payments[i] - 3000);
        }
    }

    if (totalSavings > livingCost) {
        return "earn more";
    } else {
        return totalSavings - livingCost;
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 3500], 500)); 
console.log(monthlySavings([900, 2700, 3400], 100));  
console.log(monthlySavings(100, [900, 2700, 3400])); 

