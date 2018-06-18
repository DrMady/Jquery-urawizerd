var hp = $.get("http://hp-api.herokuapp.com/api/characters")
.then(function(data){
data.forEach(function(characters){

$('.list-group').append('<li id="changer" class="list-group-item active">'+characters.name+'</li>'+'<li class="list-group-item"> <p>House:</p>'+characters.house+'</li>');



console.log(characters.name, "Maison: ", characters.house);
})});
