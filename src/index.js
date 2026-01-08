import "./styles.css";
import * as generalFunctions from "./generalFunctions";

// pseudocode;

// first we add the root node to the visited list and the queue
// we loop while the queue is not empty
// visiting the node that was first added to the queue
// we iterate through the adjacent(= immediately preceding or following) nodes
// if the node has not jet been visited we add it both to the visited list and the queue

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

function allowedKnightMoves(position) {
  let allowedMoves = [
    // check for down left
    [position[0] - 2, position[1] - 1],
    // check for left down
    [position[0] - 1, position[1] - 2],
    // check for left up
    [position[0] - 2, position[1] + 1],
    // check for up left
    [position[0] + 1, position[1] - 2],
    // check for up right
    [position[0] - 1, position[1] + 2],
    // check for right up
    [position[0] + 2, position[1] - 1],
    // check for right down
    [position[0] + 1, position[1] + 2],
    // check for down right
    [position[0] + 2, position[1] + 1],
  ];

  return allowedMoves.filter((move) => isValidMove(move[0], move[1]));
}

function isValidMove(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

// function generateNode(currentPosition) {
//   let allowedMoves = allowedKnightMoves(currentPosition);
//   return { currentPosition, allowedMoves };
// }

function generateMoveArrayQueue(currentPosition) {
  let moveArrayQueue = [];
  moveArrayQueue.push(currentPosition);
  for (let i = 0; i < allowedKnightMoves(currentPosition).length; i++) {
    moveArrayQueue.push(allowedKnightMoves(currentPosition)[i]);
  }
  return moveArrayQueue;
}

function knightMoves([x, y], [a, b]) {
  // Start position and first possible moves
  let startPosition = [x, y];
  let necessaryMoves = 0;
  let yourPath = [];
  let visitedPositions = [];
  let currentArrayQueue = generateMoveArrayQueue(startPosition);
  // while (currentArrayQueue.length === 0) {
  // Check if starting position is goal position
  if (currentArrayQueue[0][0] === a && currentArrayQueue[0][1] === b) {
    yourPath.push(currentArrayQueue[0]);
    visitedPositions.push(currentArrayQueue[0]);
    currentArrayQueue = [];
    console.log(`You did it in ${necessaryMoves}, your path is: `);
    return yourPath;
  } else {
    necessaryMoves += 1;
    for (let i = 0; i < currentArrayQueue.length; i++) {
      if (currentArrayQueue[i][0] === a && currentArrayQueue[i][1] === b) {
        yourPath.push(currentArrayQueue[0])
        yourPath.push(currentArrayQueue[i]);
        visitedPositions.push(currentArrayQueue[i]);
        currentArrayQueue = [];
        console.log(`You did it in ${necessaryMoves} move, your path is: `);
        return yourPath
      } else {
        visitedPositions.push(currentArrayQueue[i]);
        // currentArrayQueue.shift([i])
      }
    }
  }
  console.log("Visited positions are: ")
  console.log(visitedPositions)
  console.log("Current array queue is: ")
  console.log(currentArrayQueue);
  // }
}

function notVisitedKnightMoves() {
  // filter out the already visited positions from the moveArray for the next move.
}

console.log(generateMoveArrayQueue([2, 2]));

console.log(knightMoves([2, 2], [5, 3]));
