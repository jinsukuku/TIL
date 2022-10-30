# 📌 알고리즘 - 정렬(1)

<br>

### 👉 정렬(Sorting)
- 배열 내 원소들을 번호순이나 사전 순서와 같이 일정 순서대로 열거하는 알고리즘
- 대표 정렬 알고리즘 별 구현 함수 
    - 거품 정렬(Bubble Sort) : `bubbleSort_1()`, `bubbleSort_2()`, `bubbleSort_3()`, `bubbleSort()`
    - 선택 정렬(Selection Sort) : `selectionSort()`
    - 삽입 정렬(Insertion Sort) : `insertionSort()`
    - 병합 정렬(Merge Sort) : `mergeSort()`
    - 퀵 정렬(Quick Sort) : `quickSort()`
    - 공통 함수 : `swap()`, `ascending()`, `descending()`

<br> 


### 👉 거품 정렬(Bubble Sort)

- 서로 인접한 두 원소를 비교하며 정렬하는 알고리즘
- 평균 시간 복잡도 : O(n^2)
- 알고리즘 동작 방식

<img src = "https://t1.daumcdn.net/cfile/tistory/2248E53E576F5A8819">

- 참고 : https://ko.wikipedia.org/wiki/거품_정렬



<br> 

### 👉 거품 정렬(Bubble Sort) 구현 (1)
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};
```




<br> 

### 👉 거품 정렬(Bubble Sort) 구현 (2)
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};
```




<br> 

### 👉 선택 정렬(Selection Sort) 
- 최소값을 찾아 데이터 영역의 가장 앞으로 이동하는 방식을 반복해 전체 영역을 정렬한다
- 평균 시간 복잡도 : O(n^2)
- 알고리즘 동작 방식

<img src = "https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif">

- 참고 : https://ko.wikipedia.org/wiki/선택_정렬


<br> 

### 👉 선택 정렬(Selection Sort) 구현
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};
```



<br> 

### 👉 삽입 정렬(Selection Sort)
- 이미 정렬된 데이터 영역과 비교하며, 자신의 위치를 찾아 요소를 삽입하여 정렬하는 알고리즘
- 평균 시간 복잡도 : O(n^2)
- 알고리즘 동작 방식 
<img src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif">

- 참고 : https://ko.wikipedia.org/wiki/삽입_정렬




<br> 

### 👉 삽입 정렬(Selection Sort) 구현
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (compare(tmp, arr[j])) {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
};
```

