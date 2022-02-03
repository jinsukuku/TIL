
function Student() {
    this.name = "짱구";
    return {
        name: "유리",
        // 일반 함수의 this : 생성자 함수의 this이므로, 객체 자기 자신을 의미
        print: function(){
            console.log(this.name + "입니다");
        } 
    }
}

const student = new Student();
student.print();    // 유리입니다