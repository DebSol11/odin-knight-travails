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

function knightMoves(start, end) {
  const queue = [[start, [start]]]; // Store [currentPosition, pathHistory]
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    // Check if target is reached
    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(
        `You made it in ${path.length - 1} moves! Here is your path:`
      );
      return path; // Shortest path found
    }

    // Explore neighbors
    const moves = allowedKnightMoves(current);
    for (const move of moves) {
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, [...path, move]]);
      }
    }
  }
}

console.log(knightMoves([2, 2], [7, 7]));

// function generateNode(currentPosition) {
//   let allowedMoves = allowedKnightMoves(currentPosition);
//   return { currentPosition, allowedMoves };
// }

// function generateMoveArrayQueue(currentPosition) {
//   let moveArrayQueue = [];
//   moveArrayQueue.push(currentPosition);
//   for (let i = 0; i < allowedKnightMoves(currentPosition).length; i++) {
//     moveArrayQueue.push(allowedKnightMoves(currentPosition)[i]);
//   }
//   return moveArrayQueue;
// }

// function knightMoves([x, y], [a, b]) {
//   // Start position and first possible moves
//   let startPosition = [x, y];
//   let necessaryMoves = 0;
//   let yourPath = [];
//   let visitedPositions = [];
//   let currentArrayQueue = generateMoveArrayQueue(startPosition);
//   let previousArrayQueue = currentArrayQueue;

//   while (currentArrayQueue.length != []) {
//     // Check if starting position is goal position
//     if (currentArrayQueue == []) {
//     }
//     if (currentArrayQueue[0][0] === a && currentArrayQueue[0][1] === b) {
//       yourPath.push(startPosition);
//       yourPath.push(currentArrayQueue[0]);
//       visitedPositions.push(currentArrayQueue[0]);
//       currentArrayQueue = [];
//       console.log(`You did it in ${yourPath.length - 1} moves, your path is: `);
//       return yourPath;
//     } else {
//       visitedPositions.push(currentArrayQueue[0]);
//       currentArrayQueue.shift();
//       // return knightMoves([currentArrayQueue[0]],[a,b])
//       // for (let i = 0; i < currentArrayQueueInitialLength; i++) {
//       //   if (currentArrayQueue[i][0] === a && currentArrayQueue[i][1] === b) {
//       //     yourPath.push(currentArrayQueue[0]);
//       //     yourPath.push(currentArrayQueue[i]);
//       //     visitedPositions.push(currentArrayQueue[i]);
//       //     currentArrayQueue = [];
//       //     console.log(`You did it in ${necessaryMoves} move, your path is: `);
//       //     return yourPath;
//       //   } else {
//       //     visitedPositions.push(currentArrayQueue[i]);
//       //     //currentArrayQueue.shift()
//       //   }
//       // }
//     }
//   }

//   console.log("Visited positions are: ");
//   console.log(visitedPositions);
//   console.log("Current array queue is: ");
//   console.log(currentArrayQueue);
//   console.log(previousArrayQueue);
// }

// function notVisitedKnightMoves() {
//   // filter out the already visited positions from the moveArray for the next move.
// }

// console.log(generateMoveArrayQueue([2, 2]));
