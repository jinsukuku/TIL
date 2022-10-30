// [참고] process.stdout.wirte() : 한 줄에 출력 

// Node() : 노드 
function Node(data){
    this.data = data;
    this.prev = null;
    this.next = null;
}

// DoubleLinkedList() : 이중 연결 리스트
function DoubleLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

//// Test: Node(), DoubleLinkedList()
let ll = new DoubleLinkedList();
console.log('💛 let ll = new DoubleLinkedList()');
console.log(ll);

node = new Node(123);
ll.head = node;
ll.tail = node;
ll.length++;
console.log('\n💛 node = new Node(123)');
console.log('💛 ll.tail = node');
console.log('💛 ll.length++');
console.log(ll);

node = new Node(456);
ll.tail.next = node;    // tail-node 의 next에 새로운 node 저장
node.prev = ll.tail;    // 현재 node의 prev에 tail-node 저장
ll.tail = node;         // tail-node에 현재 추가한 node 저장
ll.length++;
console.log('\n💛 ll.head = new Node(456)');
console.log('💛 ll.length++');
console.log(ll);
console.log('\n\n ------------ \n\n');

// size() : 연결리스트 내 노드 개수 확인 
DoubleLinkedList.prototype.size = function(){
    return this.length;
};

// isEmpty() : 연결리스트가 비었는지 확인
DoubleLinkedList.prototype.isEmpty = function(){
    return this.lenght === 0;
};

//// Test : isEmpty(), size()
console.log('💛 ll.isEmpty() :', ll.isEmpty());
console.log('💛 ll.size() :',ll.size());
console.log('\n\n ------------ \n\n');

// printNode() : 노드 출력 
DoubleLinkedList.prototype.printNode = function(){
    process.stdout.write('head -> ');
    for(let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} -> `);
    }
    console.log('null');
};

// printNodeInverse() : 노드 출력 
DoubleLinkedList.prototype.printNodeInverse = function(){
    process.stdout.write('null <- ');
    for(let node = this.tail; node != null; node = node.prev){
        process.stdout.write(`${node.data} <- `);
    }
    console.log('head');
};

//// Test : printNode(), printNodeInverse()
console.log('💛 ll.printNode()');
ll.printNode();

console.log('\n💛 ll.printNodeInverse()');
ll.printNodeInverse();
console.log('\n\n ------------ \n\n');


// append() : 연결리스트 가장 마지막에 노드 추가
DoubleLinkedList.prototype.append = function(value){
    let node = new Node(value);

    if(this.head == null){
        // 연결리스트에 노드를 처음 추가하는 경우 
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    this.length++;
};

// insert() : 입력한 position에 노드 추가, position 입력하지 않으면 가장 첫번째 노드로 저장 
DoubleLinkedList.prototype.insert = function(value, position = 0){
    // 연결리스트의 범위를 벗어난 경우 return false
    if(position < 0 || position > this.length ) return false;

    let node = new Node(value);
    let current = this.head;
    let index = 0;
    let prev;

    // position == 0
    if(position == 0){
        if(this.head == null){
            // 연결리스트에 노드를 처음 추가하는 경우 
            this.head = node;
            this.tail = node;
        }else{
            // this.head로 node를 저장하는 경우 
            node.next = current;
            current = node;
            this.head = node;
        }
    }else if(position === this.length){
        // this.tail로 node를 저장하는 경우
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = current;
    }else{
        // 그 외의 경우
        let prev;
        while(index < position){
            prev = current;
            current = current.next;
            index++;
        }

        // next 설정 
        node.next = current;
        prev.next = node;

        // prev 설정
        current.prev = node;
        node.prev = prev;
    }
    this.length++;
    return true;
};


//// Test : append(), insert()
console.log('\n💛 ll.append() 전');
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.append(1)');
ll.append(1);
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.append(10)');
ll.append(10);
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.append(100)');
ll.append(100);
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.insert(value) 전');
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.insert(2)');
ll.insert(2);
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.insert(20)');
ll.insert(20);
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.insert(200)');
ll.insert(200);
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.insert(222,1)');
ll.insert(222,1);
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.insert(4,3)');
ll.insert(4,3);
ll.printNode();
console.log('ll.size() :',ll.size());
console.log('\n\n------------ \n\n');

// remove() : value를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function(value){
    let current = this.head;
    let prev = current;

    while(current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }

    // value를 찾지 못한 경우 null 반환
    if(current.data != value) return null;

    if(this.head == current){
        // value가 this.head의 값과 같은 경우
        this.head = current.next;
        if(this.length === 1) this.tail = null; // 이건 null이 아니라 current.next가 되어야하지 않나?
        else this.head.prev = null;
    }else if(this.tail == current){
        // value가 this.tail의 값과 같은 경우
        this.tail = current.prev;
        this.tail.next = null;
    }else{
        prev.next = current.next;
        current.next.prev = prev;
    }

    this.length--;
    return current.data;
}

//// Test : remove()
console.log('💛 ll.remove(value) 전');
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.remove(99999)');
console.log(ll.remove(99999));
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.remove(1)');
console.log(ll.remove(1));
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.remove(2)');
console.log(ll.remove(2));
ll.printNode();
console.log('ll.size() :',ll.size());
console.log('\n\n------------ \n\n');

// removeAt() : index를 사용해 노드를 찾아 삭제
DoubleLinkedList.prototype.removeAt = function (position = 0) {
    if (position < 0 || position >= this.length) return null;
  
    let current = this.head;
    let index = 0;
    let prev = 0
  
    if (position === 0) {
      this.head = current.next;
      if (this.length === 1) this.tail = null;
      else this.head.prev = null;
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }   
  
      prev.next = current.next;
      current.next.prev = prev;
    }
  
    this.length--;
    return current.data;
  };
  

//// Test : removeAt()
console.log('💛 ll.removeAt(position) 전');
ll.printNode();
console.log('ll.size() :',ll.size());
console.log('💛 ll.removeAt(99999)');
console.log(ll.removeAt(99999));
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.removeAt(4)');
console.log(ll.removeAt(4));
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.removeAt(1)');
console.log(ll.removeAt(1));
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.removeAt()');
console.log(ll.removeAt());
ll.printNode();
console.log('ll.size() :',ll.size());
console.log('\n\n------------ \n\n');

// indexof() : value를 사용해 노드의 index를 찾아 반환 / value에 해당하는 노드가 없는 경우 -1 반환 
DoubleLinkedList.prototype.indexOf = function(value) {
    let current = this.head;
    let index = 0;

    while (current != null) {
        if(current.data === value) return index;

        current = current.next;
        index++;
    }
    
    return -1;
  };


// remove2() : indexOf와 removeAt을 사용한 노드 삭제
DoubleLinkedList.prototype.remove2 = function(value){
    let index = this.indexOf(value);
    return this.removeAt(index);
}

//// Test : remove2()
console.log('💛 ll.remove2(99999)');
console.log(ll.remove2(99999));
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.remove2(222)');
console.log(ll.remove2(20));
ll.printNode();
console.log('ll.size() :',ll.size());

console.log('\n💛 ll.remove2(10) ');
console.log(ll.remove2(10));
ll.printNode();
console.log('ll.size() :',ll.size());