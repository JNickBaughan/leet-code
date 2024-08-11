class UnionFind {

    constructor(nodeCount) {
        this._nodes = Array.from({ length: nodeCount }, (_, i) => i);
        //console.dir(this._nodes);
    }

    union(nodeOneIndex, nodeTwoIndex){
        var nodeOneValue = this._nodes[nodeOneIndex];
        var nodeTwoValue =  this._nodes[nodeTwoIndex];
        this._nodes = this._nodes.map(node => {
            if(node == nodeOneValue) {
                return nodeTwoValue;
            }
            return node;
        });

        console.dir(this._nodes);
            //console.log(this._nodes.filter((val, index, arr) => arr.indexOf(val) === index));
    }

    areNodesConnected(nodeOneIndex, nodeTwoIndex){ 
        //TODO check index bounds
        return this._node[nodeOneIndex] === this._node[nodeTwoIndex];
    }
}

var connectedNodes = new UnionFind(10);
connectedNodes.union(1, 2)
connectedNodes.union(2, 3)
connectedNodes.union(2, 6)
