console.log('index2.js');

// cia sukeliam savo funkcijas
function trisSkaicius(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}
