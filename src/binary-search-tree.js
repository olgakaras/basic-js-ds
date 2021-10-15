const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

function removeNode (node, key){
  if(node === null)
      return null;
  else if(key < node.data)
  {
      node.left = this.removeNode(node.left, key);
      return node;
  }
  else if(key > node.data)
  {
      node.right = this.removeNode(node.right, key);
      return node;
  }
  else
    {
      // deleting node with no children
      if(node.left === null && node.right === null)
      {
          node = null;
          return node;
      }

      // deleting node with one children
      if(node.left === null)
      {
          node = node.right;
          return node;
      }
        
      else if(node.right === null)
      {
          node = node.left;
          return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
}

function hasNode (node, data){
  if(node === null) return false;

  else if(data < node.data){
    if(node.left == null) return false;
    else return this.hasNode(node.left, data);
  }

  else if(data > node.data){
    if(node.right == null) return false;
    else return this.hasNode(node.right, data);
  }
    
  else return true;
}

module.exports = class BinarySearchTree {
  constructor() {
    this.headTree = null;
  }


  root() {
    return this.headTree;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    if (data == true) return true;
    else return  hasNode(this.headTree, data);
    //this.headTree = this.hasNode(this.headTree, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.headTree = this.removeNode(this.headTree, data);
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