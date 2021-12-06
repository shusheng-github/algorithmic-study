/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function (numCourses, prerequisites) {
  let to = Array(numCourses).fill().map(() => []);
  let inDeg = Array(numCourses).fill(0); //度，代表链接了几个节点
  for (let pre of prerequisites) {
      let ai = pre[0];
      let bi = pre[1];
      to[bi].push(ai);
      inDeg[ai]++;
  }
  // 队列
  let queue = [];
  let lession = [];
  // inDeg[i] === 0说明没有边相连，则是可学课程
  for (let i = 0; i < numCourses; i++) {
      if (inDeg[i] === 0) {
          queue.push(i);
      }
  }
  while (queue.length) {
      let x = queue.shift();
      lession.push(x);
      for (let y of to[x]) {
          inDeg[y]--;
          // inDeg[i] === 0说明没有边相连，则是可学课程
          if (inDeg[y] === 0) {
              queue.push(y);
          }
      }
  }
  if (lession.length === numCourses) return lession;
  return [];
};