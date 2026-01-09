import "./styles.css";

// // Game board example for imagination purpose
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