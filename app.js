$("#start").click(function () {
    $('#sound')[0].play();


    var manger = 1;

    function fall()

    console.log('fall')

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
        fall();

        console.log('fall')
    };

});



$(document).keydown(function (e) {


    //pour connaitre à quoi corresponde les touches il faut aller sur
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which2



    //ici c'est pour la flèche de droite

    if (e.which == 39) {

        homerX = parseInt($('#homer').css('left'));

        if (homerX < 490)

            $('#homer').css('left', homerX + 30);

    }

    if (e.which == 37)

    //ici c'est pour laflèche de gauche

    {

        homerX = parseInt($('#homer').css('left'));

        if (homerX > 10)

            $('#homer').css('left', homerX - 30);

    }

    if (e.which == 13) {
        $("#start").click();

    }

});


//if (object1.x < object2.x + object2.width && object1.x + object1.width > object2.x &&
  //  object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
    // The objects are touching
//}


function eat()
{
    homerX = parseInt($('#homer').css('left'));
    donutX = parseInt($('#donut').css('left'));
    homerY = 10;
    donutY = parseInt($('#donut').css('bottom'));

    if (homer.x<donut.x + donut.width66 && homer.x + homer.width66 > donut.x &&
    homer.y < donut.y + donut.height15 && homer.y + homer.height15 > donut.y){

        $('#info').text(manger);

        consol.log('text')

        manger = 0;
    }
}

