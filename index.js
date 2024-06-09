let WinnerRank = getWinnerRank(129, 63);

function getWinnerRank(numA, numB) {
  let WinnerRank = numA - numB;
  return WinnerRank;
}

let nivel = "";

if (WinnerRank < 10) {
  nivel = "Ferro";
} else if (WinnerRank >= 11 && WinnerRank < 20) {
  nivel = "Bronze";
} else if (WinnerRank >= 21 && WinnerRank < 50) {
  nivel = "Prata";
} else if (WinnerRank >= 51 && WinnerRank < 80) {
  nivel = "Ouro";
} else if (WinnerRank >= 81 && WinnerRank < 90) {
  nivel = "Diamente";
} else if (WinnerRank >= 91 && WinnerRank < 100) {
  nivel = "Lendário";
} else {
  nivel = "Imortal";
}

console.log(
  "O Herói tem de saldo " + WinnerRank + " vitórias e está no nível de " + nivel
);
