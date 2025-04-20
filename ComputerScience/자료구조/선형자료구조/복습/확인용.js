//// Test: Node(), LinkedList()
let ll = new LinkedList();
console.log('💛 let ll = new LinkedList()');
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log('💛 ll.head = new Node(123)');
console.log('💛 ll.length++');
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log('💛 ll.head = new Node(456)');
console.log('💛 ll.length++');
console.log(ll);
console.log('\n\n ------------ \n\n');

//// Test : isEmpty(), append(), printNode(), size()
console.log('💛 ll.isEmpty() :', ll.isEmpty());
console.log('\n💛 ll.append() 전')
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.append(1)');
ll.append(1);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.append(10)');
ll.append(10);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.append(100)');
ll.append(100);
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : insert()
console.log('💛 ll.insert(value) 전');
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.insert(2)');
ll.insert(2);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.insert(20)');
ll.insert(20);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.insert(200)');
ll.insert(200);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.insert(222,1)');
ll.insert(222,1);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.insert(333,3)');
ll.insert(333,3);
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : remove()
console.log('💛 ll.remove(99999) 실행 결과');
console.log(ll.remove(99999));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.remove(1) 실행 결과');
console.log(ll.remove(1));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.remove(2) 실행 결과');
console.log(ll.remove(2));
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : removeAt()
console.log('💛 ll.removeAt(99999)');
console.log(ll.removeAt(99999));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.removeAt(4)');
console.log(ll.removeAt(4));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.removeAt(1)');
console.log(ll.removeAt(1));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.removeAt()');
console.log(ll.removeAt());
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : indexOf()
console.log('💛 ll.indexOf(99999)');
ll.printNode();
console.log('\nll.indexOf(99999) :',ll.indexOf(99999));

console.log('\n💛 ll.indexOf(10)');
ll.printNode();
console.log('\nll.indexOf(100) :',ll.indexOf(10));

console.log('\n💛 ll.indexOf(100)');
ll.printNode();
console.log('\nll.indexOf(100) :',ll.indexOf(100));
console.log('\n\n------------ \n\n');

//// Test : remove2()
console.log('💛 ll.remove2(99999)');
console.log(ll.remove2(99999));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.remove2(20)');
console.log(ll.remove2(20));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\n💛 ll.remove2(10) ');
console.log(ll.remove2(10));
ll.printNode();
console.log('\nll.size() :',ll.size());