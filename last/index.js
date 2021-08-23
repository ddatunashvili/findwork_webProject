//api
fetch("http://quotes.stormconsultancy.co.uk/random.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.querySelector(".api").innerHTML=data.quote+" ----<br>"+data.author

  });
