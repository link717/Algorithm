let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let x of moves) {
    let pos = x - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos] > 0) {
        let tmp = board[i][pos];
        board[i][pos] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  }
  return answer;
}
