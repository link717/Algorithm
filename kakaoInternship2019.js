const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

function solution(board, moves) {
  let answer = 0;
  board.reverse();
  let blockTrans = {};
  for (let block of board) {
    for (let i = 0; i < block.length; i++) {
      if (!blockTrans[i+1]) {
        blockTrans[i+1] = [block[i]];
      } else if (block[i]) {
        blockTrans[i+1].push(block[i]);
      }
    }
  }
  let stack = [];
  let pickedBlock;
  for (let num = 0; num < moves.length; num++) {
    pickedBlock = blockTrans[moves[num]].pop();
    if (pickedBlock) {
      if (stack[stack.length-1] === pickedBlock){
        stack.pop();
        answer += 2;
      } else {
        stack.push(pickedBlock);
      }
    }
  }
  return answer;
}

solution(board, moves);