let sum = Number(prompt('금액 입력'));

let 십만원 = parseInt(sum / 100000);

console.log('십만원권 : '+십만원+'장');

sum -= 십만원*100000;

let 만원 = parseInt(sum / 10000);

console.log('만원권 : '+만원+'장');

sum -= 만원*10000;

let 천원 = parseInt(sum / 1000);

console.log('천원권 : '+천원+'장');