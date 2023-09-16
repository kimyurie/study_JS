// - 버튼0 누르면
// - 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기
// - 버튼0에 orange 클래스명 부착
// - 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기
// - 박스0에 show 클래스명 부착

// var 버튼 = $('.tab-button'); 이런식으로 셀렉터 변수에 넣어써도 됌!

// $('.tab-button').eq(0).on('click', function(){
//     // document.querySelectorAll('.tab-button')[0].classList.remove('orange');
//     // document.querySelectorAll('.tab-button')[1].classList.remove('orange');
//     // document.querySelectorAll('.tab-button')[2].classList.remove('orange');
//     $('.tab-button').removeClass('orange'); // 위 세줄과 동일
    
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// // 버튼 1도 마찬가지
// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// // 버튼2도
// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// var 로 하면 안됌 
// for (let i = 0; i < 3; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     });
// }

// ** 이벤트 버블링으로 이벤트 리스너 줄일 수 있음 !!
$('.list').click(function(){
    // // 지금 누른게 버튼 0이면 탭열기(0)
    // if (e.target == document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0)
    // }
    // // 지금 누른게 버튼 1이면 탭열기(1)
    // if (e.target == document.querySelectorAll('.tab-button')[1]){
    //     탭열기(1)
    // }
    // // 지금 누른게 버튼 2이면 탭열기(2)
    // if (e.target == document.querySelectorAll('.tab-button')[2]){
    //     탭열기(2)
    // }

    // ** 위코드 dataset 활용해 줄이기
    탭열기(e.target.dataset.id)

})

function 탭열기(숫자){
    // ** 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘된다
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}


// Q. 지금 탭이 3개면 잘 동작하지만 4개 5개가 되면 잘 동작하지 않습니다.
// 탭이 4개나 5개로 바뀌어도 알아서 잘 동작하는 코드가 되려면
//  현재 코드를 어떻게 수정하면 될까요? 
for (let i = 0; i < $('.tab-button').length; i++){
    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}


