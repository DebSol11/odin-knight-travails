import "./styles.css";
import * as generalFunctions from "./generalFunctions";

pseudocode;

// first we add the root node to the visited list and the queue
// we loop while the queue is not empty 
// visiting the node that was first added to the queue
// we iterate through the adjacent(= immediately preceding or following) nodes 
// if the node has not jet been visited we add it both to the visited list and the queue

function breadthFirstSearch(graph, node) {
  visited = [];
  queue = [];
}

// breadthFirstSearch (BFS)
// Graph Example
// Game board example
[
  [0, 0, 0, 0, 0, 0, 0, 0], //row index 7
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, E, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, K, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0], //row index 1
  [0, 1, 0, 1, 0, 0, 0, 0], //row index 0
]; // column index 0 to 7

// The knight starts on a random field e.g. at 2,2
// we initialize a stepCounter variable to 0
// graph as represented as adjacency list
graph = {
  "2,2": ["0,1", "1,0", "0,3", "3,0", "1,4", "4,1", "3,4", "4,3"],
  // we check if "2,2" is our goal node 
  // if so we return a happy message and the stepCounter value 
  // if not pop "0,1" from the queue and traverse all the possible fields 
  // check every time if the visited field is the goal field 
  "0:1": ["0,3", "1,0", "2,2"], // "1,0", "2,2" have already been visited.
  // we see that none of the fields above are the goal field and 
  // and pop of "0,1" from the queue
  // now the algorithm should go BFS to "1,0"
  "1:0": []
};
