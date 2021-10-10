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

// size() : 연결리스트 내 노드 개수 확인 
LinkedList.prototype.size = function(){
    return this.length;
}

// isEmpty() : 연결리스트가 비었는지 확인
LinkedList.prototype.isEmpty = function(){
    return this.length === 0;
}

// printNode() : 노드 출력 
LinkedList.prototype.printNode = function(){
    for(let node = this.head; node != null; node = node.next){
        process.stout.write(`node.data -> `);  // 개행없이 한 줄 출력 가능 
    }
    console.log('null');
}

// append() : 연결리스트 가장 마지막에 노드 추가
LinkedList.prototype.append = function(value){
    let node = new Node(value);
    let current = this.head;

    if(this.head === null){
        // 만약 head가 없다면 현재의 노드를 head로
        this.head = node;
    }else{
        while(current.next != null){
            // 현재 노드의 포인터가 null을 가르키고 있다면 마지막 노드를 판단할 수 있다
            current = current.next
        }
        current.next = node;
    }

    // 노드가 추가되었으니 연결리스트 길이 업데이트 
    this.length++;
}

// insert() : 입력한 position에 노드 추가
LinkedList.prototype.insert = function(value, positoin = 0){
    if(positoin < 0 || positoin > this.length){
        // 입력받은 position이 0보다 작은 경우는 유효하지 않으므로 false반환
        // 입력받은 position이 연결리스트의 크기 범위를 벗어난 경우 false 반환
        return false;
    }

    let node = new Node(value);         // insert할 value
    let current = this.head;
    let index = 0;
    let prev;


    if(positoin == 0){
        node.next = current;
        this,head = node;
    } else {
        while(index++ < positoin){
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;
    }

    this.length++;
    return true;
}