// funkcija kuri sudeda tris skaičius, atspausdina ir grąžina rezultatą

function trisSkaicius(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}

// funkcija kuri sudeda atspausdinius ir grąžinius ir tris skaičius rezultatą

function atspausdiniusGraziniusTrisSkaicius(a, b, c) {
    if (a == b && b == c) {
        return true;
    } else if (a == b || a == c || b == c) {
        return true;
    } else if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}
