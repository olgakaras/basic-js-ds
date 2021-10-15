const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// function minNode(node) {
//   if (node.left === null)
//       return node;
//   else
//       return findMinNode(node.left);
// }

// function removeNode (node, data){
//   if (node === null) {
//     return null;
// // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
// } else if (data < node.data) {
//     node.left = removeNode(node.left, data);
//     return node;
// // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
// } else if (data > node.data) {
//     node.right = removeNode(node.right, data);
//     return node;
// // если данные такие как данные корня, удаляем узел
// } else {
//     // удаляем узел без потомков (листовой узел (leaf) или крайний)
//     if (node.left === null && node.right === null) {
//         node = null;
//         return node;
//     }
//     // удаляем узел с одним потомком
//     if (node.left === null) {
//         node = node.right;
//         return node;
//     } else if(node.right === null) {
//         node = node.left;
//         return node;
//     }
//     // удаляем узел с двумя потомками
//     // minNode правого поддерева хранится в новом узле
//     let newNode = minNode(node.right);
//     node.data = newNode.data;
//     node.right = removeNode(node.right, newNode.data);
//     return node;
// }
// }

function hasNode (node, data){
  if(node === null) return false;

  else if(data < node.data){
    if(node.left == null) return false;
    else return hasNode(node.left, data);
  }

  else if(data > node.data){
    if(node.right == null) return false;
    else return hasNode(node.right, data);
  }
    
  else return true;
}

function addNode(node, newNode){
  if(newNode.data < node.data)
{
    if(node.left === null)
        node.left = newNode;
    else
        addNode(node.left, newNode);
}
else
{
    if(node.right === null)
        node.right = newNode;
    else
        addNode(node.right,newNode);
}
}

module.exports = class BinarySearchTree {
  constructor() {
    this.headTree = null;
  }


  root() {
    if (this.headTree == null) return null;
    else return this.headTree;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    var newNode = new Node(data);
    if(this.headTree === null) this.headTree = newNode;
    else addNode(this.headTree, newNode);
  }

  has(data) {
    if (data == true) return true;
    else return  hasNode(this.headTree, data);
    //this.headTree = this.hasNode(this.headTree, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    if (this.has(data) == true) return new Node(data);
    else return null;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.headTree = removeNode(this.headTree, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}