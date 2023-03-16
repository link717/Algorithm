/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

/*
트랙을 뛰는 선수 a, b를 상상해보자.
트랙이 직선 코스면 선수 a, b는 만나지 않는다.
트랙이 둥근 코스면 선수 a, b는 만나게 된다.
*/
var hasCycle = function (head) {
  let slowRunner = head;
  let fastRunner = head;

  if (head == null) return false;

  if (head.next == null) return false;

  while (fastRunner.next != null && fastRunner.next.next != null) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    if (slowRunner == fastRunner) {
      return true;
    }
  }
  return false;
};
