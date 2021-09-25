// 02-7. Deep Copy
let student = {
    name : "짱구",
    age : 5,
    sizes : {
        height : 105.9,
        weight : 22.9
    }
};

// JSON.stringify() : object를 string으로 변환
// JSON.parse() : string을 object로 변환
let student_copy = JSON.parse(JSON.stringify(student));
student_copy.sizes.height = 110.4;
student_copy.sizes.weight = 24.0;

console.log(student);
console.log(student_copy);

