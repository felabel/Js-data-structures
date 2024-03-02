
// define node class
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// define the linked list
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
    // adding a new node
    // O(1)
    prepend(value) {
        const node = new Node(value);
    // insert at the start, if the list is empty, we have to make the head point to the newly created node
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    // if the list isn't empty - add at the start

    }

    // how to add a node at the end
    // step 1 create a new node, containing the value and the next pointer to null
    // O(n)
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    
    // print the content of the node
    print() {
        if(this.isEmpty()){
            console.log("List is empty")
        } else {
            let curr = this.head
            let listValues = '';
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next;
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.print()
list.append(10)
list.print()

list.append(20)
list.append(30)
list.print()