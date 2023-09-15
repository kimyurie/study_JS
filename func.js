// Q1. 함수에 분과 초를 차례로 파라미터로 입력하면
// ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
// (1초 == 1000ms 입니다)
function ms(a, b){
    var result = (a * 60 + b) * 1000;
    return result;
}

console.log(ms(1, 30));
console.log(ms(2, 10));

// Q2. 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.

function disc(a,b){
    if(b == true){
        return (a - a * 10/100 - 1.5).toFixed(1); // toFixe는 소수점 반올림해줌
    }else if(b == false){
        return (a - a * 10/100).toFixed(1);
    }
}

// function 함수(a, b){
//     var result = a * 0.9;
//     if (b == true) {
//       result = result - 1.5;
//     }
//     return result
//   }

console.log(disc(70,false));
console.log(disc(10, true));
console.log(disc(10.3, true));

