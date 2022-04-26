let c=0; // 이미지위치
let slide = document.querySelector('#sl'); //화면부분
let imgs = document.querySelectorAll('.sli'); //이미지 싹선택
let ic = imgs.length; //이미지갯수
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');


function mov(a){
  slide.style.left = -a*1500+'px';
  c=a;
}

prev.addEventListener('click',function(){
  if(c !==0) mov(c-1);
});

next.addEventListener('click',function(){
  if(c !==ic-1) mov(c+1);
});




/*  가격추가  */

let price;
let result = 0;
//  document.getElementById("total").addEventListener('click',sum);

// 선택한 상품의 가격을 추가한다.
function add(price) {
  result += parseInt(price);
  document.querySelector("#total").innerText = result + "원";
}

// 선택한 상품의 가격을 차감한다.
function sub(price) {
  result -= parseInt(price);
  document.querySelector("#total").innerText = result + "원";
}