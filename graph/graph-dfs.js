const { GRAPH_COLORS } = require("../utils");
const { graph: testGraph } = require("./test");

const initializeColor = vertices => {
  const colors = {};
  for (let i = 0; i < vertices.length; i++) {
    colors[vertices[i]] = GRAPH_COLORS.WHITE;
  }
  return colors;
};

const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === GRAPH_COLORS.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = GRAPH_COLORS.GREY;
  if (callback) callback(u);

  const neighbours = adjList.get(u).value;
  for (let i = 0; i < neighbours.length; i++) {
    const w = neighbours[i];
    if (color[w] === GRAPH_COLORS.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  color[u] = GRAPH_COLORS.BLACK;
};

const printVertex = vertex => console.log("Visited vertex: " + vertex);
depthFirstSearch(testGraph, printVertex);