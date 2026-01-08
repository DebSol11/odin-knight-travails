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

function generateMoveArray(currentPosition) {
  let moveArray = [currentPosition];
  moveArray.push(allowedKnightMoves(currentPosition));
  console.log(moveArray);
  return moveArray;
}

function knightMoves([x, y], [a, b]) {
  // Start position and first possible moves
  let startPosition = [x,y];
  let necessaryMoves = 0;
  let visitedPositions = [];
  let currentMove = generateMoveArray(startPosition);
  let currentQueue = currentMove;
  console.log(currentMove[1].length);
  // Check if starting position is goal position
  if (currentMove[0][0] === a && currentMove[0][1] === b) {
    console.log("Starting position equals goal position");
  } else {
    visitedPositions.push(currentMove[0]);
    // currentQueue.shift()
    for (let i = 0; i < currentMove[1].length; i++) {
      if (currentMove[1][i][0] === a && currentMove[1][i][1] === b) {
        let yourPath = [currentMove[0], currentMove[1][i]];
        necessaryMoves = 1;
        return console.log(
          `Awesome you did it in ${necessaryMoves} move! Your path is: [${yourPath[0]}] --> [${yourPath[1]}]`
        );
      } else {
        necessaryMoves = 1;
        visitedPositions.push(currentMove[1][i]);
      }
    }
    console.log(visitedPositions);
  }
}






function printVisitedPositions() {

}

knightMoves([2, 2], [5, 3]);
