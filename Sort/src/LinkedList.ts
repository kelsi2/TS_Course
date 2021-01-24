import {Sorter} from './Sorter'

class Node {
  // Reference to the value of the next node in the list 
  next: Node | null = null

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // First node in the list, if null the list is empty
  head: Node | null = null

  // Add a new node to list
  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head

    // If there is a next value in the list, update the reference to refer to the next node until the end of the list is reached (next is null)
    while (tail.next) {
      tail = tail.next
    }

    // Add a new node at the end of the list
    tail.next = node
  }

  get length(): number {
    if (!this.head) {
      return 0
    }

    let length = 1
    let node = this.head

    while (node.next) {
      length++
      node = node.next
    }

    return length
  }

  // Retrieve the node at a specific index (like square bracket accessor notation)
  at(index: number): Node {
    // The linked list needs to have elements in it, it can't be null
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    let counter = 0
    let node: Node | null = this.head

    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }

    throw new Error ('Index out of bounds')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const leftElement = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftElement
  }

  print(): void {
    if (!this.head) {
      return
    }

    let node: Node | null = this.head

    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}