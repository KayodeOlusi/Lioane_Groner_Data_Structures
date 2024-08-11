const { Graph } = require("./graph");
const { DFS } = require("./graph-shortest-path-dfs");

const graph = new Graph(true);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

const result = DFS(graph);

const fTimes = result.finished;
let s = "";

for (let count = 0; count < vertices.length; count++) {
  let max = 0;
  let maxName = null;

  for (let i = 0; i < vertices.length; i++) {
    if (fTimes[vertices[i]] > max) {
      max = fTimes[vertices[i]];
      maxName = vertices[i];
    }
  }

  s += " - " + maxName;
  delete fTimes[maxName];
}

console.log(s);