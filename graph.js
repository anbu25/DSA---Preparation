class Graph {
  constructor() {
    this.numberOfNode = 0;
    this.adjacentNodeList = {}
  }

  addVertex(node) {
    this.adjacentNodeList[node] = [];
    this.numberOfNode++;
  }

  addEdge(node1, node2) {
    if(this.numberOfNode === 0) {
      return false;
    }
    this.adjacentNodeList[node1].push(node2);
    this.adjacentNodeList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentNodeList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentNodeList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 

//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5