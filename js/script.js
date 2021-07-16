$(document).ready(function() {
   $('.header__burger').click(function(event) {
     $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('li').on('click', function(){
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock');
    })
});



// const windowScrollTop = window.pageYOffset;
// console.log(windowScrollTop);


// const about = document.querySelector('#about');
// const getItemTopCoord = about.getBoundingClientRect().top;

// const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

// console.log(getItemTopCoord);
// console.log(getItemTopDocumentCoord);

