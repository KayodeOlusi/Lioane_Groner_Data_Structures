const Dictionary = require("../dictionaries & hash/round2/dictionary");

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).value.push(w);
    if (!this.isDirected) {
      this.adjList.get(w).value.push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} ->`;
      const neighbours = this.adjList.get(this.vertices[i]).value;
      for (let j = 0; j < neighbours.length; j++) {
        s += ` ${neighbours[j]}`;
      }
      s += "\n";
    }
    return s;
  }
}

module.exports = {
  Graph
};
