const { Queue } = require("../queues/queue2");
const { GRAPH_COLORS } = require("../utils");
const { Stack } = require("../stacks/stack_2");
const { graph, vertices } = require("./test");

const initializeColor = vertices => {
  const colors = {};
  for (let i = 0; i < vertices.length; i++) {
    colors[vertices[i]] = GRAPH_COLORS.WHITE;
  }
  return colors;
};

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  const distances = {};
  const predecessors = {};

  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbours = adjList.get(u).value;
    color[u] = GRAPH_COLORS.GREY;

    for (let i = 0; i < neighbours.length; i++) {
      const w = neighbours[i];
      if (color[w] === GRAPH_COLORS.WHITE) {
        color[w] = GRAPH_COLORS.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = GRAPH_COLORS.BLACK;
  }

  return { distances, predecessors };
};

const shortestPath = BFS(graph, vertices[0]);

const fromVertex = vertices[0];
for (let i = 1; i < vertices.length; i++) {
  const toVertex = vertices[i];
  const path = new Stack();
  for (let v = toVertex;
       v !== fromVertex;
       v = shortestPath.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ' - ' + path.pop();
  }
  console.log(s);
}

