$(document).ready(function() {
  $("form#userinfo").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const favfood = $("select#favfood").val();

  if (gender) {
    let celeb = "Mary"; 
    if (gender === 'male' && age >= 18 && favfood && 'burger') {
      celeb === "Mary";
    }

      $("#match").text(celeb);
      $("#celeb").show();

    } else {
        celeb = "Brad";
        alert("Not Mary");
        $("#match").text(celeb);
        $("#celeb").show();
    }

    event.preventDefault();
  });
});