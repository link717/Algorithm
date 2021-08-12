/*
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다.
그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 공백(" ) 또는벽(#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 지도 1과 지도 2라고 하자.
지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
지도 1과 지도 2는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1,
공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.
*/

const changeToBinary = (num, n) => {
  let leng = num.toString(2).length;
  return leng === n ? num.toString(2) : Array(n-leng).fill(0).join("") + num.toString(2)
}

const solution = (n, arr1, arr2) => {
  let answer = [];
  let arr1ToBinary = arr1.map((num) => changeToBinary(num, n));
  let arr2ToBinary = arr2.map((num) => changeToBinary(num, n));
  
  for (let i = 0; i < n; i++) {
    let output = "";
    for (let j = 0; j < n; j++) {
      (Number(arr1ToBinary[i][j]) || Number(arr2ToBinary[i][j])) ? output += "#" : output += " "
    }
    answer.push(output);
  }
  return answer;
}