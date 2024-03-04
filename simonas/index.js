// index.js

// pasidaryti funkcija kuri sudeda du pirmus skaicius ir tada atima trecia skaiciu, atspauzdina ir grazina rezultata

// simona fn start
function sudetiAtimti(num1, num2, num3) {
  const suma = num1 + num2;
  let rez = suma - num3;

  console.log('suma ===', suma);
  console.log('rez ===', rez);

  return rez;
}
// simona fn end

let rez = sudetiAtimti(11, 6, 4);
console.log('Rezultatas:', rez);
