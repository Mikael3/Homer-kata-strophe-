$("#start").click(function () {
    $('#sound')[0].play();

    var manger = 1;

    function start()

    console.log('start')

    {

//la methode animate déplace. Cette methode permet de déplacer l'objet. Ici c'est un donut que l'on déplace vers le bas.

    $('#donut').animate({ bottom: '100px' }, 2000, 'linear', function () {

console.log('donut')

//le donut se déplace aléatoirement de gauche à droite

        var donutX = Math.floor(Math.random() * 400);

        var donutY = 1000;

        $('#donut').css('bottom', donutY);

        $('#donut').css('left', donutX);

        manger = 1;

        
    });
    start();

    console.log('start')
    };
    
});



$(document).keydown(function(e){


//pour connaitre à quoi corresponde les touches il faut aller sur
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which2



    //ici c'est pour la flèche de droite

    if (e.which == 39)

    {

      homerX = parseInt($('#homer').css('left'));

      if (homerX < 490)

      $('#homer').css('left', homerX+30);

    }

    if (e.which == 37)

    //ici c'est pour laflèche de gauche

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

