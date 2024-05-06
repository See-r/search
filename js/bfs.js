//数据结构 邻接链表-顶点
function Vertex() {
    if (!(this instanceof Vertex))
        return new Vertex();
    this.color = this.WHITE; //初始为 白色
    this.pi = null; //初始为 无前驱
    this.d = this.INFINITY; //初始为 无穷大
    this.edges = null; //由顶点发出的所有边
    this.value = null; //节点的值 默认为空
}
Vertex.prototype = {
    constructor: Vertex,
    WHITE: 'white', //白色
    GRAY: 'gray', //灰色
    BLACK: 'black', //黑色
    INFINITY: null, //d 为 null 时表示无穷大
}
 
//数据结构 邻接链表-边
function Edge() {
    if (!(this instanceof Edge))
        return new Edge();
    this.index = null; //边所依附的节点的位置
    this.sibling = null;
}
 
//数据结构 图-G
function Graph() {
    if (!(this instanceof Graph))
        return new Graph();
    this.graph = [];
}
Graph.prototype = {
    constructor: Graph,
    //这里加进来的已经具备了边的关系
    addNode: function (node) {
        this.graph.push(node);
    },
    getNode: function (index) {
        return this.graph[index];
    }
}
 
//广度优先搜索
function BFS(g, s) {
    let queue = [];
    s.color = s.GRAY;
    s.d = 0;
    queue.push(s);
    while (queue.length > 0) {
        let u = queue.shift();
        if (u.edges == null) continue;
        let sibling = u.edges;
        while (sibling != null) {
            let index = sibling.index;
            let n = g.getNode(index);
            if (n.color == n.WHITE) {
                n.color = n.GRAY;
                n.d = u.d + 1;
                n.pi = u;
                queue.push(n);
            }
            sibling = sibling.sibling;
        }
        u.color = u.BLACK;
        console.log(u);
    }
}
 
//创建 顶点
var vA = Vertex();
var vB = Vertex();
var vC = Vertex();
var vD = Vertex();
var vE = Vertex();
var vF = Vertex();
vA.value = 'A';
vB.value = 'B';
vC.value = 'C';
vD.value = 'D';
vE.value = 'E';
vF.value = 'F';
 
//构建由 A 节点发出的边集
var eA1 = Edge();
var eA2 = Edge();
eA1.index = 1;
eA2.index = 3;
eA1.sibling = eA2;
vA.edges = eA1;
 
//构建有 B 节点发出的边集
var eB1 = Edge();
var eB2 = Edge();
var eB3 = Edge();
eB1.index = 0;
eB2.index = 4;
eB3.index = 2;
eB1.sibling = eB2;
eB2.sibling = eB3;
vB.edges = eB1;
 
//构建由 C 节点发出的边
var eC1 = Edge();
var eC2 = Edge();
var eC3 = Edge();
eC1.index = 1;
eC2.index = 4;
eC3.index = 5;
eC1.sibling = eC2;
eC2.sibling = eC3;
vC.edges = eC1;
 
//构建由 D 节点发出的边
var eD1 = Edge();
eD1.index = 0;
vD.edges = eD1;
 
//构建由 E 节点发出的边
var eE1 = Edge();
var eE2 = Edge();
var eE3 = Edge();
eE1.index = 1;
eE2.index = 2;
eE3.index = 5;
eE1.sibling = eE2;
eE2.sibling = eE3;
vE.edges = eE1;
 
//构建由 F 节点发出的边
var eF1 = Edge();
var eF2 = Edge();
eF1.index = 2;
eF2.index = 4;
eF1.sibling = eF2;
vF.edges = eF1;
 
//构建图
var g = Graph();
g.addNode(vA);
g.addNode(vB);
g.addNode(vC);
g.addNode(vD);
g.addNode(vE);
g.addNode(vF);

BFS(g, vB);