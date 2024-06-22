const { Graph } = require("./graph");
const { Queue } = require("../queues/queue2");
const { GRAPH_COLORS } = require("../utils");

const initializeColor = vertices => {
  const colors = {};
  for (let i = 0; i < vertices.length; i++) {
    colors[vertices[i]] = GRAPH_COLORS.WHITE;
  }
  return colors;
};

const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();

  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbours = adjList.get(u).value;
    color[u] = GRAPH_COLORS.GREY;

    for (let i = 0; i < neighbours.length; i++) {
      const w = neighbours[i];
      if (color[w] === GRAPH_COLORS.WHITE) {
        color[w] = GRAPH_COLORS.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = GRAPH_COLORS.BLACK;
    if (callback) callback(u);
  }
};

const graph = new Graph();
const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

const printVertex = vertex => console.log("Visited vertex: " + vertex);
breadthFirstSearch(graph, vertices[0], printVertex);
