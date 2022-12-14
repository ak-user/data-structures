import Stack from "./stack.js";
import Queue from "./queue.js";

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
