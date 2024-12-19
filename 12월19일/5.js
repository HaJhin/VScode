let sum = Number(prompt('점수를 입력하세요.'));

if (sum>=90) {
    console.log('A등급')
} else if (sum>=80) {
    console.log('B등급')
} else if (sum>=70) {
    console.log('C등급')
} else {
    console.log('재시험입니다.')
}