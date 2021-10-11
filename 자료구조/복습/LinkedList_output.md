💛 let ll = new LinkedList() <br>
LinkedList { head: null, length: 0 }

💛 ll.head = new Node(123), ll.length++ <br>
LinkedList { head: Node { data: 123, next: null }, length: 1 }

💛 ll.head = new Node(456), ll.length++ <br>
LinkedList {
  head: Node { data: 123, next: Node { data: 456, next: null } },
  length: 2
}


------------ 


💛 ll.isEmpty() : false

💛 ll.append() 전 <br>
123 -> 456 -> null
ll.size() : 2

💛 ll.append(1) <br>
123 -> 456 -> 1 -> null
ll.size() : 3

💛 ll.append(10) <br>
123 -> 456 -> 1 -> 10 -> null
ll.size() : 4

💛 ll.append(100) <br>
123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 5


------------ 


💛 ll.insert(value) 전 <br>
123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 5

💛 ll.insert(2) <br>
2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 6

💛 ll.insert(20) <br>
20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 7

💛 ll.insert(200) <br>
200 -> 20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 8

💛 ll.insert(222,1) <br>
200 -> 222 -> 20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 9

💛 ll.insert(333,3) <br>
200 -> 222 -> 20 -> 333 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 10


------------ 


💛 ll.remove(99999) 실행 결과 <br>
null
200 -> 222 -> 20 -> 333 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 10

💛 ll.remove(1) 실행 결과 <br>
1
200 -> 222 -> 20 -> 333 -> 2 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 9

💛 ll.remove(2) 실행 결과 <br>
2
200 -> 222 -> 20 -> 333 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 8


------------ 


💛 ll.removeAt(99999) <br>
null
200 -> 222 -> 20 -> 333 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 8

💛 ll.removeAt(4) <br>
123
200 -> 222 -> 20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 7

💛 ll.removeAt(1) <br>
222
200 -> 20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 6

💛 ll.removeAt() <br>
200
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 5


------------ 


💛 ll.indexOf(99999) <br>
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.indexOf(99999) : -1

💛 ll.indexOf(10) <br>
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.indexOf(100) : 3

💛 ll.indexOf(100) <br>
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.indexOf(100) : 4


------------ 


💛 ll.remove2(99999) <br>
null
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 5

💛 ll.remove2(20) <br>
20
333 -> 456 -> 10 -> 100 -> null
ll.size() : 4

💛 ll.remove2(10)  <br>
10
333 -> 456 -> 100 -> null
ll.size() : 3