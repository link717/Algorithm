const solution = (p) => {
  if (p === "") {
    return p
  } 
  else {
    // 균형잡힌 괄호 문자열 분리
    let u = "";
    let w = "";
    let leftCount = 0;
    let rightCount = 0;
    let check = false;
    
    for (let i = 0; i < p.length; i++) {
      if (p[i] === "(") leftCount++;
      if (p[i] === ")") rightCount++;
      if (rightCount > leftCount) check = true;
      
      if (leftCount === rightCount) {
        if (check)
      }
    }
    console.log(u, w);
  }
}