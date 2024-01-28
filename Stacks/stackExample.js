class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    // Add an element to top of stck
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

console.log(stack)
