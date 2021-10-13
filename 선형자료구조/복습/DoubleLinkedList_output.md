💛 let ll = new DoubleLinkedList() <br>
DoubleLinkedList { head: null, tail: null, length: 0 }

💛 node = new Node(123) <br>
💛 ll.tail = node <br>
💛 ll.length++ <br>
DoubleLinkedList {
  head: Node { data: 123, prev: null, next: null },
  tail: Node { data: 123, prev: null, next: null },
  length: 1
}

💛 ll.head = new Node(456) <br>
💛 ll.length++ <br>
DoubleLinkedList {
  head: <ref *1> Node {
    data: 123,
    prev: null,
    next: Node { data: 456, prev: [Circular *1], next: null }
  },
  tail: <ref *2> Node {
    data: 456,
    prev: <ref *1> Node { data: 123, prev: null, next: [Circular *2] },
    next: null
  },
  length: 2
}


 ------------ 


💛 ll.isEmpty() : false <br>
💛 ll.size() : 2 <br>


 ------------ 


💛 ll.printNode() <br>
head -> 123 -> 456 -> null

💛 ll.printNodeInverse() <br>
null <- 456 <- 123 <- head


 ------------ 



💛 ll.append() 전 <br>
head -> 123 -> 456 -> null
ll.size() : 2

💛 ll.append(1) <br>
head -> 123 -> 456 -> 1 -> null
ll.size() : 3

💛 ll.append(10) <br>
head -> 123 -> 456 -> 1 -> 10 -> null
ll.size() : 4

💛 ll.append(100) <br>
head -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 5

💛 ll.insert(value) 전 <br>
head -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 5

💛 ll.insert(2) <br>
head -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 6

💛 ll.insert(20) <br>
head -> 20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 7

💛 ll.insert(200) <br>
head -> 200 -> 20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 8

💛 ll.insert(222,1) <br>
head -> 200 -> 222 -> 20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 9

💛 ll.insert(4,3) <br>
head -> 200 -> 222 -> 20 -> 4 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 10


------------ 


💛 ll.remove(value) 전 <br>
head -> 200 -> 222 -> 20 -> 4 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 10

💛 ll.remove(99999) <br>
null
head -> 200 -> 222 -> 20 -> 4 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 10

💛 ll.remove(1) <br>
1
head -> 200 -> 222 -> 20 -> 4 -> 2 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 9

💛 ll.remove(2) <br>
2
head -> 200 -> 222 -> 20 -> 4 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 8


------------ 


💛 ll.removeAt(position) 전 <br>
head -> 200 -> 222 -> 20 -> 4 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 8
💛 ll.removeAt(99999) <br>
null
head -> 200 -> 222 -> 20 -> 4 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 8

💛 ll.removeAt(4) <br>
123
head -> 200 -> 222 -> 20 -> 4 -> 456 -> 10 -> 100 -> null
ll.size() : 7

💛 ll.removeAt(1) <br>
222
head -> 200 -> 20 -> 4 -> 456 -> 10 -> 100 -> null
ll.size() : 6

💛 ll.removeAt() <br>
200
head -> 20 -> 4 -> 456 -> 10 -> 100 -> null
ll.size() : 5


------------ 


💛 ll.remove2(99999) <br>
null
head -> 20 -> 4 -> 456 -> 10 -> 100 -> null
ll.size() : 5

💛 ll.remove2(222) <br>
20
head -> 4 -> 456 -> 10 -> 100 -> null
ll.size() : 4

💛 ll.remove2(10)  <br>
10
head -> 4 -> 456 -> 100 -> null
ll.size() : 3