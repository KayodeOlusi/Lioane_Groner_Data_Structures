const { Queue } = require("../queues/queue2");
const { GRAPH_COLORS } = require("../utils");
const { vertices, graph: testGraph } = require("./test");

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

const printVertex = vertex => console.log("Visited vertex: " + vertex);
breadthFirstSearch(testGraph, vertices[0], printVertex);
