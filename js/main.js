


//on alimente le template grace a cette boucle on parcours le tableau de characters 
// on utilise mustaches pour generer le template on envoie donc les values au html pour
// alimenter le templating
for (i = 0; i < characters.length; i++) {
  //VARIABLES FOR BEGINNER XD
  // ici on utilise des let pour quil sois effectif uniquement entre les incolades
  // si on utilise des var il seront utilisable dans tout la fonction
  // on peut egalement initialiser les variable en haut du code pour quelle sois utilisable dans le tout le code 
  // il est donc preferable d'utiliser un let dans ce genre de situtation
    let tpl = $("#template").html();
    let renderedHtml = Mustache.render(tpl, characters[i]);
    // on rajoute le rendererdHtml dans la classe row pour chaque iteration
    $(".row").append(renderedHtml);
}

// capture l'evenement click sur la class boutonRetourHautPage
// permettent de retourner en haut de la page (a l'aide du chevron)
$(".boutonRetourHautPage").click(function(){

    $(this).animate({})
})

// sert a faire disparaitre ou apparaitre le chevron pour remonter 
// en haut de la page selon la distance de scroll effectuer
$(window).scroll(function() {

    if ($(this).scrollTop()>300)
     {
        $('.boutonRetourHautPage').fadeIn();
     }
    else
     {
      $('.boutonRetourHautPage').fadeOut();
     }
 });


