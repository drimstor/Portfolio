$(document).ready(function() {
   $('.header__burger').click(function(event) {
     $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('a.scrollto').on('click', function(){
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock');
    })

    $('a.scrollto').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $(elementClick).offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
         scrollTop: destination
      }, 800);
      return false;
    })


});



// const windowScrollTop = window.pageYOffset;
// console.log(windowScrollTop);


// const about = document.querySelector('#about');
// const getItemTopCoord = about.getBoundingClientRect().top;

// const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

// console.log(getItemTopCoord);
// console.log(getItemTopDocumentCoord);

