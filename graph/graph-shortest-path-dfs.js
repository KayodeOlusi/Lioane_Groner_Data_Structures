const { graph } = require("./test");
const { GRAPH_COLORS } = require("../utils");

const initializeColor = vertices => {
  const colors = {};
  for (let i = 0; i < vertices.length; i++) {
    colors[vertices[i]] = GRAPH_COLORS.WHITE;
  }
  return colors;
};

const DFS = graph => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d = {};
  const f = {};
  const p = {};
  const time = { count: 0 };
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === GRAPH_COLORS.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p
  };
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = GRAPH_COLORS.GREY;
  d[u] = ++time.count;
  const neighbours = adjList.get(u).value;

  for (let i = 0; i < neighbours.length; i++) {
    const w = neighbours[i];
    if (color[w] === GRAPH_COLORS.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }

  color[u] = GRAPH_COLORS.BLACK;
  f[u] = ++time.count;
};

module.exports = {
  DFS
};
