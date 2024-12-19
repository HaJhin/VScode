let n1 = Number(prompt('첫번쨰 정수 입력'));
 let n2 = Number(prompt('두번쨰 정수 입력'));
 let n3 = Number(prompt('세번쨰 정수 입력'));

 if (n1 > n2 && n1 > n3) {
    console.log(n1);
 } else if (n1 > n2 && n1 < n3) {
    console.log(n3);
 } else if (n1 < n2 && n2 > n3) {
    console.log(n2);
 } else {
    console.log(n3);
 }