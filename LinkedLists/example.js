
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
    insert(value, index) {
        if(index < 0 || index > this.size){
            console.log('invalid')
            return 
        }
        // when index is equal to 0
        if(index === 0){
            this.prepend(value)
        } 
        // insert at a given index, we need a reference to the previous node - a temporary pointer
        else {
            const node = new Node(value)
            let prev = this.head;
            for (let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    // remove from a given index
    removeFrom(index) {
        if(index < 0 || index > this.size){
            console.log('invalid')
            return null
        }
         // when index is equal to 0
        //  create a variable as a reference to the node to be removed
        let removeNode 
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i=0; i<index - 1; i++){
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    // removing a value from a list

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }
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

list.insert(10,0)
list.print()

list.insert(20,0)
list.print()

list.insert(30,1)
list.print()

list.insert(40,2)
list.print()

list.insert(30,-1)
list.print()
console.log(list.getSize())
console.log(list.removeFrom(1))
list.print()