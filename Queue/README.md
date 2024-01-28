- The queue data structure is a sequential collection of elements that follows the principle of first in first out (FIFO). example, the queue at the ATM Machine 
- people enter the queue at onne end (REAR/TAIL) and leave the queue from the other end (FRONT/HEAD)
- Like the stack, it is an abstract data type definded by behaviour rather than a mathematical model

It supports two main operations;
1. Enqueue - adds element to the rear/tail of the collection
2. Dequeue - removes element from the front/head of the collection
peek() - get value of the first elmemnt at the front without removing it
print() - visualize the elements
 
# Circular queue
- the size of the queue is fixed and a single block od memory is used as if the first element is connnected to the last elements (i mean circles meet)
- Also referred to as a circular buffer or ring buffer and folllows the FIFO principle 
- it will reuse the empty block created using dequeue

usuage
clock
streaming data
traffic lights
