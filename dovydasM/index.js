console.log('hello from the other side');

function dovydoFunkcija(nr1, nr2, nr3, nr4, nr5) {
  const rez = (nr1 + nr2 + nr3 + nr4) * nr5;
  console.log('rez ===', rez);
  return rez;
}
dovydoFunkcija(2, 3, 4, 5, 0);
