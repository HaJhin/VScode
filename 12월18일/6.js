let id = String(prompt('아이디 입력'));
let pwd = Number(prompt('비밀번호 입력'));

let result = id === 'admin' && pwd === 1234;

console.log(result);