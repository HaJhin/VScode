// 전역변수
let memberTable = []; // 회원 객체 여러개를 저장하는 배열
let currentUser;
// [1. 회원가입 기능 함수 구현]
    // 함수설계 : 사용처 : 회원가입버튼 클릭 시
    // 함수명 : signUp : 카멜표기법 권장
    // 매개변수 : HTML(id,pw,nickname)은 document.querySelector()
    // 리턴값 : HTML(성공/실패 메시지)는 alert , innerHTML

    // 회원가입이란 무엇인가
    // 1. 사용자로부터 입력받는다. (<input>)
    // 2. 사용자로부터 입력받은 값 가져오기 (document.querySelector())
    // 3. 회원객체 생성 ( { } 객체 vs MemberDto 생성)
    // 4. 데이터베이스 저장 (전역변수 저장 vs DB 저장)
        // 추후에 JS정보를 JAVA로 통신할 예정 HTML -> JS -> JAVA -> DB
    // 5. 성공 또는 실패 시 메시지 전달 (alert() vs print())

    function signUp() {
        // - function이란 함수를 만들겠다는 선언 키워드
        // - signUp 이란 임의 함수명
        // - ( ) : 매개변수가 들어갈 자리 -> 매개변수 없음
        // - return : 함수가 종료되면서 호출했던 곳으로 반환하는 값
            // html로 반환되므로 생략 예정
        // [1] HTML로 부터 입력받은 값을 가져오기 위해 INPUT 마크업 객체를 가져온다.
        // (왜?) DOM객체가 필요할까? html은 단순 문자열 언어이므로 , 함수/변수로 사용할 수 없다.
        // 그래서 JS가 HTML 마크업들을 객체화해서 마크업을 객체처럼 다루기 위한 객체 제공
        let signid = document.querySelector('.signid'); console.log(signid);
        let signpw = document.querySelector('.signpw'); console.log(signpw);
        let signname = document.querySelector('.signname'); console.log(signname);
            // 잊지말고 꼭 테스트 진행. 콘솔 많이 찍어보기
        // [2] INPUT 마크업 객체로부터 value 속성 가져오기
        let id = signid.value; console.log(id);
        let pw = signpw.value; console.log(pw);
        let name = signname.value; console.log(name);
        for (let i = 0; i < memberTable.length; i++) {
            let memberDto = memberTable[i]
            if(memberDto.id == id) {
                alert('경고 : 이미 존재하는 아이디 입니다.');
                return;
            } // if ed
        } 
        
        if (pw.length < 5 || pw.length > 10) {
            alert('경고 : 비밀번호는 5~10자 이내로 입력해주십시오.');
            return;
        } // if ed
        // [3] 3가지 회원 정보를 객체로 구성한다.
        let MemberDto = {id : id , pw : pw , name : name};
        console.log(MemberDto);
        memberTable.push(MemberDto);
        console.log(memberTable);
        // [5] 회원가입 성공/실패 메시지 출력
        alert('회원가입 성공');
        // [6] HTML input value 속성 초기화. 입력된 값을 없애기.
        signid.value = '';
        signpw.value = '';
        signname.value = '';
        return;
    } // f ed

// [2.로그인 기능 함수 구현]
    // 함수설계 : 사용처 : 로그인 버튼 클릭 시
    // 함수명 : logIn , 변수명/함수명 - 카멜표기법
    // 매개변수 : X
        // HTML(id,pw)은 document.querySelector()
    // 리턴값 : X
    //      HTML(성공/실패 메시지)는 alert,innerHTML

    function logIn() {
        console.log(`logIn() 실행`) // HTML에서 함수를 호출하는 방법 <마크업 onclick="함수명">
        // [1] HTML로부터 입력받은 값 가져오기 위해 INPUT 마크업 객체를 가져온다.
        let loginid = document.querySelector('.loginid'); console.log(loginid);
        let loginpw = document.querySelector('.loginpw'); console.log(loginpw);
        // [2] input 마크업 객체로부터 value 속성 가져오기
        let id = loginid.value; console.log(id);
        let pw = loginpw.value; console.log(pw);
        let name;
        // [3] 회원목록 (DB) 배열에서 입력받은 값 찾기
        let loginState = false;
        for(let i = 0; i < memberTable.length; i++) {
            // = i 는 0부터 배열 내 마지막 인덱스까지 1씩 증가 반복
            let memberDto = memberTable[i]; // i의 member객체 가져온다.
            if(memberDto.id == id && memberDto.pw == pw) {
                // 만약에 i번째 회원아이디와 입력한 아이디가 같고
                // i번째 회원 비밀번호와 입력한 비밀번호가 같으면
                currentUser = {userID : memberDto.id , userPW : memberDto.pw , userName : memberDto.name}; 
                loginState = true;
                break;
            } // if ed
        } // for ed
       if (loginState == true) {
        alert(`로그인 성공.`); 
        console.log(currentUser);
        }
        else {
        alert('동일한 회원정보가 없습니다.');
       }
       loginid.value = '';
       loginpw.value = '';
       return;
    } // f ed

    