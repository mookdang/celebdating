$(document).ready(function() {
  $("form#userinfo").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const favfood = $("select#favfood").val();

    if (gender === 'male' && age >= 18 && favfood && 'burger') {
      celeb = "Mary";
    } else {
        celeb = "Brad";
    }

    $("#match").text(celeb);
    $("#celeb").show();

    event.preventDefault();
  });
});