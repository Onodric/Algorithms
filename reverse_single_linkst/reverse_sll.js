"use strict";

function Node(data){
  this.data = data;
  this.next = null;
}

function SinglyList(){
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function (value) {
  var node = new Node(value),
      currentNode = this.head;

  // UseCase: empty list
  if (!currentNode) {
    this.head = node;
    this._length += 1;
    return node;
  }

  // UseCase: a non-empty list
  while (currentNode.next){
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this._length += 1;

  return node;
};

SinglyList.prototype.searchNodeAt = function (position) {
  var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list. Rather' +
      ' that position is not occupied by a node. Either the position < 1' +
      ' or > the list length, or the list has no nodes'};

  // UseCase: an invalid position
  if (length === 0 || position<1 || position > length) {
    throw new Error(message.failure);
  }

  // UseCase: a valid position
  while (count<position){
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};

SinglyList.prototype.remove = function (position) {
  var currentNode = this.head,
      length = this._length,
      count = 0,
      message = {failure: 'Failure: the node you seek does not exist'},
      beforeNodeToDelete = null,
      nodeToDelete = null,
      deletedNode = null;

  // UseCase: an invalid position
  if (length === 0 || position<1 || position > length) {
    throw new Error(message.failure);
  }

  // UseCase: the first node in the list
  if (position === 1){
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length -= 1;

    return deletedNode;
  }

  // UseCase; any other node
  while (count<position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    currentNode = currentNode.next;
    count += 1;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length -= 1;

  return deletedNode;
};

SinglyList.prototype.reverse = function() {
  var currentNode = this.head,
      length = this._length,
      count = 1,
      previousNode = currentNode,
      nodeToChange = currentNode.next,
      nextNode = nodeToChange.next;

  while (count<length) {
    nodeToChange.next = previousNode;
    previousNode = nodeToChange;
    nodeToChange = nextNode;
    if (nodeToChange.next) {
      nextNode = nodeToChange.next;
    }
    count += 1;
  }

  this.head.next = null;
  this.head = nodeToChange;

  return this;
};

let ssl = new SinglyList();
let nodes = {};
nodes.one = ssl.add('one');
nodes.two = ssl.add('two');
nodes.three = ssl.add('three');
nodes.four = ssl.add('four');
nodes.five = ssl.add('five');
let reversed = ssl.reverse();
console.log('reversed: ',reversed);