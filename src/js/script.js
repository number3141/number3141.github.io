document.addEventListener('DOMContentLoaded', function () {

  // Анимация кнопки

  let learnBtn = document.querySelector('.learn'),
  quality = document.querySelector('.quality');

  let topBlock = quality.getBoundingClientRect();
  let ans = topBlock.top - 80;

  console.log(topBlock.top);

  learnBtn.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'white';
    event.target.style.marginLeft = 50 + '%';
    event.target.style.color = '#000';

    let ind = 0;

    function scrollWindow(){
      ind += 6;
      console.log(ind);
      window.scrollTo(0, ind);
      if(ind >= ans){
        clearTimeout(id);
      }
    }
    
    let id = setInterval(scrollWindow, 1);


    setTimeout(function show() {
      event.target.style.backgroundColor = 'rgba(0, 0, 0, .1)';
      event.target.style.marginLeft = 0 + '%';
      event.target.style.color = '#fff';
    }, 700);
  });

});