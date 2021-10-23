function solution(brown, yellow) {
  let answer = [];
  let area = brown + yellow;

  //area = width * height = brown + yellow
  for (let i = area; i >= 0; i--) {
    if (area % i === 0) {
      let tmpWidth = i;
      let tmpHeight = area / i;
      if (checkSize(tmpWidth, tmpHeight)) return [tmpWidth, tmpHeight];
    }
  }

  function checkSize(width, height) {
    let condition1 = (width + height) * 2 - 4 === brown;
    let condition2 = width * height - brown === yellow;
    return condition1 && condition2;
  }
  return answer;
}
