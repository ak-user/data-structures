import Stack from "./stack.js";
import Queue from "./queue.js";
import SinglyLinkedList from "./simplyLinkedList.js";
import DoublyLinkedList from "./doublyLinkedList.js";

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)

stack.peek()

stack.push(300)

console.log(stack.print())

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())

stack.size()

stack.isEmpty()

const queue = new Queue();

queue.isEmpty()

queue.enqueue(100);
queue.enqueue(200);

queue.peek();

queue.dequeue();


const simpleLinkedList = new SinglyLinkedList();

simpleLinkedList.push(100);
simpleLinkedList.push(201);
console.log(simpleLinkedList.length, 'SinglyLinkedList')

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("Harry")
doublyLinkedList.push("Ron")
doublyLinkedList.push("Hermione")

doublyLinkedList.remove(2);
console.log(doublyLinkedList.length, 'DoublyLinkedList');