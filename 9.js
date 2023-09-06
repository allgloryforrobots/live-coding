// Проверить, является ли заданное число простым

const num = 10;

function isSimple(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isSimple(num))
