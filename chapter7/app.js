// this 
  //  $(function(){
    // $('.bg1').on('click', function(){
    //   $('.bg1').slideUp();
    // });

    // $('.bg2').on('click', function(){
    //   $('.bg2').slideUp();
    // });

    // $('.bg3').on('click', function(){
    //   $('.bg3').slideUp();
    // });

    // $('.bg4').on('click', function(){
    //   $('.bg4').slideUp();
    // });

    // thisの利用(イベントが発生した要素)
    // 便利な反面、何をクリックしたときに動作するのか判別難

  //   $('.box1').on('click', function(){
  //     $(this).slideUp();
  //   });
  // });

// children
  $(function(){
    $('button').on('click', function(){
      $('ul').children().css('color', 'red');
    });
  });
