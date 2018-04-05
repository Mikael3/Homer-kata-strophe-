
var bienvenue = new Audio('son/woohoo.mp3');



$("#test").click(function () {
    welcome.play();

});


$("#start").click(function () {
    $('#sound')[0].play();

    var manger = 1;



    $('#donut').animate({ bottom: '100px' }, 2000, 'linear', function () {


        var donutX = Math.floor(Math.random() * 200)+250;

        var donutY = 1000;

        $('#donut').css('bottom', donutY);

        $('#donut').css('left', donutX);

        manger = 1;


    });


});

$(document).keydown(function(e){



    if (e.which == 39)

    {

      homerX = parseInt($('#homer').css('left'));

      if (homerX < 490)

      $('#homer').css('left', homerX+30);

    }

    if (e.which == 37)

    {

      homerX = parseInt($('#homer').css('left'));

      if (homerX > 10)

        $('#homer').css('left', homerX-30);

    }

});





//<input type=text id=champTexte onkeydown=if (event.keyCode == 13) document.getElementById('bouton').click()/>
//<input type=button id=bouton value=Valider onclick=maFonction(); />
//Vous pouvez également utiliser la bibliothèque jQuery afin de raccourcir le code grâce au sélecteur :
//$(#champTexte).keydown(function(event){
//if(event.keyCode == 13){
//$(#bouton).click();
//}
//});

