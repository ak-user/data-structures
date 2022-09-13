import Stack from "./stack.js";

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