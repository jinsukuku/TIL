💛 let ll = new LinkedList()
LinkedList { head: null, length: 0 }

💛 ll.head = new Node(123), ll.length++
LinkedList { head: Node { data: 123, next: null }, length: 1 }

💛 ll.head = new Node(456), ll.length++
LinkedList {
  head: Node { data: 123, next: Node { data: 456, next: null } },
  length: 2
}


------------ 


💛 ll.isEmpty() : false

💛 ll.append() 전
123 -> 456 -> null
ll.size() : 2

💛 ll.append(1)
123 -> 456 -> 1 -> null
ll.size() : 3

💛 ll.append(10)
123 -> 456 -> 1 -> 10 -> null
ll.size() : 4

💛 ll.append(100)
123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 5


------------ 


💛 ll.insert(value) 전
123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 5

💛 ll.insert(2)
2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 6

💛 ll.insert(20)
20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 7

💛 ll.insert(200)
200 -> 20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 8

💛 ll.insert(222,1)
200 -> 222 -> 20 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 9

💛 ll.insert(333,3)
200 -> 222 -> 20 -> 333 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 10


------------ 


💛 ll.remove(99999) 실행 결과
null
200 -> 222 -> 20 -> 333 -> 2 -> 123 -> 456 -> 1 -> 10 -> 100 -> null
ll.size() : 10

💛 ll.remove(1) 실행 결과
1
200 -> 222 -> 20 -> 333 -> 2 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 9

💛 ll.remove(2) 실행 결과
2
200 -> 222 -> 20 -> 333 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 8


------------ 


💛 ll.removeAt(99999)
null
200 -> 222 -> 20 -> 333 -> 123 -> 456 -> 10 -> 100 -> null
ll.size() : 8

💛 ll.removeAt(4)
123
200 -> 222 -> 20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 7

💛 ll.removeAt(1)
222
200 -> 20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 6

💛 ll.removeAt()
200
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 5


------------ 


💛 ll.indexOf(99999)
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.indexOf(99999) : -1

💛 ll.indexOf(10)
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.indexOf(100) : 3

💛 ll.indexOf(100)
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.indexOf(100) : 4


------------ 


💛 ll.remove2(99999)
null
20 -> 333 -> 456 -> 10 -> 100 -> null
ll.size() : 5

💛 ll.remove2(20)
20
333 -> 456 -> 10 -> 100 -> null
ll.size() : 4

💛 ll.remove2(10) 
10
333 -> 456 -> 100 -> null
ll.size() : 3