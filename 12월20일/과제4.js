let Array = [];

let outHTML = ``; // HTML 시작작

for (let i = 0; i < 6; i++) {
    let n = prompt((i+1) + '번째 번호 입력');
    if (n > 0 && n <= 45) {
        Array.push(n);
    } else {
        console.log('잘못된 번호입니다.');
    }
}

outHTML += `입력한 번호는 `;

for (let i = 0; i < Array.length; i++) {
    outHTML += `${Array[i]} `;
    
}

outHTML += ` 입니다.`;

let exampleDIV객체 = document.querySelector('#exampleDIV1'); // 특정한 선택자의 마크업을 JS객체로 가져온다.
exampleDIV객체.innerHTML = outHTML; // 가져온 마크업 객체를 innerHTML을 사용하여 구성한 HTML을 대입한다.