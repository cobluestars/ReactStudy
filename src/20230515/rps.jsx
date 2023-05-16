import React from 'react';

function RpsGame() {
  const array = ['가위', '바위', '보'];
  const array2 = [['00#<br>0#0<br>00#'], ['###<br>###<br>###'], ['###<br>#0#<br>###']];
  
  function rps() {
    document.getElementById('rps1').innerHTML = '가위바위보 게임<br><br>';
    
    while (true) {
      const random = Math.random();
      const computer = Math.floor(random * 3);
      const user = Number(prompt('가위 바위 보: 1.가위 2.바위 3.보 숫자 입력.')) - 1; // 배열의 인덱스가 0부터 시작하므로 -1을 해 주어야...
      
      if (user === 0 || user === 1 || user === 2) {
        document.getElementById('rps2').innerHTML = ` 컴퓨터 : ${array[computer]}<br>${array2[computer]}<br> 유저 : ${array[user]}<br>${array2[user]}`;
        if (computer - user === 1 || (user - computer === 2 && computer === 0)) {
          alert('졌다.');
          document.getElementById('rps3').innerHTML = '<br>졌다.';
          break;
        } else if (computer === user) {
          alert('비겼다.');
          document.getElementById('rps3').innerHTML = '<br>비겼다.';
          break;
        } else if (user - computer === 1 || (computer - user === 2 && user === 0)) {
          alert('이겼다.');
          document.getElementById('rps3').innerHTML = '<br>이겼다.';
          break;
        }
      } else {
        alert('숫자 1, 2, 3 중 하나를 입력하세요. (1. 가위, 2. 바위, 3. 보)');
      }
    }
  }

  return (
    <div>
      <div id="rps1"></div>
      <div id="rps2"></div>
      <div id="rps3"></div>
      <button onClick={rps}>가위바위보</button>
    </div>
  );
}

export default RpsGame;