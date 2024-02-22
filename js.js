const output =document.getElementById('counter');
// console.log(typeof output);
// const paresOutput = parseInt(output);
const btn1 = document.getElementById('plusbtn');

let sum = 0;


function myFunc(value) {
    sum = sum + value ;  
    // return sum;
    output.innerText =sum
    if (sum >= 10) {
        // alert('count finish')
        btn1.setAttribute('disabled',true)
    }else{
        btn1.removeAttribute('disabled',false)
    }




  
    if (sum <= 0) {
      // alert('invalid')
      btn2.setAttribute('disabled', true)
      
  }else{
      btn2.removeAttribute('disabled',false)
      
  }
}
btn1.addEventListener('click', () => {
    // console.log("clicked");
    myFunc(1)
    btn1.style.backgroundColor="green"
  

});
const btn2 = document.getElementById('minusBtn')
btn2.addEventListener('click', () => {
    btn2.style.backgroundColor="red"
    myFunc(-1)
});


