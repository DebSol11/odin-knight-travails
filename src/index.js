import "./styles.css";
import * as generalFunctions from "./generalFunctions";

// pseudocode;

// first we add the root node to the visited list and the queue
// we loop while the queue is not empty
// visiting the node that was first added to the queue
// we iterate through the adjacent(= immediately preceding or following) nodes
// if the node has not jet been visited we add it both to the visited list and the queue

// function breadthFirstSearch(graph, node) {
//   visited = [];
//   queue = [];
// }

// // breadthFirstSearch (BFS)
// // Graph Example
// // Game board example
// [
//   [0, 0, 0, 0, 0, 0, 0, 0], // 7
//   [0, 0, 0, 0, 0, 0, 0, 0], // 6
//   [0, 0, 0, E, 0, 0, 0, 0], // 5
//   [0, 1, 0, 1, 0, 0, 0, 0], // 4
//   [1, 0, 0, 0, 1, 0, 0, 0], // 3
//   [0, 0, K, 0, 0, 0, 0, 0], // 2
//   [1, 0, 0, 0, 1, 0, 0, 0], // 1
//   [0, 1, 0, 1, 0, 0, 0, 0], // 0 (= i) start 0
// ];
// // 0, 1, 2, 3, 4, 5, 6, 7 (= j) start 1

function possibleKnightMoves(start) {
  let possibleMoves = [];
  // check for down left
  if (start[0] - 2 >= 0 && start[1] - 1 >= 0) {
    possibleMoves.push([start[0] - 2, start[1] - 1]);
  }
  // check for left down
  if (start[0] - 1 >= 0 && start[1] - 2 >= 0) {
    possibleMoves.push([start[0] - 1, start[1] - 2]);
  }
  // check for left up
  if (start[0] < 7 && start[1] - 2 >= 0) {
    possibleMoves.push([start[0] - 2, start[1] + 1]);
  }
  // check for up left
  if (start[0] < 6 && start[1] - 1 >= 0) {
    possibleMoves.push([start[0] + 1, start[1] - 2]);
  }
  // check for up right
  if (start[0] < 6 && start[1] < 7) {
    possibleMoves.push([start[0] - 1, start[1] + 2]);
  }
  // check for right up
  if (start[0] < 7 && start[1] < 6) {
    possibleMoves.push([start[0] + 2, start[1] - 1]);
  }
  // check for right down
  if (start[0] - 1 >= 0 && start[1] < 6) {
    possibleMoves.push([start[0] + 1, start[1] + 2]);
  }
  // check for down right
  if (start[0] - 2 >= 0 && start[1] < 7) {
    possibleMoves.push([start[0] + 2, start[1] + 1]);
  }

  // if (start[0] === 0 && start[1] === 0) {
  //   possibleMoves = [
  //     [2, 1],
  //     [1, 2],
  //   ];
  // }
  //  else if (start[0] === 2 && start[1] === 2) {
  //   return possibleMoves = [
  //     [start[0]-2, start[1]-1],
  //     [start[0]-1, start[1]-2],
  //     [start[0]-2, start[1]+1],
  //     [start[0]+1, start[1]-2],
  //     [start[0]-1, start[1]+2],
  //     [start[0]+2, start[1]-1],
  //     [start[0]+1, start[1]+2],
  //     [start[0]+2, start[1]+1],
  //   ];
  // possibleMoves = [
  //   [0, 1],
  //   [1, 0],
  //   [0, 3],
  //   [3, 0],
  //   [1, 4],
  //   [4, 1],
  //   [3, 4],
  //   [4, 3],
  // ];
  // } else if (start[0] === 1 && start[1] === 0) {
  //   possibleMoves = [
  //     [2, 0],
  //     [2, 2],
  //     [1, 3],
  //   ];
  // } else if (start[0] === 1 && start[2] === 0) {
  //   possibleMoves = [
  //     [1, 0],
  //     [2, 1],
  //     [2, 3],
  //     [1, 4],
  //   ];
  // }
  return possibleMoves;
}
// The knight starts on a random field e.g. at 2,2
// we initialize a stepCounter variable to 0
// graph as represented as adjacency list
// graph = {
//   "2,2": ["0,1", "1,0", "0,3", "3,0", "1,4", "4,1", "3,4", "4,3"],
//   // we check if "2,2" is our goal node
//   // if so we return a happy message and the stepCounter value
//   // if not pop "0,1" from the queue and traverse all the possible fields
//   // check every time if the visited field is the goal field
//   "0:1": ["0,3", "1,0", "2,2"], // "1,0", "2,2" have already been visited.
//   // we see that none of the fields above are the goal field and
//   // and pop of "0,1" from the queue
//   // now the algorithm should go BFS to "1,0"
//   "1:0": [],
// };

console.log(possibleKnightMoves([1, 0]));
