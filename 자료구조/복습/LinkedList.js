// [참고] process.sdtout.wirte() : 한 줄에 출력 

// Node() : 노드 
function Node(data){
    this.data = data;
    this.next = null;
}

// LinkedList() : 연결리스트 
function LinkedList(){
    this.head = null;
    this.length = 0;
}

//// Test: Node(), LinkedList()
let ll = new LinkedList();
console.log('💛 let ll = new LinkedList()');
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log('\n💛 ll.head = new Node(123), ll.length++');
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log('\n💛 ll.head = new Node(456), ll.length++');
console.log(ll);
console.log('\n\n------------ \n\n');

// size() : 연결리스트 내 노드 개수 확인 
LinkedList.prototype.size = function(){
    return this.length;
};

// isEmpty() : 연결리스트가 비었는지 확인 / 비었다면 true, 아니라면 false 반환
LinkedList.prototype.isEmpty = function(){
    return this.length === 0
};

// printNode() : 노드 출력 
LinkedList.prototype.printNode = function(){
    for(let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} -> `);
    }
    process.stdout.write('null');
};

// append() : 연결리스트 가장 마지막에 노드 추가
LinkedList.prototype.append = function(value){
    let node = new Node(value);
    let current = this.head;

    if(this.head == null){
        this.head = node;
    }else{
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
    }

    this.length++;
};

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

// insert() : 입력한 position에 노드 추가 / 실패 시 false반환, 성공 시 true 반환
LinkedList.prototype.insert = function(value, position = 0){
    let node = new Node(value);

    if(position < 0 || position > this.length) return false;
    
    let index = 0;
    let current = this.head;
    let prev;
    
    if(position == 0){
        node.next = current;
        this.head = node;
    }else{
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;
    }

    this.length++;
    return true;
};

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

// remove() : value를 찾아 노드 삭제 / 삭제한 경우 삭제한 value 반환, 실패한 경우 null 반환 
LinkedList.prototype.remove = function(value){
    let current = this.head;
    let prev = current; // value가 head인 경우를 대비하기위해, prev에 current를 초기화

    while(current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }

    // value를 찾지 못하고, 반복이 끝난 경우
    if(current.data != value) return null;

    // vlaue를 찾은 경우 
    //// 1. head인 경우
    if(current === this.head) {
        this.head = current.next;
    }else{
        prev.next = current.next;
    }

    this.length--;
    return current.data;
};

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

// removeAt() : index를 사용해 노드를 찾아 삭제 / 삭제한 경우 삭제한 value 반환, 실패한 경우 null 반환
LinkedList.prototype.removeAt = function(position = 0){
    if(position < 0 || position >= this.length) return null;

    let index = 0
    let current = this.head;
    let prev;

    if(position == 0){
        this.head = current.next;
    }else{
        while(index != position){
            prev = current;
            current = prev.next;
            index++;
        }
    
        prev.next = current.next;
    }
    this.length--;
    return current.data;
};

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

// indexof() : value를 사용해 노드의 index를 찾아 반환 / value에 해당하는 노드가 없는 경우 -1 반환 
LinkedList.prototype.indexOf = function(value){
    let index = 0;
    let current = this.head;

    while(current != null){
        if(current.data == value) return index;

        current = current.next;
        index++;
    }

    return -1;
};

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

// remove2() : indexOf와 removeAt을 사용한 노드 삭제
LinkedList.prototype.remove2 = function(value){
    let index = this.indexOf(value);
    return this.removeAt(index);
}

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



