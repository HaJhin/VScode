let id = prompt('아이디 입력');
let pwd = Number(prompt('비밀번호 입력'));

if (id==='admin' && pwd === 1234) {
    console.log('로그인 성공')
} else {
    console.log('로그인 실패')
}