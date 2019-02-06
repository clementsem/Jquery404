$(document).ready(function() {

  $('#gen').click(function() {
    // infos récupérées
    var firstname = $('#firstName').val();
    var secondname = $('#secondName').val();
    var birthdate = $('#birthDate').val();
    var birthplace = $('#birthPlace').val();
    var job = $('#job').val();
    var workplace = $('#workPlace').val();
    // affiche les infos, " " pour les espaces
    $('#displayInfo').text(firstname + " " + secondname + ',' + " " + 'né le ' + birthdate + " " + 'à ' + birthplace + " " + 'actuellement ' + job + " " + 'à ' + workplace);
  });
});
