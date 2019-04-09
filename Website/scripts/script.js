$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $("#confirm").click(function(){
    var naam = $("#name").val();
    var adres = $("#adres").val();
    console.log(naam);
    console.log(adres);
    if(!/^\D*$/.test(naam)){
      alert("Naam is niet correct");
    }
    if(!/^[a-zA-Z$]*\s[1-9]*$/.test(adres)){
      alert("Adres is niet correct");
    }
    $("#formsent").show();
  });
  $("#name").hover(function(){
    $("#naaminfo").collapse("show");
  },
  function(){
    $("#naaminfo").collapse("hide");
  });
  $("#adres").hover(function(){
    $("#adresinfo").collapse("show");
  },
  function(){
    $("#adresinfo").collapse("hide");
  });
});
