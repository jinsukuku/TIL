# 📌 알고리즘 - 정렬(2)

<br>

### 👉 병합 정렬 
- 하나의 배열을 두 개의 균등한 크기로 분할하고 부분 정렬하며 이를 다시 합하면서 전체를 정렬해가는 알고리즘
- 평균 시간 복잡도 : O(n log n)
- 알고리즘 동작 방식
<img src = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif">


<br> 



### 👉 병합 정렬 구현 
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

let mergeSort = function (arr, compare) {
  if (arr.length === 1) return arr;

  let m = (arr.length / 2).toFixed(0);
  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];

  return arr;
};
```
- 

<br> 



### 👉 퀵 정렬 
- 특정 값을 기준으로 큰 숫자와 작은 숫자를 분할하여 정렬하는 알고리즘
- 평균 시간 복잡도 : O(n log n)
- 알고리즘 동작 방식
<img src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif">

<br> 



### 👉 퀵 정렬 구현 
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

let mergeSort = function (arr, compare) {
  if (arr.length === 1) return arr;

  let m = (arr.length / 2).toFixed(0);
  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];

  return arr;
};

let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
  let start = s;
  let pivot = arr[e];

  for (let i = s; i <= e; i++) {
    if (compare(pivot, arr[i])) {
      swap(arr, start, i);
      start++;
    }
  }
  swap(arr, start, e);

  if (start - 1 > s) quickSort(arr, compare, s, start - 1);
  if (start + 1 < e) quickSort(arr, compare, start + 1, e);
};
```
- 


<br> 



### 👉 성능 측정 
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

function benchmark(arr, callback) {
  let start = Date.now();

  callback(arr);

  return Date.now() - start;
}

let init_array = [];
let max = 30000;
for (let i = 0; i < max; i++) {
  init_array.push(Math.round(Math.random() * max));
}

let array = [...init_array];
console.log("bubbleSort_1: " + benchmark(array, bubbleSort_1) + "ms");
// console.log(array);
array = [...init_array];
console.log("bubbleSort_2: " + benchmark(array, bubbleSort_2) + "ms");
// console.log(array);
array = [...init_array];
console.log("bubbleSort_3: " + benchmark(array, bubbleSort_3) + "ms");
// console.log(array);
```
- 

