import fetch from "./node-fetch.js";

const fetchUrl = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=k7%2BDD0iQfVjEKjvd2QTf4qDTo0ix9eqTGgDM9j8rVhNWWmPXxay50NjXBTkV6KNuLhZxd6ggJp9kKCDbxaZJAA%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0"
const miseApiUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
const serviceKey = "k7+DD0iQfVjEKjvd2QTf4qDTo0ix9eqTGgDM9j8rVhNWWmPXxay50NjXBTkV6KNuLhZxd6ggJp9kKCDbxaZJAA==";
const returnType = "json";
const numOfRows = 100;
const pageNo = 1;
const sidoName = "서울";
const ver = 1.0;

// **OpenAPI로 확인하기
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log(response)
);  

fetch(`${miseApiUrl}?serviceKey=${serviceKey}&returnType=${returnType}&numOfRows=${numOfRows}&pageNo=${pageNo}&pageNo=${pageNo}&sidoName=${sidoName}&ver=${ver}`)
    .then((response) => console.log(response));
