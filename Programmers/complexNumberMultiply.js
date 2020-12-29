// Question
// 두 개의 input에 복소수(complex number)가 string 으로 주어집니다.
// 복소수란 a+bi 의 형태로, 실수와 허수로 이루어진 수입니다.

// input으로 받은 두 수를 곱해서 반환해주세요.
// 반환하는 표현도 복소수 형태의 string 이어야 합니다.

// 복소수 정의에 의하면 (i^2)는 -1 이므로 (i^2) 일때는 -1로 계산해주세요.

const complexNumberMultiply = (a, b) => {
  const a1 = a.split("+")[0];
  const a2 = parseInt(a.split("+")[1]);
  const b1 = b.split("+")[0];
  const b2 = parseInt(b.split("+")[1]); 
   
   return (a1*b1-a2*b2)+"+"+(a1*b2+a2*b1)+"i"
 };